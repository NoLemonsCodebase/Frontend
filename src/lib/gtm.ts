export const gtmPageView = (props: { [key: string]: any }) => {
  window.dataLayer?.push({
    event: "page_view",
    pageUrl: window.location.href,
    ...props,
  });
};
