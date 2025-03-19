import React from "react";
import SellMyPropertySvg from "../../../../partials/svg/SellMyPropertySvg";
import { devNavUrl } from "../../../../helpers/functions-general";
import BuyAPropertySvg from "../../../../partials/svg/BuyAPropertySvg";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import { HiPencil } from "react-icons/hi";

const SellPropertyTable = ({
  setItemEdit,
  handleAddSellProperty,
  handleAddBuyProperty,
  sellPropertyData,
  isFetching,
  isLoading,
}) => {
  return (
    <>
      <div>
        {isFetching && !isLoading && <FetchingSpinner />}

        <div className=" flex flex-wrap gap-6 place-content-center md:my-48 my-12">
          <div className="flex flex-col items-center gap-4  w-[362px] h-[362px] p-6 hover:outline-8 hover:shadow-xl group relative">
            <a
              className="absolute cursor-pointer tooltip-header-nav right-2 top-2"
              data-tooltip="Edit contents"
              onClick={handleAddSellProperty}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
            </a>

            <SellMyPropertySvg />
            {sellPropertyData?.data.map((item, key) => (
              <div key={key} className="flex flex-col items-center gap-4">
                <p className="font-hindBold text-[clamp(16px,3vw,18px)] uppercase">
                  {item.sell_title}
                </p>
                <p className="font-hindRegular text-[clamp(12px,3vw,16px)] text-center min-h-[60px]">
                  {item.sell_description}
                </p>
                <a
                  className="btn group-hover:shadow-[inset_300px_0_0_0_#007B80] absolute bottom-0"
                  href={`${devNavUrl}/sellers`}
                >
                  {item.sell_button}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4  w-[362px] h-[362px] p-6 hover:outline-8 hover:shadow-xl group relative">
            <a
              className="absolute cursor-pointer tooltip-header-nav right-2 top-2"
              data-tooltip="Edit contents"
              onClick={handleAddBuyProperty}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
            </a>
            <BuyAPropertySvg />
            {sellPropertyData?.data.map((item, key) => (
              <div key={key} className="flex flex-col items-center gap-4">
                <p className="font-hindBold text-[clamp(16px,3vw,18px)] uppercase">
                  {item.sell_buy_title}
                </p>
                <p className="font-hindRegular text-[clamp(12px,3vw,16px)] text-center min-h-[60px]">
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
      </div>
    </>
  );
};

export default SellPropertyTable;
