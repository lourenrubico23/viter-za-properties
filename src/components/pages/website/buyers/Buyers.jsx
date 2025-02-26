import React from "react";
import Footer from "../../../partials/Footer";
import ContactForm from "../../../partials/ContactForm";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import Navigation from "../Navigation";
import ContactFormBuyers from "../../../partials/ContactFormBuyers";

const Buyers = () => {
  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Navigation />
          <div className=" relative flex justify-center">
            <img
              src={`${devBaseImgUrl}/buyers-banner.webp`}
              alt=""
              className="object-cover w-[1660px] h-[420px]"
            />
            <h1 className=" text-[clamp(20px,3vw,34px)] w-[592px] text-center font-hindBold absolute top-0 mt-[84px] ">
              Turning Properties Into Opportunities, Turning Clients Into
              Partners.
            </h1>
          </div>

          <ContactFormBuyers />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Buyers;
