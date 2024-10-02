type Props = {
  category: string;
  search?: string;
};

// --------------------

export async function getCars({ category = "uae", search = "" }: Props) {
  try {
    if (category == "all") {
      const [uae_data, import_data] = await Promise.all([
        fetchData(`${process.env.OUR_API}/api/v2/cars/?search=${search}`),
        fetchData(
          `${process.env.OUR_API}/parser/api/v1/cars/?search=${search}`
        ),
      ]);

      return [...uae_data, ...import_data];
    }

    if (category == "uae") {
      const uae_data = await fetchData(`${process.env.OUR_API}/api/v2/cars/`);
      return uae_data;
    }

    if (category == "import-a-car") {
      const import_data = await fetchData(
        `${process.env.OUR_API}/parser/api/v1/cars/`
      );
      return import_data;
    }
  } catch (e: any) {
    throw new Error("Oops! Something went wrong");
  }
}

export async function getUaeCar(id: string) {
  let req_url = `${process.env.OUR_API}/api/v2/cars/`;

  if (Number.isInteger(Number(id))) {
    req_url += id;
  } else {
    req_url = `${process.env.OUR_API}/cars/by-route/${id}/`;
  }
  const res = await fetch(req_url, { next: { revalidate: 0 } });

  if (!res.status || res.status !== 200) {
    throw new Error("Car not found");
  }

  const data = res.json();
  return data;
}

export async function getImportCar(id: string) {
  const res = await fetch(`${process.env.OUR_API}/parser/api/v1/cars/${id}`, {
    next: { revalidate: 0 },
  });

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
