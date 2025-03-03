import React from "react";
import Footer from "../../../partials/Footer";
import ContactForm from "../../../partials/ContactForm";
import FeaturedProperties from "../../../partials/FeaturedProperties";
import {
  devApiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import Navigation from "../Navigation";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";

const Properties = () => {
  const { data: bannerData } = useQueryData(
    `${devApiVersion}/banner`, // endpoint
    "get", // method
    "banner" // key
  );
  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Navigation />
          <div className=" relative flex justify-center">
            {bannerData?.data.map((item, key) => {
              if (item.banner_page === "Properties") {
                const bannerImage =
                  getConvertStringToJSONparseData(item.banner_image) || [];
                return (
                  <div
                    className=" relative flex justify-center w-full"
                    key={key}
                  >
                    {bannerImage.map((image, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${image?.id}`}
                        alt={`${item.banner_title}`}
                        className="object-cover min-h-[375px] lg:w-full lg:max-h-[420px]"
                        key={index}
                      />
                    ))}
                    <h1 className=" text-[clamp(20px,3vw,34px)] md:w-[592px] md:mx-[15%] text-center font-hindBold absolute top-0 md:mt-[10%] mt-[120px] lg:mt-[84px] ">
                      {item.banner_title}
                    </h1>
                  </div>
                );
              }
            })}

            <div className="lg:max-h-[143px] shadow-md bg-light w-[352px] md:w-[650px] lg:w-[1240px] place-self-center absolute top-[300px] lg:top-[350px] place-content-center place-items-center px-9  md:py-9 py-9">
              <div className="flex flex-col lg:flex lg:flex-row gap-5 items-center ">
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Properties Status
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[180px]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Location
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[329px] "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Property Type
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[255px]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Keyword
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[196px] "
                  />
                </div>
                <button className="btn mt-6">Search</button>
              </div>
            </div>
          </div>
          <FeaturedProperties />
          <div className="place-self-center my-7">
            <button className="btn">Load More</button>
          </div>
          <ContactForm pageType={"properties"} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Properties;
