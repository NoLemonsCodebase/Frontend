type Props = {
  category: string;
  search?: string;
};

// --------------------

export async function getCars({ category = "uae", search = "" }: Props) {
  try {
    if (category == "all") {
      const uae_data = await fetchData(
        `${process.env.OUR_API}/api/v2/cars/?search=${search}`
      );
      const import_data = await fetchData(
        `${process.env.OUR_API}/parser/api/v1/cars/?search=${search}`
      );
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
    sendErrorMessageToSlack(
      `Something went wrong with the main server!! Error Message => ${e.message}`
    );
  }
}

export async function getUaeCar(id: string) {
  let req_url = `${process.env.OUR_API}/api/v2/cars/`;

  try {
    if (Number.isInteger(Number(id))) {
      req_url += id;
    } else {
      req_url = `${process.env.OUR_API}/cars/by-route/${id}/`;
    }
    const res = await fetch(req_url, { next: { revalidate: 0 } });
    if (!res.ok) {
      throw new Error(`this car ${id} is Not found!!`);
    }
    const data = res.json();
    return data;
  } catch (e: any) {
    sendErrorMessageToSlack(
      `Somthing went wrong with single car page Error Message => ${e.message}`
    );
  }
}

export async function getImportCar(id: string) {
  let req_url = `${process.env.OUR_API}/parser/api/v1/cars/`;

  try {
    if (Number.isInteger(Number(id))) {
      req_url += id;
    } else {
      req_url = `${process.env.OUR_API}/parser/by-route/${id}/`;
    }

    const res = await fetch(req_url, {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(`this car ${id} is Not found!!`);
    }

    const data = res.json();
    return data;
  } catch (e: any) {
    sendErrorMessageToSlack(
      `Somthing went wrong with single car page Error Message => ${e.message}`
    );
  }
}

async function fetchData(url: string) {
  const res = await fetch(url, { next: { revalidate: 0 } });
  const data = await res.json();
  return data;
}

export async function sendErrorMessageToSlack(message: string) {
  const url_slack =
    "https://hooks.slack.com/services/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";
  const res = await fetch(url_slack, {
    method: "POST",
    body: JSON.stringify({
      text: message,
    }),
  });
}
