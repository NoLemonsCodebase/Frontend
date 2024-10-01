"use server";

const UDS_TO_AED: number = 3.67;

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

  //========= refactor some attributes
  let offer_value = "";
  if (offer && typeof offer == "string") {
    offer_value = offer.split(",").join("");
  }

  // validation name
  if (typeof name == "string" && !/^[a-zA-z ]+$/g.test(name))
    return { ...prevState, nameErr: "Invalid name" };

  // validation offer price
  if (offer && sale_price) {
    const sale_price_num = Number(sale_price);
    const offer_price_num = Number(offer_value);
    let offer_price_AED = offer_price_num;

    if (currency == "USD") {
      offer_price_AED = offer_price_AED * UDS_TO_AED;
    }

    const present30 = (offer_price_AED / 100) * 30;

    if (offer_price_AED < sale_price_num - present30)
      return {
        ...prevState,
        error:
          "Your offer is too low, please submit an offer that is within 30% of the asking price",
      };

    if (offer_price_AED > sale_price_num + present30)
      return {
        ...prevState,
        error:
          "Your offer is too high, please submit an offer that is within 30% of the asking price",
      };
  }

  const data = {
    name,
    phone,
    car_id: "67",
    currency,
    offer: offer_value,
    sale_price,
  };

  const res = await fetch("https://nolemons-dev.onrender.com/user-offer/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify(data),
  });

  const { status } = await res.json();

  if (!res.ok) {
    return {
      ...prevState,
      phoneErr: status || "somthing wrong",
    };
  }

  return {
    ...prevState,
    message: "successfully",
    error: "",
    nameErr: "",
    phoneErr: "",
  };
}
