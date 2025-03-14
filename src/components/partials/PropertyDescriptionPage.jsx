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
import React from "react";
import { TfiClose } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { setIsAdd } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import useQueryData from "../custom-hooks/useQueryData";
import {
  devApiVersion,
  devNavUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../helpers/functions-general";
import LoadImages from "./LoadImages";
import ModalWrapper from "./modals/ModalWrapper";
import ShareLinkModal from "./modals/ShareLinkModal";

const PropertyDescriptionPage = ({
  setSelectedPropertyId,
  propertyListData,
  selectedPropertyId,
  setSearchParams,
  searchParams,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isPropertyLinkOpen, setIsPropertyLinkOpen] = React.useState(false);
  const [propertyLink, setPropertyLink] = React.useState("");

  const navigate = useNavigate();

  // State to store the currently selected preview image
  const [previewImg, setPreviewImg] = React.useState("");

  const { data: contactNoData } = useQueryData(
    `${devApiVersion}/contactno`, // endpoint
    "get", // method
    "contactno" // key
  );

  const handleImageClick = (url) => {
    console.log("Clicked images:", url);
    setPreviewImg(url);
  };

  const handleClose = () => {
    dispatch(setIsAdd(false));
    setSearchParams({});
    document.body.classList.remove("overflow-hidden");
  };

  const handleGoToPage = () => {
    navigate(`${devNavUrl}/contact`);
    dispatch(setIsAdd(false));
    document.body.classList.remove("overflow-hidden");
  };

  const handleCopyLink = (item) => {
    const link = `${window.location.origin}/properties?property=${item.list_name
      .replace(/\s+/g, "-")
      .toLowerCase()}`;

    setPropertyLink(link);
    setIsPropertyLinkOpen(true);
    navigator.clipboard.writeText(link);
  };

  // Ensure propertyListData?.data exists
  const filteredProperties =
    propertyListData?.data?.filter(
      (item) => item.list_aid === selectedPropertyId
    ) || [];

  // Extract first image and set preview image when properties change
  React.useEffect(() => {
    if (filteredProperties.length > 0) {
      const firstProperty = filteredProperties[0];
      const propertyImages =
        getConvertStringToJSONparseData(firstProperty.list_img) || [];
      if (propertyImages.length > 0) {
        setPreviewImg(`${googleHDViewLink}${propertyImages[0].id}`);
      }
    }
  }, [selectedPropertyId, propertyListData]);

  return (
    <>
      <ModalWrapper
        className={` bg-light  h-[700px] place-self-center`}
        handleClose={handleClose}
      >
        <div className="p-6 overflow-auto max-w-[360px] md:max-w-[1241px] max-h-[700px]">
          <div className="flex justify-end">
            <TfiClose
              className="h-6 w-6 cursor-pointer "
              onClick={handleClose}
            />
          </div>
          {filteredProperties.length === 0 ? (
            <div className="p-6 overflow-auto w-[800px] max-h-[700px] place-items-center">
              <p>No property found.</p>
            </div>
          ) : (
            filteredProperties.map((item, key) => {
              const propertyImages =
                getConvertStringToJSONparseData(item.list_img) || [];

              return (
                <div className="p-4" key={key}>
                  <h1 className="text-[clamp(20px,3vw,34px)] max-w-[714px] font-hindBold mb-4 leading-10">
                    {item.list_name}
                  </h1>

                  <div className="flex flex-col md:flex md:flex-row gap-4">
                    {/* Preview Image */}
                    <div className="h-[200px] min-w-[265px] md:h-[480px] md:min-w-[650px] md:max-w-[700px] lg:min-w-[956px] lg:h-[513px]">
                      {previewImg && (
                        <LoadImages
                          url={previewImg}
                          alt="Preview"
                          className=" object-cover w-full h-full"
                        />
                      )}
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex flex-row md:flex md:flex-col gap-2 md:gap-2 lg:gap-[19px] overflow-auto md:h-[480px] lg:h-[513px]">
                      {propertyImages.map((img, index) => (
                        <LoadImages
                          key={index}
                          url={`${googleHDViewLink}${img?.id}`}
                          alt="Thumbnail images"
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
                      {item.list_id && (
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
                      )}
                      {item.list_bedrooms && (
                        <ul className="flex flex-col  items-center">
                          <li className="flex gap-2 items-center">
                            <BedDouble className="h-5" />
                            <span className="text-[16px]">
                              {item.list_bedrooms}
                            </span>
                          </li>
                          <span className="uppercase text-gray-400 text-xs font-hindBold">
                            Bedrooms
                          </span>
                        </ul>
                      )}
                      {item.list_bathrooms && (
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
                      )}
                      {item.list_carport && (
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
                      )}
                      {item.list_floor_area && (
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
                      )}
                      {item.list_lot_area && (
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
                      )}
                    </div>
                  </div>

                  <div className="md:flex md:flex-row space-y-4 md:gap-10 lg:gap-28  py-2">
                    {item.list_location && (
                      <div className="flex gap-5 items-center">
                        <MapPin className="h-5 " />
                        <p>{item.list_location}</p>
                      </div>
                    )}
                    <div className="flex gap-5 items-center">
                      <span className="text-xl">&#8369;</span>
                      <p className="text-secondary text-2xl font-hindBold">
                        {item.list_price}
                      </p>
                    </div>
                    <div className="md:w-[400px]">
                      <button
                        className="btn !flex gap-2 items-center !place-self-start"
                        onClick={() => {
                          handleCopyLink(item);
                        }}
                      >
                        <Share2 className="h-6 " /> Share this Property
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 md:flex md:flex-row md:gap-40 py-5">
                    {item.list_key_features && (
                      <div className="flex flex-col gap-5 ">
                        <p className="title text-lg font-hindBold">
                          Key Features:
                        </p>
                        <ul>
                          {item.list_key_features
                            .split("\n") // Split by new lines
                            .filter((feature) => feature.trim() !== "") // Remove empty lines
                            .map((feature, index) => (
                              <li key={index}>- {feature}</li>
                            ))}
                        </ul>
                      </div>
                    )}
                    {item.list_best_buy && (
                      <div className="flex flex-col gap-5">
                        <p className="title text-lg font-hindBold">
                          Why This Property is a Best Buy:
                        </p>
                        <ul>
                          {item.list_best_buy
                            .split("\n") // Split by new lines
                            .filter((best) => best.trim() !== "") // Remove empty lines
                            .map((best, index) => (
                              <li key={index} className="flex gap-1">
                                <Check className="text-secondary h-5" /> {best}
                              </li>
                            ))}
                        </ul>
                        <p className="title text-lg font-hindBold">
                          Your next investment, contact us.
                        </p>
                        {contactNoData?.data.map((item, key) => (
                          <p
                            className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold"
                            key={key}
                          >
                            {item.contact_no_contact}
                          </p>
                        ))}

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
                        <button
                          className="btn !place-self-start"
                          onClick={handleGoToPage}
                        >
                          Message Us
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </ModalWrapper>

      {isPropertyLinkOpen && (
        <ShareLinkModal
          propertyLink={propertyLink}
          setSearchParams={setSearchParams}
          setIsPropertyLinkOpen={setIsPropertyLinkOpen}
          setPropertyLink={setPropertyLink}
        />
      )}
    </>
  );
};

export default PropertyDescriptionPage;
