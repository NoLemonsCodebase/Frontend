import ZoomEffect from "@/components/anim/zoom";
import useSoundCash from "@/lib/hooks/use-cash-sound";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineDone } from "react-icons/md";

export default function SuccessMessage({ session }: any) {
  useSoundCash();
  const { metadata } = session;

  return (
    <div className=" relative  max-w-xl m-auto px-4">
      <ZoomEffect dur={0.4}>
        <MdOutlineDone className=" mb-4 bg-green-100 rounded-full text-green-600 p-4 text-7xl mx-auto" />
      </ZoomEffect>
      <div className=" text-center mb-8">
        <p className=" text-gray-900 font-semibold text-2xl md:text-4xl mb-1">
          Thank you <br /> your offer has been recieved.
        </p>
        <span className=" text-sm text-gray-400 block">
          The owner has been notified and will contact you directly if
          interested.
        </span>
      </div>

      <OfferDetail session={session} />
      <Link
        href={metadata.url_after_complete}
        className=" bg-green-500 text-center hover:bg-green-600 px-4 py-2 rounded-full block text-white"
      >
        Done!
      </Link>
    </div>
  );
}

function OfferDetail({ session }: any) {
  const { created, metadata, customer_details } = session;
  const {
    main_image,
    title,
    year: car_year,
    currency,
    phone,
    finalPrice,
    sale_price,
    name,
  } = metadata;

  const sale_price_render = Number(sale_price).toLocaleString();

  // date of verify credit card
  const timestamp = created;
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className=" border-t  border-t-gray-100 py-20">
      <p className=" text-center text-2xl md:text-4xl mb-8 text-gray-600">
        Offer Detail
      </p>
      <div className=" flex justify-between items-center gap-4 mb-20">
        <div className="basis-[35%] rounded-lg overflow-hidden">
          <Image
            className=" object-cover h-full"
            src={main_image}
            width={1110}
            height={740}
            priority
            alt="main image"
          />
        </div>
        <div className=" text-xl md:text-3xl basis-[65%]">
          <span className=" font-bold">{car_year}</span> <br /> {title}
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <OfferDetialItem title="Date" value={formattedDate} />
        <OfferDetialItem
          title="Asking Price"
          value={`${currency} ${sale_price_render}`}
        />
        <OfferDetialItem title="Offer" value={`${currency} ${finalPrice}`} />
        <OfferDetialItem title="Name" value={name} />
        <OfferDetialItem title="Email" value={customer_details.email} />
        <OfferDetialItem title="Phone" value={`+${phone}`} />
      </div>
    </div>
  );
}

function OfferDetialItem({ title, value }: any) {
  return (
    <>
      {value && (
        <div className=" flex justify-between">
          <p className=" text-gray-500 font-semibold">{title}:</p>
          <span className=" text-sm">{value}</span>
        </div>
      )}
    </>
  );
}
