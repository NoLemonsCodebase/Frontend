const NO_LEMON_CARS = "https://nolemons2.onrender.com/api/v2/cars";
const IMPORT_A_CAR = "https://nolemons2.onrender.com/parser/api/v1/cars";

export async function getCars({ category = "uae" }: { category: any }) {
  try {
    if (category == "all" || !category) {
      const [uae_data, import_data] = await Promise.all([
        getUaeCars(),
        getImportCars(),
      ]);

      return [...uae_data, ...import_data];
    }

    if (category == "uae") {
      const uae_data = await getUaeCars();
      return uae_data;
    }

    if (category == "import-a-car") {
      const import_data = await getImportCars();
      return import_data;
    }
  } catch (e: any) {
    throw new Error("Oops! Something went wrong");
  }
}

async function getUaeCars() {
  let req_url = NO_LEMON_CARS;
  const res = await fetch(req_url, { next: { revalidate: 0 } });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = res.json();
  return data;
}

async function getImportCars() {
  let req_url = IMPORT_A_CAR;
  const res = await fetch(req_url, { next: { revalidate: 0 } });
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = res.json();
  return data;
}

export async function getUaeCar(id: string) {
  let req_url = NO_LEMON_CARS;

  if (Number.isInteger(Number(id))) {
    req_url = `${NO_LEMON_CARS}/${id}`;
  } else {
    req_url = `https://nolemons2.onrender.com/cars/by-route/${id}/`;
  }
  const res = await fetch(req_url, { next: { revalidate: 0 } });

  if (!res.status || res.status !== 200) {
    throw new Error("Car not found");
  }

  const data = res.json();
  return data;
}

export async function getImportCar(id: string) {
  const res = await fetch(`${IMPORT_A_CAR}/${id}`, { next: { revalidate: 0 } });

  if (!res.status || res.status !== 200) {
    throw new Error("Car not found");
  }

  const data = res.json();
  return data;
}
