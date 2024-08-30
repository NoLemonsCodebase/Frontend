import Image from "next/image";
import Link from "next/link";

// Footer Icon
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import * as React from "react";

interface IFooterProps {}

function Footer(props: IFooterProps): React.ReactElement {
  return (
    <footer className="p-3 md:p-4">
      <div className="rounded-2xl bg-black pt-10 pb-20 md:py-14">
        <div className="container m-auto px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10 md:pb-10">
            <div>
              <div className="max-w-[80px] md:max-w-[100px]">
                <Image
                  width={702}
                  height={702}
                  src="/logo-web.webp"
                  alt="yellow-logo"
                  priority
                />
              </div>
              <span className="max-w-[240px] block text-sm text-gray-400 pt-4">
                No Lemons Solution FZ-LLC HD69C In5 Tech DIC - Dubai, UAE
              </span>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">About</h2>
              <ul className="flex list-none flex-col gap-2 font-medium text-gray-400">
                <li>
                  <a
                    href="https://nolemons.help/about-us"
                    className="hover:underline"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="https://nolemons.help/faqs"
                    className="hover:underline"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href="https://nolemons.help/testimonials"
                    className="hover:underline"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="https://nolemons.help/what-is-nolemons"
                    className="hover:underline"
                  >
                    What is NoLemons ?
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold text-xl text-white">
                Buy and Sell
              </h2>
              <ul className="flex list-none flex-col gap-2 font-medium text-gray-400">
                <li>
                  <Link href="/how-it-works" className="hover:underline">
                    How it works ?
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-car" className="hover:underline">
                    Sell your car
                  </Link>
                </li>
                <li>
                  <Link href="/request-a-car" className="hover:underline">
                    Request a car
                  </Link>
                </li>
                <li>
                  <Link href="/why-us" className="hover:underline">
                    Why us ?
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold text-xl text-white">Legal</h2>
              <ul className="flex list-none flex-col gap-2 font-medium text-gray-400">
                <li>
                  <a
                    href="https://nolemons.help/privacy-policy/"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://nolemons.help/uae-buyer-guide/"
                    className="hover:underline"
                  >
                    Buyer Protection
                  </a>
                </li>
                <li>
                  <a
                    href="https://nolemons.help/terms-and-conditions/"
                    className="hover:underline"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://nolemons.help/seller-agreement"
                    className="hover:underline"
                  >
                    Sell Agreement
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-10 border-gray-700 sm:mx-auto md:my-12" />

          <div className="mt-4 flex items-center justify-center gap-3 pb-5 sm:mt-0">
            <a
              href="https://www.facebook.com/nolemons.ae"
              className="block rounded-full border border-gray-500 p-2 text-gray-500 hover:text-gray-300"
              target="_blank"
            >
              <FaFacebookF className=" " />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/nolemons_co/"
              className="block rounded-full border border-gray-500 p-2 text-gray-500 hover:text-gray-300"
            >
              <FaInstagram className=" " />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/nolemons/"
              className="block rounded-full border border-gray-500 p-2 text-gray-500 hover:text-gray-300"
            >
              <FaLinkedinIn className=" " />
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>

          <span className="block text-center text-sm text-gray-400 md:mt-4">
            © 2024{" "}
            <a href="https://nolemons.ae/" className="hover:underline">
              NoLemons™
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
