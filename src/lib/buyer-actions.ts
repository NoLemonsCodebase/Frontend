import { sendErrorMessageToSlack } from "./car-actions";

export async function captureingDataOfBuyer(prepare_data: any) {
  const { name, phone, car_id } = prepare_data;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_OUR_API}/user-offer/`, {
      method: "POST",
      body: JSON.stringify(prepare_data),
    });
    if (!res.ok) {
      throw new Error(
        `Something went wrong with capturing the user's details in step 2. name: ${name} | phone: ${phone} | carId: ${car_id}`
      );
    }
  } catch (e: any) {
    sendErrorMessageToSlack(e.message);
    console.error(e.message);
  }
}
