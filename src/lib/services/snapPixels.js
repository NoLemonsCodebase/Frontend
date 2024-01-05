function trackWithData(type, data) {
  snaptr("track", type, data);
}

export const TrackBidViaWA = (phone) => {
  try {
    trackWithData("BID_VIA_WA", { user_phone_number: phone });
  } catch (e) {
    console.error(e);
  }
};
