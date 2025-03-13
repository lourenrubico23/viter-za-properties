import React from "react";
import { CiImageOn } from "react-icons/ci";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devApiVersion,
  devNavUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import BlogList from "../../../partials/BlogList";
import FeaturedProperties from "../../../partials/FeaturedProperties";
import Footer from "../../../partials/Footer";
import LoadImages from "../../../partials/LoadImages";
import BuyAPropertySvg from "../../../partials/svg/BuyAPropertySvg";
import SellMyPropertySvg from "../../../partials/svg/SellMyPropertySvg";
import Navigation from "../Navigation";
import Testimonials from "./Testimonials";
import ContactForm from "../../../partials/contact-form/ContactForm";

const Home = () => {
  const { data: bannerData } = useQueryData(
    `${devApiVersion}/banner`, // endpoint
    "get", // method
    "banner" // key
  );
  const { data: aboutData } = useQueryData(
    `${devApiVersion}/about`, // endpoint
    "get", // method
    "about" // key
  );
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Navigation />
          <div className=" relative flex justify-center">
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
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="bg-gray-300 inset-0 w-full h-[420px] object-cover">
                        <CiImageOn className="text-[10rem] place-self-center mt-20 text-gray-400" />
                      </div>
                    )}

                    <h1 className="text-[clamp(20px,3vw,34px)] md:w-[592px] md:mx-[15%] text-center font-hindBold absolute top-0 md:mt-[10%] mt-[120px] lg:mt-[84px]">
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
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[180px] "
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
                    className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[255px] "
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
          <FeaturedProperties pageType="home" />

          <div className="flex flex-wrap gap-6 place-content-center md:my-48 my-12">
            <div className="flex flex-col items-center gap-4  w-[362px] h-[362px] p-6 hover:outline-8 hover:shadow-xl group">
              <SellMyPropertySvg />
              <p className="font-hindBold text-[clamp(16px,3vw,18px)] uppercase">
                Sell my Property
              </p>
              <p className="font-hindRegular text-[clamp(12px,3vw,16px)] text-center min-h-[60px]">
                Get the best value for your property with expert guidance. List
                with confidence and sell faster!
              </p>
              <a
                className="btn group-hover:shadow-[inset_300px_0_0_0_#007B80] absolute bottom-0"
                href={`${devNavUrl}/sellers`}
              >
                List my Home
              </a>
            </div>
            <div className="flex flex-col items-center gap-4  w-[362px] h-[362px] p-6 hover:outline-8 hover:shadow-xl group relative">
              <BuyAPropertySvg />
              <p className="font-hindBold text-[clamp(16px,3vw,18px)] uppercase">
                Buy a Property
              </p>
              <p className="font-hindRegular text-[clamp(12px,3vw,16px)] text-center min-h-[60px]">
                Find your dream home or investment with expert guidance. Explore
                top listings today!
              </p>
              <a
                className="btn group-hover:shadow-[inset_300px_0_0_0_#007B80] absolute bottom-0"
                href={`${devNavUrl}/properties`}
              >
                See Listing
              </a>
            </div>
          </div>

          <div className="bg-[#F9FFFF] flex h-[614px] lg:max-w-[1233px] place-self-center relative md:my-20">
            {aboutData?.data.map((item, key) => {
              const aboutImage =
                getConvertStringToJSONparseData(item.about_img) || [];
              const logoImage =
                getConvertStringToJSONparseData(item.about_logo_img) || [];
              return (
                <>
                  {aboutImage.map((image, index) => (
                    <LoadImages
                      url={`${googleHDViewLink}${image?.id}`}
                      alt={`${item.about_name}`}
                      className="max-w-[571px] max-h-[687px]  -top-20 lg:block hidden"
                      key={index}
                    />
                  ))}
                  <div
                    className="flex flex-col gap-6 max-w-[698px] lg:place-self-end py-12 px-4"
                    key={key}
                  >
                    <h1 className="text-[clamp(30px,3vw,71px)] font-hindBold">
                      {item.about_name}
                    </h1>
                    <p>{item.about_paragraph_a}</p>
                    <p>{item.about_paragraph_b}</p>
                    <p>{item.about_paragraph_c}</p>

                    <div className="flex gap-2 place-self-end md:mt-24">
                      {logoImage.map((image, index) => (
                        <LoadImages
                          url={`${googleHDViewLink}${image?.id}`}
                          alt={`${item.about_name}`}
                          className=" w-[70px] h-[85px] object-cover"
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <BlogList pageType="home" />

          <Testimonials />
          <ContactForm pageType="Home" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
