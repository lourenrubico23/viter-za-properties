import React from "react";
import Navigation from "../Navigation";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import FeaturedProperties from "../../../partials/FeaturedProperties";
import SellMyProperty from "../../../partials/svg/SellMyPropertySvg";
import BuyAProperty from "../../../partials/svg/BuyAPropertySvg";
import Blog from "../../../partials/Blog";
import SellMyPropertySvg from "../../../partials/svg/SellMyPropertySvg";
import BuyAPropertySvg from "../../../partials/svg/BuyAPropertySvg";
import Testimonials from "./Testimonials";
import ContactForm from "../../../partials/ContactForm";
import Footer from "../../../partials/Footer";

const Home = () => {
  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Navigation />
          <div className=" relative flex justify-center">
            <img
              src={`${devBaseImgUrl}/home-banner.webp`}
              alt=""
              className="object-cover w-[1660px] h-[420px]"
            />
            <h1 className=" text-[clamp(20px,3vw,34px)] w-[592px] text-center font-hindBold absolute top-0 mt-[84px] ">
              Turning Properties Into Opportunities, Turning Clients Into
              Partners.
            </h1>

            <div className=" h-[143px] shadow-md bg-light absolute top-[350px] place-content-center place-items-center px-9">
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Properties Status
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] !h-[46px] w-[180px] "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Location
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] !h-[46px] w-[329px] "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Property Type
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] !h-[46px] w-[255px] "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Keyword
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] !h-[46px] w-[196px] "
                  />
                </div>
                <button className="btn mt-6">Search</button>
              </div>
            </div>
          </div>
          <FeaturedProperties />

          <div className="flex gap-6 place-content-center my-48">
            <div className="flex flex-col items-center gap-4  w-[362px] h-[362px] p-6 hover:outline-8 hover:shadow-xl group">
              <SellMyPropertySvg />
              <p className="font-hindBold text-lg uppercase">
                Sell my Property
              </p>
              <p className="font-hindRegular text-[16px] text-center min-h-[60px]">
                Get the best value for your property with expert guidance. List
                with confidence and sell faster!
              </p>
              <button className="btn group-hover:shadow-[inset_300px_0_0_0_#007B80] absolute bottom-0">
                List my Home
              </button>
            </div>
            <div className="flex flex-col items-center gap-4  w-[362px] h-[362px] p-6 hover:outline-8 hover:shadow-xl group relative">
              <BuyAPropertySvg />
              <p className="font-hindBold text-lg uppercase">Buy a Property</p>
              <p className="font-hindRegular text-[16px] text-center min-h-[60px]">
                Find your dream home or investment with expert guidance. Explore
                top listings today!
              </p>
              <button className="btn group-hover:shadow-[inset_300px_0_0_0_#007B80] absolute bottom-0">
                See Listing
              </button>
            </div>
          </div>

          <div className="bg-[#F9FFFF] h-[614px] w-[1233px] place-self-center relative my-20">
            <img
              src={`${devBaseImgUrl}/zac-alfanta.webp`}
              alt=""
              className="w-[571px] h-[687px] absolute -top-20"
            />
            <div className="flex flex-col gap-6 w-[698px] place-self-end py-12 px-4">
              <h1 className="text-[clamp(30px,3vw,71px)] font-hindBold">
                Zac Alfanta
              </h1>
              <p>
                I am a Licensed Real Estate Broker (PRC 33585) and an Associate
                Broker with RE/MAX PREMIER BGC, recognized as a 2023 Real Estate
                Board Topnotcher (Top 10) for my commitment to excellence.
              </p>
              <p>
                As an International Realtor Member of CREBA-NAR and a proud
                REBAP LMP Chapter member, I bring deep industry expertise.
                Before real estate, I built a strong banking career as a former
                Bank Officer at a top Philippine bank, equipping me with
                financial acumen to provide strategic real estate advice. I also
                serve as an Independent Director for a fintech company driving
                innovation in financial technology.
              </p>
              <p>
                My work is driven by integrity, meaningful relationships. and a
                passion for delivering tailored real estate solutions that
                create long-term value.
              </p>

              <div className="flex gap-2 place-self-end mt-24">
                <img
                  src={`${devBaseImgUrl}/nar-logo.png`}
                  alt=""
                  className=" w-[70px] h-[85px]"
                />
                <img
                  src={`${devBaseImgUrl}/remax-logo.png`}
                  alt=""
                  className="w-[86px] h-[85px]"
                />
                <img
                  src={`${devBaseImgUrl}/rebap-logo.png`}
                  alt=""
                  className="w-[140px] h-[85px]"
                />
              </div>
            </div>
          </div>

          <Blog />

          <Testimonials />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
