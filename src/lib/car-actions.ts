const LEMON_CARS = "https://nolemons2.onrender.com/api/v2/cars/";
const IMPORT_A_CAR = "https://nolemons2.onrender.com/parser/api/v1/cars/";

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
  let req_url = LEMON_CARS;
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
