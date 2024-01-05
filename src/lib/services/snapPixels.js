function trackWithData(type, data) {
  snaptr("track", type, data);
}

async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);

  // hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

export const TrackBidViaWA = async (phone) => {
  try {
    trackWithData("ADD_CART", {
      user_phone_number: phone,
      user_hashed_email: await sha256(phone),
    });
  } catch (e) {
    console.error(e);
  }
};

export const TrackGetEarlyAccessClick = async () => {
  try {
    trackWithData("CUSTOM_EVENT_1");
  } catch (e) {
    console.error(e);
  }
};
