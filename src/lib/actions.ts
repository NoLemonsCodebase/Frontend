"use server";

export async function makeAnOfferAction(
  prevState: any,
  formData: FormData
): Promise<void> {
  // extract data from form submition
  const name = formData.get("name");
  const phone = formData.get("phone");
  const offer = formData.get("offer_price");
  const sale_price = formData.get("sale_price");
  const car_id = formData.get("car_id");
  const currency = formData.get("currency");

  // validation name
  if (typeof name == "string" && !/^[a-zA-z ]+$/g.test(name))
    return { ...prevState, error: "Invalid name" };

  // validation offer price
  if (offer && sale_price) {
    const sale_price_num = Number(sale_price);
    const offer_price_num = Number(offer);

    const present30 = (sale_price_num / 100) * 30;
    if (offer_price_num < sale_price_num - present30)
      return {
        ...prevState,
        error:
          "Your offer is too low, please submit an offer that is within 30% of asking price",
      };

    if (offer_price_num > sale_price_num + present30)
      return {
        ...prevState,
        error:
          "Your offer is too hight, please submit an offer that is within 30% of asking price",
      };
  }
  const data = {
    name,
    phone,
    car_id,
    currency,
    offer,
    sale_price,
  };

  // const res = await fetch(
  //   "https://hook.eu2.make.com/k71nt4dic6n2yit9potwlwe75vwh7f85",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json", // Set the content type to JSON
  //     },
  //     body: JSON.stringify(data),
  //   }
  // );

  // if (!res.ok) {
  //   throw new Error(`Error: Something went wrong`);
  // }

  await new Promise((res) => setTimeout(res, 3000));
  return { ...prevState, message: "successfully", error: "" };
}
