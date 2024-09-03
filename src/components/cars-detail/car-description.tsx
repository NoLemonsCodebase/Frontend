import { ICar } from "@/lib/types";
import { Fragment, useState } from "react";
import { IoLanguage } from "react-icons/io5";
import RichText from "../RichText";

export default function CarDescription({ carDetail }: { carDetail: ICar }) {
  const [lan, setLan] = useState<string>("en");

  const switchArabic = () => setLan("ar");
  const switchEnglish = () => setLan("en");

  const { car_text_section_arabic } = carDetail;

  return (
    <div className="md:pr-10">
      {car_text_section_arabic ? (
        <div className=" relative flex items-center border w-[212px] p-1 rounded-full mb-8">
          <button
            onClick={switchEnglish}
            className={`basis-24 transition-colors duration-300 ${
              lan == "en" ? "text-white" : "text-black"
            }`}
          >
            English
          </button>
          <IoLanguage className="basis-5 text-white" />
          <button
            onClick={switchArabic}
            className={`basis-24 transition-colors duration-300 ${
              lan == "ar" ? "text-white" : "text-black"
            }`}
          >
            العربية
          </button>
          <span
            className={`left-0 -z-10 transition-transform duration-300 bg-black bg-opacity-80 w-32 h-full absolute rounded-full ${
              lan == "en" ? "translate-x-0" : "translate-x-[82px]"
            }`}
          ></span>
        </div>
      ) : null}

      {lan == "ar" ? (
        <RichText content={car_text_section_arabic?.content} />
      ) : (
        <Fragment>
          <RichText className="mt-2" content={carDetail.description} />
          {carDetail.car_text_section.map((section: any, index: number) => (
            <Fragment key={index}>
              <h2 className="text-2xl font-bold mt-8">{section.title}</h2>
              <RichText className="mt-2" content={section.content} />
            </Fragment>
          ))}
        </Fragment>
      )}
    </div>
  );
}
