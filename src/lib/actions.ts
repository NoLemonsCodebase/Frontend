"use server";

export async function makeAnOfferAction(
  prevState: any,
  formData: FormData
): Promise<void> {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const offer_price = formData.get("offer_price");
  const actual_price = formData.get("actual_price");

  if (name && typeof name == "string" && name.length < 3)
    return { ...prevState, message: "Invalid name" };

  if (
    offer_price &&
    actual_price &&
    typeof +offer_price == "number" &&
    typeof +actual_price == "number"
  ) {
    const present30 = (+actual_price / 100) * 30;
    if (+offer_price < +actual_price - present30)
      return {
        ...prevState,
        message:
          "Your offer is too low, please submit an offer that is within 30% of asking price",
      };

    if (+offer_price > +actual_price + +present30)
      return {
        ...prevState,
        message:
          "Your offer is too hight, please submit an offer that is within 30% of asking price",
      };
  }
  await new Promise((res) => setTimeout(res, 2000));

  // return { ...prevState, message: "not yet" };
}
