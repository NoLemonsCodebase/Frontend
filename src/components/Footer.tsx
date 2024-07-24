import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 ml-4 px-4 pt-6 lg:pt-8 md:grid-cols-2">
            <div>
                <h2 className="mb-6 font-semibold text-white">Buy and Sell</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="https://www.nolemons.ae/en/p/about-us-2" className=" hover:underline">About us</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://www.nolemons.ae/en/p/buyer-guide-local" className="hover:underline">UAE buyer guide</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://www.nolemons.ae/en/p/buyer-guide" className="hover:underline">International buyer guide</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://www.nolemons.ae/en/sell-your-car" className="hover:underline">Sell your car</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 font-semibold text-white">Legal</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="https://www.nolemons.ae/en/p/privacy-policy" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://www.nolemons.ae/en/p/buyer-protection" className="hover:underline">Buyer Protection</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://www.nolemons.ae/en/p/terms-conditions" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="pb-6 pl-6 sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://nolemons.ae/" className="hover:underline">NoLemons™</a>
          </span>
          <span className="flex w-64 text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-2">
          No Lemons Solution FZ-LLC
          HD69C
          In5 Tech DIC - Dubai, UAE
          </span>
          <div className="flex pb-5 mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/nolemons.ae" className="text-gray-500 hover:text-gray-300">
                  {/* <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg> */}
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                    </svg>

                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://www.instagram.com/nolemons_co/" className="text-gray-500 hover:text-gray-300 ms-5">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                </svg>

                  <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/nolemons/" className="text-gray-500 hover:text-gray-300 ms-5">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
                <span className="sr-only">LinkedIn page</span>
              </a>
              
          </div>
      </div>

        </div>
    </footer>
  );
};

export default Footer;
