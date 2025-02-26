import React from "react";
import ModalWrapper from "./modals/ModalWrapper";
import { TfiClose } from "react-icons/tfi";
import { devBaseImgUrl } from "../helpers/functions-general";
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

const PropertyDescriptionPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  // State to store the currently selected preview image
  const [previewImg, setPreviewImg] = React.useState(
    `${devBaseImgUrl}/home-1.webp`
  );

  const handleImageClick = (src) => {
    setPreviewImg(src);
  };

  const handleClose = () => {
    dispatch(setIsAdd(false));
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <>
      <ModalWrapper
        className={` bg-light h-[700px] place-self-center`}
        handleClose={handleClose}
      >
        <div className="p-6 overflow-auto w-[1241px] h-[700px]">
          <div className="flex justify-end">
            <TfiClose className="h-6 w-6 " onClick={handleClose} />
          </div>
          <div className="p-4">
            <h1 className="text-[clamp(20px,3vw,34px)] w-[714px] font-hindBold mb-4 leading-10">
              Prime Office Space at BPI-Philam Life Building, Madrigal Business
              Park, Alabang
            </h1>

            <div className="flex gap-4">
              {/* Preview */}
              <div>
                <img
                  src={previewImg}
                  alt="Preview"
                  className="w-[956px] h-[513px] object-cover"
                />
              </div>
              {/* Thumbnail Images */}
              <div className="flex flex-col gap-[19px]">
                {[
                  "home-2.webp",
                  "home-3.webp",
                  "home-4.webp",
                  "home-5.webp",
                ].map((img, index) => (
                  <img
                    key={index}
                    src={`${devBaseImgUrl}/${img}`}
                    alt=""
                    className="w-[149px] h-[114px] cursor-pointer object-cover"
                    onClick={() => handleImageClick(`${devBaseImgUrl}/${img}`)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 py-5">
              <div className="flex gap-20">
                <ul className="flex gap-2">
                  <li>
                    <Captions className="h-5 mt-1" />
                  </li>
                  <li className="flex flex-col ">
                    <span className="text-[16px]">ABC-12345678</span>
                    <span className="uppercase text-gray-400 text-xs font-hindBold">
                      Property ID
                    </span>
                  </li>
                </ul>
                <ul className="flex flex-col  items-center">
                  <li className="flex gap-2 items-center">
                    <BedDouble className="h-5 " />
                    <span className="text-[16px]">6</span>
                  </li>
                  <span className="uppercase text-gray-400 text-xs font-hindBold">
                    Property ID
                  </span>
                </ul>
                <ul className="flex flex-col items-center">
                  <li className="flex gap-2 items-center">
                    <ShowerHead className="h-5 " />
                    <span className="text-[16px]">5</span>
                  </li>
                  <span className="uppercase text-gray-400 text-xs font-hindBold">
                    Bathrooms
                  </span>
                </ul>
                <ul className="flex flex-col items-center">
                  <li className="flex gap-2 items-center">
                    <Car className="h-5 " />
                    <span className="text-[16px]">4</span>
                  </li>
                  <span className="uppercase text-gray-400 text-xs font-hindBold">
                    Carport
                  </span>
                </ul>
                <ul className="flex flex-col items-center">
                  <li className="flex gap-2 items-center">
                    <Grid2x2 className="h-5 " />
                    <span className="text-[16px]">250 m2</span>
                  </li>
                  <span className="uppercase text-gray-400 text-xs font-hindBold">
                    Floor Area
                  </span>
                </ul>
                <ul className="flex flex-col items-center">
                  <li className="flex gap-2 items-center">
                    <LandPlot className="h-5 " />
                    <span className="text-[16px]">308 m2</span>
                  </li>
                  <span className="uppercase text-gray-400 text-xs font-hindBold">
                    Lot Area
                  </span>
                </ul>
              </div>
            </div>

            <div className="flex gap-28 py-2">
              <div className="flex gap-5 items-center">
                <MapPin className="h-5 " />
                <p>Madrigal Business Park, Alabang</p>
              </div>
              <div className="flex gap-5 items-center">
                <span className="text-xl">&#8369;</span>
                <p className="text-secondary text-2xl font-hindBold">
                  45,000,000
                </p>
              </div>
              <button className="btn !flex gap-2 ">
                <Share2 className="h-6" /> Share this Property
              </button>
            </div>

            <div className="flex gap-40 py-5">
              <div className="flex flex-col gap-5">
                <p className="title text-lg font-hindBold">
                  Bedrooms and Features:
                </p>
                <ul>
                  <li>- 4 Bedrooms with Ensuite Bathrooms</li>
                  <li>- Master’s Bedroom with Balcony and Walk-in Closet</li>
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
                <p className="text-secondary text-[34px] font-hindBold">
                  +63 917 653 1919
                </p>
                <div>
                  <p className="title text-lg font-hindBold">Zac Alfanta</p>
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
        </div>
      </ModalWrapper>
    </>
  );
};

export default PropertyDescriptionPage;
