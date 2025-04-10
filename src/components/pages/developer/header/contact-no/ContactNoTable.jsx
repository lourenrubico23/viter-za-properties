import React from "react";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import {
  copyrightYear,
  devApiVersion,
  devNavUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";
import { FaRegImages } from "react-icons/fa";
import useQueryData from "../../../../custom-hooks/useQueryData";

const ContactNoTable = ({
  setItemEdit,
  handleAddFooter,
  contactNoData,
  isFetching,
  isLoading,
  logoData,
  propertyTypeData,
}) => {
  const { data: sellPropertyData } = useQueryData(
    `${devApiVersion}/sell-property`, // endpoint
    "get", // method
    "sell-property" // key
  );

  return (
    <>
      <div className=" shadow-md overflow-y-auto max-h-[calc(100dvh-250px)] md:max-h-[calc(100dvh-240px)] lg:max-h-[calc(100dvh-210px)] mt-5 mb-10 lg:mb-0  relative">
        {isFetching && !isLoading && <FetchingSpinner />}
        <div className="px-8 bg-primary py-12">
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
                          className="h-[150px] object-cover"
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
                  <ul className="[&>li]:font-poppins [&>li]:text-sm flex flex-col gap-2">
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
                      className="[&>li]:font-poppins [&>li]:text-sm flex flex-col gap-2"
                      key={key}
                    >
                      <li>{item.contact_no_email}</li>
                      <li>{item.contact_no_contact}</li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a className="btn border-none hover:shadow-[inset_420px_0_0_0_#007B80] md:hover:shadow-[inset_300px_0_0_0_#007B80] md:w-[185px] place-self-center">
                  View Listing
                </a>
                {/* <a className="btn-transparent hover:shadow-[inset_420px_0_0_0_#007B80] md:hover:shadow-[inset_300px_0_0_0_#007B80]">
                  List my Home
                </a> */}
              </div>
              <a
                className="absolute cursor-pointer tooltip-header-nav z-[1] right-2 top-3 "
                data-tooltip="Upload Contents"
                onClick={handleAddFooter}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px] text-black" />
              </a>
            </div>
            {contactNoData?.data.map((item, key) => (
              <p className="font-poppins text-xs pt-8" key={key}>
                &#169;{copyrightYear()} {item.contact_no_copyright}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactNoTable;
