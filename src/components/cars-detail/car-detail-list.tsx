import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Fancybox from "../fancybox";

const CarDetailList: React.FC<{ isCard?: boolean; carDetail: any }> = ({
  isCard,
  carDetail,
}) => {
  // to prevent hydration error
  const [onClient, setOnClient] = useState(false);
  useEffect(() => {
    setOnClient(true);
  }, []);

  const t = useTranslations("default.car_page");

  // extract field from carDetail
  const {
    category,
    location,
    vin,
    engine,
    drivetrain,
    transmission,
    trim,
    mileage,
    mileage_type,
    regional_spec,
    warranty,
    service_contract,
    title_status,
    exterior_color,
    interior_color,
    market_value,
    inspection_report_link,
    service_history_link,
    history_report_link,
    spec_sheet_link,
    carfax_report_link,
    accident_check_link,
    arabic_description_link,

    buyers_fee,
  } = carDetail;

  const sections = [
    {
      title: t("location"),
      value: location,
    },
    {
      title: t("vin"),
      value: vin,
    },
    {
      title: t("engine"),
      value: engine,
    },
    {
      title: t("drivetrain"),
      value: drivetrain,
    },
    {
      title: t("transmission"),
      value: transmission,
    },
    {
      title: t("trim"),
      value: trim,
    },
    {
      title: t("mileage"),
      value: mileage,
    },
    {
      title: t("mileage_type"),
      value: mileage_type,
    },
    {
      title: t("regional_spec"),
      value: regional_spec,
    },
    {
      title: t("warranty"),
      value: warranty,
    },
    {
      title: t("service_contract"),
      value: service_contract,
    },
    {
      title: t("title_status"),
      value: title_status,
    },
    {
      title: t("exterior_color"),
      value: exterior_color,
    },
    {
      title: t("interior_color"),
      value: interior_color,
    },
    {
      title: t("market_value"),
      value: market_value,
    },
    {
      title: "Buyers Fee",
      value: buyers_fee,
    },
  ];

  // links to PDF
  const inspectionReport = inspection_report_link;
  const serviceHistory = service_history_link;
  const historyReport = history_report_link;
  const specSheet = spec_sheet_link;
  const carfaxReport = carfax_report_link;
  const accidentCheck = accident_check_link;
  const arabicReport = arabic_description_link;
  // const sellerWhatsapp = seller_whatsapp;

  const linksReports = [
    {
      title: t("inspection_report_link"),
      link: inspectionReport,
    },
    {
      title: t("service_history_link"),
      link: serviceHistory,
    },
    {
      title: t("history_report_link"),
      link: historyReport,
    },
    {
      title: t("spec_sheet_link"),
      link: specSheet,
    },
    {
      title: t("carfax_report_link"),
      link: carfaxReport,
    },
    {
      title: t("accident_check_link"),
      link: accidentCheck,
    },
  ];

  // hide vin
  const is_parsed = category == "import_a_car";
  let fields_render = sections;
  if (is_parsed) fields_render = sections.filter((_, idx) => idx !== 1);

  return (
    <div
      className={cn(
        "flex flex-col mt-2 overflow-x-scroll",
        isCard && "sm:mt-0 shadow bg-white p-4"
      )}
    >
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="divide-y divide-gray-200">
          {/* ====================== values fields ========================= */}
          {fields_render.map(({ title, value }, idx) =>
            value ? (
              <tr key={idx}>
                <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  {title}:
                </td>
                <td className="py-2 whitespace-nowrap text-sm text-gray-500">
                  {/* {title == "Mileage" ? value.toLocaleString() : value} */}
                  {onClient && title === "Mileage"
                    ? value.toLocaleString()
                    : value}
                </td>
              </tr>
            ) : null
          )}

          {/* ====================== Report Links ========================= */}

          {linksReports.map(({ title, link }) =>
            link ? (
              <tr key={title}>
                <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  {title}:
                </td>
                <td className="py-2 whitespace-nowrap  text-sm text-gray-500">
                  <a
                    href={link}
                    target="_blank"
                    className="text-blue-500 flex  hover:text-blue-700"
                  >
                    {t("open_report")}
                    <LiaExternalLinkAltSolid className=" text-xl ml-1" />
                  </a>
                </td>
              </tr>
            ) : null
          )}

          {/* ====================== arabic Report Links ========================= */}
          {arabicReport ? (
            <tr>
              <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                الوصف (باللغة العربية)
              </td>
              <td className="py-2 whitespace-nowrap  text-sm text-gray-500">
                <a
                  href={arabicReport}
                  target="_blank"
                  className="text-blue-500 flex  hover:text-blue-700"
                >
                  <span>افتح الملف</span>
                  <LiaExternalLinkAltSolid className=" text-xl ml-1" />
                </a>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default CarDetailList;
