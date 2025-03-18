import React from "react";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import LoadImages from "../../../partials/LoadImages";
import { FaRegImages } from "react-icons/fa";

const AboutTable = ({
  setItemEdit,
  handleAddAbout,
  isFetching,
  isLoading,
  aboutData,
}) => {
  return (
    <>
      <div className=" overflow-y-auto lg:mb-0  relative">
        {isFetching && !isLoading && <FetchingSpinner />}
        <div>
          {aboutData?.data.map((item, key) => {
            const aboutImage =
              getConvertStringToJSONparseData(item.about_img) || [];
            const logoImage =
              getConvertStringToJSONparseData(item.about_logo_img) || [];
            return (
              <div
                className="bg-[#F9FFFF] flex h-[614px] lg:max-w-[1233px] place-self-center relative"
                key={key}
              >
                {aboutImage.map((image, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${image?.id}`}
                    alt={`${item.about_name}`}
                    className="max-w-[571px] max-h-[687px]  -top-20 lg:block hidden"
                    key={index}
                  />
                ))}
                <div className="flex flex-col gap-6 max-w-[698px] lg:place-self-end py-12 px-4">
                  <h1 className="text-[clamp(30px,3vw,71px)] font-hindBold">
                    {item.about_name}
                    <a
                      className="absolute cursor-pointer tooltip-header-nav z-[1] right-20"
                      data-tooltip="Upload Contents"
                      onClick={handleAddAbout}
                    >
                      <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                    </a>
                  </h1>
                  <p>{item.about_paragraph_a}</p>
                  <p>{item.about_paragraph_b}</p>
                  <p>{item.about_paragraph_c}</p>

                  <div className="flex gap-2 place-self-end md:mt-24">
                    {logoImage.map((image, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${image?.id}`}
                        alt={`${item.about_name}`}
                        className="w-[60px] md:w-[70px] md:h-[85px] object-cover"
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutTable;
