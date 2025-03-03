import React from "react";
import {
  copyrightYear,
  devBaseImgUrl,
  devNavUrl,
} from "../helpers/functions-general";

const Footer = () => {
  return (
    <>
      <div className="bg-primary py-12">
        <div className="customContainer text-light">
          <div className="flex flex-col md:flex md:flex-row gap-7 lg:gap-0 justify-between border-b-2 pb-7">
            <div className="">
              <img
                src={`${devBaseImgUrl}/za-logo.png`}
                alt=""
                className="mb-2"
              />
              <img src={`${devBaseImgUrl}/qr-code.png`} alt="" />
            </div>
            <div className="flex gap-10 md:gap-24">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-poppins font-bold uppercase">
                  Property List
                </p>
                <ul className="[&>li]:font-poppins [&>li]:text-xs flex flex-col gap-2">
                  <li>Commercial</li>
                  <li>Residential</li>
                  <li>Building</li>
                  <li>Condominium</li>
                  <li>Foreclosed</li>
                  <li>Industrial</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-poppins font-bold uppercase">
                  Contact
                </p>
                <ul className="[&>li]:font-poppins [&>li]:text-xs flex flex-col gap-2">
                  <li>properties@zacalfanta.com</li>
                  <li>+63 917 653 1919</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a
                className="btn border-none hover:shadow-[inset_420px_0_0_0_#007B80] md:hover:shadow-[inset_300px_0_0_0_#007B80]"
                href={`${devNavUrl}/Properties`}
              >
                View Listing
              </a>
              <a
                className="btn-transparent hover:shadow-[inset_420px_0_0_0_#007B80] md:hover:shadow-[inset_300px_0_0_0_#007B80]"
                href={`${devNavUrl}/Sellers`}
              >
                List my Home
              </a>
            </div>
          </div>
          <p className="font-poppins text-xs pt-8">
            &#169;{copyrightYear()} ZA PROPERTIES. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
