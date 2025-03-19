import React from "react";
import { CiImageOn } from "react-icons/ci";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devApiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import BlogList from "../../../partials/BlogList";
import Footer from "../../../partials/Footer";
import Navigation from "../Navigation";
import LoadImages from "../../../partials/LoadImages";
import ContactForm from "../../../partials/contact-form/ContactForm";
import Loader from "../../../partials/spinners/Loader";

const Blogs = () => {
  const { isLoading: isLoadingBanner, data: bannerData } = useQueryData(
    `${devApiVersion}/banner`, // endpoint
    "get", // method
    "banner" // key
  );
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Navigation />
          <div className=" relative md:flex justify-center lg:min-h-[420px] w-full">
            {isLoadingBanner && <Loader />}
            {bannerData?.data.map((item, key) => {
              if (item.banner_page === "Blogs") {
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
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="bg-gray-300 inset-0 w-full h-[420px] object-cover">
                        <CiImageOn className="text-[10rem] place-self-center mt-20 text-gray-400" />
                      </div>
                    )}

                    <h1 className="text-[clamp(20px,3vw,34px)] md:w-[687px] md:mx-[15%] text-center font-hindBold absolute top-0 md:mt-[10%] mt-[120px] lg:mt-[84px] ">
                      {item.banner_title}
                    </h1>
                  </div>
                );
              }
            })}
          </div>
          <BlogList pageType={"Blogs"} />

          <ContactForm pageType="Blogs" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blogs;
