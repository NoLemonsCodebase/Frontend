const NO_LEMON_CARS = "https://nolemons2.onrender.com/api/v2/cars";
const IMPORT_A_CAR = "https://nolemons2.onrender.com/parser/api/v1/cars";

type Props = {
  category: string;
  search?: string;
};

export async function getCars({ category = "uae", search = "" }: Props) {
  try {
    if (category == "all") {
      const [uae_data, import_data] = await Promise.all([
        fetchData(`${NO_LEMON_CARS}?search=${search}`),
        fetchData(`${IMPORT_A_CAR}?search=${search}`),
      ]);

      return [...uae_data, ...import_data];
    }

    if (category == "uae") {
      const uae_data = await fetchData(NO_LEMON_CARS);
      return uae_data;
    }

    if (category == "import-a-car") {
      const import_data = await fetchData(IMPORT_A_CAR);
      return import_data;
    }
  } catch (e: any) {
    throw new Error("Oops! Something went wrong");
  }
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

async function fetchData(url: string) {
  const res = await fetch(url, { next: { revalidate: 0 } });
  const data = res.json();
  return data;
}
