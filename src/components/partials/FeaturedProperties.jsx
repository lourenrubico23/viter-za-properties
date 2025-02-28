import React from "react";
import { devBaseImgUrl } from "../helpers/functions-general";
import { CiCreditCard1 } from "react-icons/ci";
import { Captions, Grid2x2, LandPlot } from "lucide-react";
import { StoreContext } from "../../store/StoreContext";
import { setIsAdd } from "../../store/StoreAction";
import PropertyDescriptionPage from "./PropertyDescriptionPage";

const FeaturedProperties = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleOpenDescription = () => {
    dispatch(setIsAdd(true));
    document.body.classList.toggle("overflow-hidden");
  };

  const cardData = [
    {
      price: "400M (Negotiable)",
      propertyType: "Luxurious House and Lot",
      id: "ABC-12345678",
      description:
        "4 Bedroom House for sale in New Alabang Village, Metro Manila",
      lotArea: "558 sqm",
      floorArea: "1,043.63 sqm",
      imgSrc: `${devBaseImgUrl}/20221125-DSC_5382.jpg`,
    },
    {
      price: "203,200,000 (VAT Inclusive)",
      propertyType: "3-Storey Building with Basement & Elevator",
      id: "ABC-12345678",
      description: "Prime Mixed-Use Property in Dasmariñas Technopark",
      lotArea: "3,000 sqm",
      floorArea: "",
      imgSrc: `${devBaseImgUrl}/Frontage.jpg`,
    },
    {
      price: "80,000,000 (P100,000/sqm)",
      propertyType: "Commercial Lot",
      id: "ABC-12345678",
      description: "Prime Southwoods Commercial Lot in San Francisco, Laguna",
      lotArea: "800 sqm",
      floorArea: "",
      imgSrc: `${devBaseImgUrl}/property-3.png`,
    },
    {
      price: "165,000,000",
      propertyType: "Wack-Wack Greenhills, Metro Manila near MRT-3 Ortigas",
      id: "ABC-12345678",
      description: "Premium Fully Furnished Office Floor in Ortigas Center",
      lotArea: "1,110.38 sqm",
      floorArea: "",
      imgSrc: `${devBaseImgUrl}/property-4.png`,
    },
    {
      price: "22,230,000 (₱39,000/sqm)",
      propertyType: "Land for sale in Don Bosco, Metro Manila",
      id: "ABC-12345678",
      description: "Prime Lot in Better Living, Parañaque",
      lotArea: "570 sqm",
      floorArea: "",
      imgSrc: `${devBaseImgUrl}/property-5.png`,
    },
  ];

  return (
    <>
      <div className="bg-light mt-[450px] md:mt-[468px] lg:mt-[150px] customContainer lg:max-w-[1240px] ">
        <div className="title uppercase text-secondary text-[clamp(20px,3vw,34px)] font-hindBold text-center">
          Featured properties
        </div>

        <div className="flex flex-wrap gap-8 my-20 place-content-center">
          {cardData.map((card, index) => (
            <a
              className="cursor-pointer"
              onClick={handleOpenDescription}
              key={index}
            >
              <div className="rounded-md group hover:scale-[1.01] hover:duration-200 max-w-[374px] min-h-[442px] hover:shadow-xl border overflow-hidden transition-transform">
                <div className="overflow-hidden">
                  <img
                    src={card.imgSrc}
                    alt="Property Image"
                    className="w-full h-[200px] object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex flex-col gap-5">
                  <p className="text-[clamp(20px,3vw,28px)] font-robotoBold">
                    <span className="text-lg">&#8369;</span> {card.price}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-hindRegular">
                      {card.propertyType}
                    </p>
                    <span className="flex items-center justify-center gap-1">
                      <Captions className="h-4" /> {card.id}
                    </span>
                  </div>
                  <p className="text-[clamp(16px,3vw,18px)] font-hindBold leading-5">
                    {card.description}
                  </p>
                  <div className="flex justify-around">
                    <div className="flex flex-col gap-2">
                      <p className="flex gap-2 items-center">
                        <LandPlot /> {card.lotArea}
                      </p>
                      <p className="text-gray-400 text-[16px] font-hindBold text-center">
                        Lot Area
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="flex gap-2 items-center">
                        <Grid2x2 /> {card.floorArea}
                      </p>
                      <p className="text-gray-400 text-[16px] font-hindBold text-center">
                        Floor Area
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {store.isAdd && <PropertyDescriptionPage />}
    </>
  );
};

export default FeaturedProperties;
