import React from "react";
import {
  devApiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import ContactForm from "../../../partials/ContactForm";
import Footer from "../../../partials/Footer";
import Navigation from "../Navigation";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";

const Contact = () => {
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
          <div className=" relative md:flex justify-center">
          {bannerData?.data.map((item, key) => {
              if (item.banner_page === "Contact") {
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
                    <h1 className=" text-[clamp(20px,3vw,34px)] md:w-[850px] md:mx-[15%] text-center font-hindBold absolute top-0 md:mt-[10%] mt-[120px] lg:mt-[84px] ">
                      {item.banner_title}
                    </h1>
                  </div>
                );
              }
            })}
          </div>

          <ContactForm pageType="contact" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
