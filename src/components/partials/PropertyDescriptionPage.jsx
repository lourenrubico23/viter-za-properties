import React from "react";
import ModalWrapper from "./modals/ModalWrapper";
import { TfiClose } from "react-icons/tfi";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../helpers/functions-general";
import { CiCreditCard1 } from "react-icons/ci";
import {
  BedDouble,
  Captions,
  Car,
  Check,
  Grid2x2,
  LandPlot,
  MapPin,
  Share2,
  ShowerHead,
} from "lucide-react";
import { StoreContext } from "../../store/StoreContext";
import { setIsAdd } from "../../store/StoreAction";
import LoadImages from "./LoadImages";

const PropertyDescriptionPage = ({
  setSelectedPropertyId,
  propertyListData,
  selectedPropertyId,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);

  
  // State to store the currently selected preview image
  const [previewImg, setPreviewImg] = React.useState("");

  const handleImageClick = (url) => {
    setPreviewImg(url);
  };

  console.log("Clicked images:", previewImg)

  const handleClose = () => {
    dispatch(setIsAdd(false));
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <ModalWrapper
        className={` bg-light  h-[700px] place-self-center `}
        handleClose={handleClose}
      >
        <div className="p-6 overflow-auto max-w-[1241px] max-h-[700px]">
          <div className="flex justify-end">
            <TfiClose
              className="h-6 w-6 cursor-pointer "
              onClick={handleClose}
            />
          </div>
          {propertyListData?.data
            .filter((item) => item.list_aid === selectedPropertyId)
            .map((item, key) => {
              const propertyImages =
                getConvertStringToJSONparseData(item.list_img) || [];
              const firstImage =
                propertyImages.length > 0 ? propertyImages[0] : null;
              return (
                <div className="p-4" key={key}>
                  <h1 className="text-[clamp(20px,3vw,34px)] max-w-[714px] font-hindBold mb-4 leading-10">
                    {item.list_name}
                  </h1>

                  <div className="flex flex-col md:flex md:flex-row gap-4">
                    {/* Preview */}
                    <div>
                      {firstImage && (
                        <LoadImages
                          url={`${googleHDViewLink}${firstImage?.id}`}
                          alt="Preview"
                          className="h-[200px] md:h-[480px] lg:w-[956px] lg:h-[513px] object-cover"
                        />
                      )}
                    </div>
                    {/* Thumbnail Images */}
                    <div className="flex flex-row md:flex md:flex-col gap-2 md:gap-2 lg:gap-[19px] overflow-auto lg:h-[513px]">
                      {propertyImages.map((img, index) => (
                        <LoadImages
                          key={index}
                          url={`${googleHDViewLink}${img?.id}`}
                          alt=""
                          className="w-[100px] h-[100px] md:w-[149px] md:h-[100px] cursor-pointer object-cover"
                          onClick={() =>
                            handleImageClick(`${googleHDViewLink}${img?.id}`)
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 py-5">
                    <div className="flex flex-wrap gap-8 lg:gap-20">
                      <ul className="flex gap-2">
                        <li>
                          <Captions className="h-5 mt-1" />
                        </li>
                        <li className="flex flex-col ">
                          <span className="text-[16px]">{item.list_id}</span>
                          <span className="uppercase text-gray-400 text-xs font-hindBold">
                            Property ID
                          </span>
                        </li>
                      </ul>
                      <ul className="flex flex-col  items-center">
                        <li className="flex gap-2 items-center">
                          <BedDouble className="h-5 " />
                          <span className="text-[16px]">
                            {item.list_bedrooms}
                          </span>
                        </li>
                        <span className="uppercase text-gray-400 text-xs font-hindBold">
                          Bedrooms
                        </span>
                      </ul>
                      <ul className="flex flex-col items-center">
                        <li className="flex gap-2 items-center">
                          <ShowerHead className="h-5 " />
                          <span className="text-[16px]">
                            {item.list_bathrooms}
                          </span>
                        </li>
                        <span className="uppercase text-gray-400 text-xs font-hindBold">
                          Bathrooms
                        </span>
                      </ul>
                      <ul className="flex flex-col items-center">
                        <li className="flex gap-2 items-center">
                          <Car className="h-5 " />
                          <span className="text-[16px]">
                            {item.list_carport}
                          </span>
                        </li>
                        <span className="uppercase text-gray-400 text-xs font-hindBold">
                          Carport
                        </span>
                      </ul>
                      <ul className="flex flex-col items-center">
                        <li className="flex gap-2 items-center">
                          <Grid2x2 className="h-5 " />
                          <span className="text-[16px]">
                            {item.list_floor_area}
                          </span>
                        </li>
                        <span className="uppercase text-gray-400 text-xs font-hindBold">
                          Floor Area
                        </span>
                      </ul>
                      <ul className="flex flex-col items-center">
                        <li className="flex gap-2 items-center">
                          <LandPlot className="h-5 " />
                          <span className="text-[16px]">
                            {item.list_lot_area}
                          </span>
                        </li>
                        <span className="uppercase text-gray-400 text-xs font-hindBold">
                          Lot Area
                        </span>
                      </ul>
                    </div>
                  </div>

                  <div className="md:flex md:flex-row space-y-4 md:gap-10 lg:gap-28  py-2">
                    <div className="flex gap-5 items-center">
                      <MapPin className="h-5 " />
                      <p>{item.list_location}</p>
                    </div>
                    <div className="flex gap-5 items-center">
                      <span className="text-xl">&#8369;</span>
                      <p className="text-secondary text-2xl font-hindBold">
                        {item.list_price}
                      </p>
                    </div>
                    <button className="btn !flex gap-2 items-center ">
                      <Share2 className="h-6 " /> Share this Property
                    </button>
                  </div>

                  <div className="flex flex-col gap-6 md:flex md:flex-row md:gap-40 py-5">
                    <div className="flex flex-col gap-5">
                      <p className="title text-lg font-hindBold">
                        Bedrooms and Features:
                      </p>
                      <ul>
                        <li>- 4 Bedrooms with Ensuite Bathrooms</li>
                        <li>
                          - Master’s Bedroom with Balcony and Walk-in Closet
                        </li>
                        <li>- Study/Family Room</li>
                        <li>- Den/Guest Room with Ensuite Bathroom</li>
                        <li>- Living Room</li>
                        <li>- Dining Room with Open Kitchen</li>
                        <li>- Auxiliary Kitchen</li>
                        <li>- Helper’s Quarters</li>
                        <li>- Driver’s Quarters</li>
                        <li>- Staff Bathroom</li>
                        <li>- Laundry Area</li>
                        <li>- 2-Car Garage</li>
                        <li>- Veranda with Garden</li>
                        <li>- Front Pocket Garden</li>
                        <li>- Cable and CCTV Ready</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="title text-lg font-hindBold">
                        Why This Property is a Best Buy:
                      </p>
                      <ul>
                        <li className="flex gap-2 items-center">
                          <Check className="text-secondary h-5" />
                          Prestigious address in Madrigal Business Park
                        </li>
                        <li className="flex gap-2 items-center">
                          <Check className="text-secondary h-5" />
                          Ideal for corporate headquarters or investment
                        </li>
                        <li className="flex gap-2 items-center">
                          <Check className="text-secondary h-5" />
                          Competitive pricing at ₱125K/sqm
                        </li>
                        <li className="flex gap-2 items-center">
                          <Check className="text-secondary h-5" />
                          Includes 4 dedicated parking slots
                        </li>
                        <li className="flex gap-2 items-center">
                          <Check className="text-secondary h-5" />
                          Prime accessibility in Alabang’s business hub
                        </li>
                      </ul>
                      <p className="title text-lg font-hindBold">
                        Your next investment, contact us.
                      </p>
                      <p className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold">
                        +63 917 653 1919
                      </p>
                      <div>
                        <p className="title text-lg font-hindBold">
                          Zac Alfanta
                        </p>
                        <p className="title text-xs font-hindBold">
                          REALTOR ® | REMAX PREMIER
                        </p>
                        <p className="title text-xs font-hindBold">
                          LICENSED REAL STATE BROKER 0033585
                        </p>
                      </div>
                      <button className="btn w-[180px]">Message Us</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </ModalWrapper>
    </>
  );
};

export default PropertyDescriptionPage;
