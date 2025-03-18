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

const BannerTable = ({
  setItemEdit,
  handleAddBanner,
  bannerData,
  isFetching,
  isLoading,
}) => {
  return (
    <>
      <div className=" overflow-y-auto max-h-[calc(100dvh-250px)] md:max-h-[calc(100dvh-240px)] lg:max-h-[calc(100dvh-10px)] lg:mb-0  relative">
        {isFetching && !isLoading && <FetchingSpinner />}
        <div className="outer-wrapper">
          <div className="wrapper h-[500px] ">
            <div className=" relative flex justify-center h-full w-full">
              {isLoading && <Loader />}
              {bannerData?.data.map((item, key) => {
                if (item.banner_page === "Home") {
                  const bannerImage =
                    getConvertStringToJSONparseData(item.banner_image) || [];

                  return (
                    <div
                      className="relative flex justify-center w-full"
                      key={key}
                    >
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

                      <h1 className="text-[clamp(20px,3vw,34px)] md:w-[592px] md:mx-[15%] text-center font-hindBold absolute top-0 md:mt-[10%] mt-[120px] lg:mt-[84px]">
                        <a
                          className="absolute cursor-pointer tooltip-header-nav z-[1]  -right-9 -top-7"
                          data-tooltip="Upload Contents"
                          onClick={handleAddBanner}
                        >
                          <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                        </a>
                        {item.banner_title}
                      </h1>
                    </div>
                  );
                }
              })}

              <div className=" lg:max-h-[143px] shadow-md bg-light w-[352px] md:w-[650px] lg:w-[1240px] place-self-center absolute top-[300px] lg:top-[350px] place-content-center place-items-center px-9  md:py-9 py-9">
                <div className="flex flex-col lg:flex lg:flex-row gap-5 items-center ">
                  <div className="flex flex-col gap-2">
                    <span htmlFor="" className="text-xs font-hindRegular">
                      Properties Status
                    </span>
                    <select
                      name="status"
                      className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[180px] "
                    >
                      <option value="all">Any</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span htmlFor="" className="text-xs font-hindRegular">
                      Location
                    </span>
                    <select
                      name="location"
                      className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[329px] "
                    >
                      <option value="all">Any</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span htmlFor="" className="text-xs font-hindRegular">
                      Property Type
                    </span>
                    <select
                      name="type"
                      className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[255px] "
                    >
                      <option value="all">Any</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span htmlFor="" className="text-xs font-hindRegular">
                      Keyword
                    </span>
                    <form className="search-box">
                      <div>
                        <input
                          type="search"
                          placeholder="Search here..."
                          className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[196px] "
                        />
                      </div>
                    </form>
                  </div>
                  <button className="btn mt-6">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTable;
