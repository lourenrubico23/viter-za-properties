import React from "react";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import ContactForm from "../../../partials/ContactForm";
import Footer from "../../../partials/Footer";
import Navigation from "../Navigation";

const Buyers = () => {
  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Navigation />
          <div className=" relative md:flex justify-center">
            <img
              src={`${devBaseImgUrl}/buyers-banner.webp`}
              alt=""  
              className="object-cover min-h-[375px] lg:w-[1660px] lg:max-h-[420px]"
            />
            <h1 className=" text-[clamp(20px,3vw,34px)] md:w-[647px] md:mx-[15%] text-center font-hindBold absolute top-0 md:mt-[10%] mt-[120px] lg:mt-[84px] ">
              Transforming Properties to Opportunities, Nurturing Life-Long
              Relationships.
            </h1>
          </div>

          <ContactForm pageType="buyers" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Buyers;
