import useSoundCash from "@/lib/hooks/use-cash-sound";
import Image from "next/image";
import Link from "next/link";

export default function DetailSuccessMessage({ session }: any) {
  useSoundCash();
  const { metadata } = session;

  return (
    <>
      <OfferDetail session={session} />
      <Link
        href={metadata.url_after_complete}
        className=" bg-green-500 text-center hover:bg-green-600 px-4 py-2 rounded-full block text-white"
      >
        Done!
      </Link>
    </>
  );
}

function OfferDetail({ session }: any) {
  const { metadata, customer_details } = session;
  const {
    main_image,
    title,
    year: car_year,
    currency,
    phone,
    finalPrice,
    sale_price,
    name,
    buyers_fee,
  } = metadata;

  const sale_price_render = Number(sale_price).toLocaleString();
  const buyer_fee_num = (
    (Number(buyers_fee?.[0]) / 100) *
    sale_price
  ).toLocaleString("en-US");

  return (
    <div className=" border-t  border-t-gray-100 py-10">
      <div className=" flex flex-col gap-4 mb-6">
        <div className="rounded-lg overflow-hidden">
          <Image
            className=" object-cover h-full"
            src={main_image}
            width={1110}
            height={740}
            priority
            alt="main image"
          />
        </div>
        <div className=" text-xl md:text-3xl ">
          {car_year} {title}
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <div className={" overflow-x-scroll"}>
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              {/* ====================== values fields ========================= */}
              <OfferDetialItem
                title="Asking Price"
                value={`${currency} ${sale_price_render}`}
              />

              <OfferDetialItem
                title="Offer"
                value={`${currency} ${finalPrice}`}
              />
              <OfferDetialItem
                title="Buyer Fee"
                value={`${buyers_fee} (${currency} ${buyer_fee_num})`}
              />
              <OfferDetialItem title="Name" value={name} />
              <OfferDetialItem title="Email" value={customer_details?.email} />
              <OfferDetialItem title="Phone" value={`+${phone}`} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function OfferDetialItem({ title, value }: any): any {
  return (
    <>
      {value && (
        <tr className="flex justify-between">
          <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-900  ">
            {title}:
          </td>
          <td className="py-2 whitespace-nowrap text-sm text-gray-500">
            {value}
          </td>
        </tr>
      )}
    </>
  );
}
