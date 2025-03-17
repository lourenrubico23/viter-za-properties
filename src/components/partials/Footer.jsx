import React from "react";
import {
  copyrightYear,
  devApiVersion,
  devBaseImgUrl,
  devNavUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../helpers/functions-general";
import useQueryData from "../custom-hooks/useQueryData";
import LoadImages from "./LoadImages";

const Footer = () => {
  const { data: logoData } = useQueryData(
    `${devApiVersion}/logo`, // endpoint
    "get", // method
    "logo" // key
  );

  const { data: contactNoData } = useQueryData(
    `${devApiVersion}/contactno`, // endpoint
    "get", // method
    "contactno" // key
  );

  const { data: propertyTypeData } = useQueryData(
    `${devApiVersion}/property-type`, // endpoint
    "get", // method
    "property-type" // key
  );
  return (
    <>
      <div className="bg-primary py-12">
        <div className="customContainer text-light">
          <div className="flex flex-col md:flex md:flex-row gap-7 lg:gap-0 justify-between border-b-2 pb-7">
            <div className="">
              {logoData?.data.map((item, key) => {
                const logoImage =
                  getConvertStringToJSONparseData(item.logo_image) || [];

                return (
                  <div key={key}>
                    {logoImage.map((image, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${image?.id}`}
                        alt="ZA Properties"
                        className="mb-2 h-16 md:h-[60px] object-cover"
                        key={index}
                      />
                    ))}
                  </div>
                );
              })}
              {contactNoData?.data.map((item, key) => {
                const qrCodeImage =
                  getConvertStringToJSONparseData(item.contact_no_qr_code) ||
                  [];
                return (
                  <div key={key}>
                    {qrCodeImage.map((image, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${image?.id}`}
                        alt=""
                        key={index}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-10 md:gap-24">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-poppins font-bold uppercase">
                  Property List
                </p>
                <ul className="[&>li]:font-poppins [&>li]:text-xs flex flex-col gap-2">
                  {propertyTypeData?.data.map((item, key) => (
                    <li key={key}>{item.property_type_name}</li>
                  ))}
                  {/* <li>Residential</li>
                  <li>Building</li>
                  <li>Condominium</li>
                  <li>Foreclosed</li>
                  <li>Industrial</li> */}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-poppins font-bold uppercase">
                  Contact
                </p>
                {contactNoData?.data.map((item, key) => (
                  <ul
                    className="[&>li]:font-poppins [&>li]:text-xs flex flex-col gap-2"
                    key={key}
                  >
                    <li>{item.contact_no_email}</li>
                    <li>{item.contact_no_contact}</li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a
                className="btn border-none hover:shadow-[inset_420px_0_0_0_#007B80] md:hover:shadow-[inset_300px_0_0_0_#007B80] md:w-[185px] "
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
