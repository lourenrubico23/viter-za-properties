import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import ContactForm from "../../../partials/ContactForm";
import Footer from "../../../partials/Footer";
import Navigation from "../Navigation";

const Sellers = () => {
  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Navigation />
          <div className=" relative md:flex justify-center">
            <img
              src={`${devBaseImgUrl}/sellers-banner.webp`}
              alt=""
              className="object-cover h-[70dvh] lg:max-w-[1660px] lg:max-h-[420px]"
            />
            <h1 className=" text-[clamp(20px,3vw,34px)] md:w-[592px] text-center font-hindBold absolute top-0 mt-[170px] lg:mt-[84px] ">
              Maximizing Value in Every Property, Turning Sellers into Trusted
              Partners.
            </h1>
          </div>

          <ContactForm pageType="sellers" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Sellers;
