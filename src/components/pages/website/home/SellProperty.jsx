import React from "react";
import SellMyPropertySvg from "../../../partials/svg/SellMyPropertySvg";
import { devApiVersion, devNavUrl } from "../../../helpers/functions-general";
import BuyAPropertySvg from "../../../partials/svg/BuyAPropertySvg";
import useQueryData from "../../../custom-hooks/useQueryData";

const SellProperty = () => {
  const { data: sellPropertyData } = useQueryData(
    `${devApiVersion}/sell-property`, // endpoint
    "get", // method
    "sell-property" // key
  );
  return (
    <>
      <div className="flex flex-wrap gap-6 place-content-center md:my-48 my-12">
        <div className="flex flex-col items-center gap-4  w-[362px] h-[362px] p-6 hover:outline-8 hover:shadow-xl group">
          <SellMyPropertySvg />
          {sellPropertyData?.data.map((item, key) => (
            <div key={key} className="flex flex-col items-center gap-5">
              <p className="font-hindBold text-[clamp(16px,3vw,18px)] uppercase">
                {item.sell_title}
              </p>
              <p className="font-hindRegular text-[clamp(14px,3vw,16px)] text-center min-h-[60px]">
                {item.sell_description}
              </p>
              <a
                className="btn group-hover:shadow-[inset_300px_0_0_0_#007B80] absolute bottom-0"
                href={`${devNavUrl}/properties`}
              >
                {item.sell_button}
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4  w-[362px] h-[362px] p-6 hover:outline-8 hover:shadow-xl group relative">
          <BuyAPropertySvg />
          {sellPropertyData?.data.map((item, key) => (
            <div key={key} className="flex flex-col items-center gap-5">
              <p className="font-hindBold text-[clamp(16px,3vw,18px)] uppercase">
                {item.sell_buy_title}
              </p>
              <p className="font-hindRegular text-[clamp(14px,3vw,16px)] text-center min-h-[60px]">
                {item.sell_buy_description}
              </p>
              <a
                className="btn group-hover:shadow-[inset_300px_0_0_0_#007B80] absolute bottom-0"
                href={`${devNavUrl}/properties`}
              >
                {item.sell_buy_button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SellProperty;
