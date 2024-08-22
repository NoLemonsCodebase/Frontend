export const gtmPageView = (props: { [key: string]: any }) => {
  window.dataLayer?.push({
    event: "page_view",
    url: window.location.href,
    ...props,
  });
};
