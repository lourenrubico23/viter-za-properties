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
import LoadImages from "../../../partials/LoadImages";
import Loader from "../../../partials/spinners/Loader";
import Navigation from "../Navigation";

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
      <div className="outer-wrapper min-h-screen flex flex-col">
        <div className="wrapper flex flex-col flex-grow">
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

                    <h1 className="px-2 lg:px-0 text-[clamp(20px,3vw,34px)] md:w-[687px] md:mx-[15%] text-center font-hindBold absolute top-0 md:mt-[10%] mt-[110px] lg:mt-[84px] ">
                      {item.banner_title}
                    </h1>
                  </div>
                );
              }
            })}
          </div>

          <div className="relative flex-grow">
            <BlogList pageType={"Blogs"} />
          </div>

          {/* <ContactForm pageType="Blogs" /> */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blogs;
