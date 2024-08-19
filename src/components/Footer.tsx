import Image from "next/image";
import Link from "next/link";

// Footer Icon
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="md:p-4 p-3">
      <div className="bg-black rounded-2xl py-10 md:py-12">
        <div className=" container m-auto px-8">
          <div className="grid grid-cols-1 gap-12 md:gap-10 md:grid-cols-4 md:pb-10">
            <div>
              <div className="max-w-[80px] md:max-w-[100px] mb-4">
                <Image
                  width={702}
                  height={702}
                  src="/logo-web.webp"
                  alt="yellow-logo"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-semibold text-white">Buy and Sell</h2>
              <ul className="text-gray-400 flex flex-col gap-2 font-medium list-none">
                <li>
                  <Link href="/sell-your-car" className="hover:underline">
                    How it works ?
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-car" className="hover:underline">
                    Sell your car
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-car" className="hover:underline">
                    Request a car
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-car" className="hover:underline">
                    Why us ?
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold text-white">Legal</h2>
              <ul className="text-gray-400 flex flex-col gap-2 font-medium list-none">
                <li>
                  <a
                    href="https://www.nolemons.ae/en/p/privacy-policy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nolemons.ae/en/p/buyer-protection"
                    className="hover:underline"
                  >
                    Buyer Protection
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nolemons.ae/en/p/terms-conditions"
                    className="hover:underline"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <span className=" max-w-[256px] text-sm md:pt-8 text-gray-400 ">
              No Lemons Solution FZ-LLC HD69C In5 Tech DIC - Dubai, UAE
            </span>
          </div>
          <hr className="my-10  sm:mx-auto border-gray-700 md:my-12" />

          <div className="flex gap-3 pb-5 mt-4 items-center justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/nolemons.ae"
              className="text-gray-500 block hover:text-gray-300 border p-2 border-gray-500 rounded-full"
              target="_blank"
            >
              <FaFacebookF className="  " />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/nolemons_co/"
              className="text-gray-500 block hover:text-gray-300 border p-2 border-gray-500 rounded-full"
            >
              <FaInstagram className="  " />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/nolemons/"
              className="text-gray-500 block hover:text-gray-300 border p-2 border-gray-500 rounded-full"
            >
              <FaLinkedinIn className="  " />
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>

          <span className="text-sm block text-center text-gray-400 md:mt-4">
            © 2024{" "}
            <a href="https://nolemons.ae/" className="hover:underline">
              NoLemons™
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
