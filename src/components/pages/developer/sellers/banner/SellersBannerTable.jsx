import React from "react";
import { CiImageOn } from "react-icons/ci";
import { FaRegImages } from "react-icons/fa";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import Loader from "../../../../partials/spinners/Loader";

const SellersBannerTable = ({
  setItemEdit,
  handleAdd,
  bannerData,
  isFetching,
  isLoading,
}) => {
  return (
    <>
      <div className=" shadow-md overflow-y-auto max-h-[calc(100dvh-250px)] md:max-h-[calc(100dvh-240px)] lg:max-h-[calc(100dvh-10px)] mt-5 mb-10 lg:mb-0  relative">
        {isFetching && !isLoading && <FetchingSpinner />}
        <div className=" relative md:flex justify-center h-full w-full">
          {isLoading && <Loader />}
          {bannerData?.data.map((item, key) => {
            if (item.banner_page === "Sellers") {
              const bannerImage =
                getConvertStringToJSONparseData(item.banner_image) || [];

              return (
                <div className="relative flex justify-center w-full" key={key}>
                  {bannerImage.length > 0 ? (
                    bannerImage.map((image, index) => (
                      <div
                        className="relative w-full min-h-[375px] lg:max-h-[420px]"
                        key={index}
                      >
                        <LoadImages
                          url={`${googleHDViewLink}${image?.id}`}
                          alt={`${item.banner_title}`}
                          className="object-cover w-full h-full z-10"
                          isTableSpinner={true}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="bg-gray-300 inset-0 w-full h-[420px] object-cover">
                      <CiImageOn className="text-[10rem] place-self-center mt-20 text-gray-400" />
                    </div>
                  )}

                  <h1 className="text-[clamp(20px,3vw,34px)] md:w-[592px] md:mx-[15%] text-center font-hindBold absolute top-0 md:mt-[10%] mt-[120px] lg:mt-[84px] ">
                    <a
                      className="absolute cursor-pointer tooltip-header-nav z-[1]  -right-9 -top-7"
                      data-tooltip="Upload Contents"
                      onClick={handleAdd}
                    >
                      <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                    </a>
                    {item.banner_title}
                  </h1>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default SellersBannerTable;
