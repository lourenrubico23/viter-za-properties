import React from "react";
import { devBaseImgUrl } from "../helpers/functions-general";
import { CiCreditCard1 } from "react-icons/ci";
import { Grid2x2, LandPlot } from "lucide-react";

const FeaturedProperties = () => {
  const cardData = Array(6).fill({
    price: "1,500,000,000",
    propertyType: "Single Family Home",
    id: "ABC-12345678",
    description:
      "Brand New Home in Hillsborough Alabang Village, Muntinlupa City",
    lotArea: "1873 m2",
    imgSrc: `${devBaseImgUrl}/cards.webp`,
  });
  return (
    <>
      <div className="bg-light mt-[168px] customContainer w-[1240px] ">
        <div className="title uppercase text-secondary text-[clamp(20px,3vw,34px)] font-hindBold text-center">
          Featured properties
        </div>

        <div className="flex flex-wrap gap-8 my-20 place-content-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-md group hover:scale-[1.01] hover:duration-200 w-[374px] h-[442px] hover:shadow-xl border overflow-hidden transition-transform"
            >
              <div className="overflow-hidden">
                <img
                  src={card.imgSrc}
                  alt="Property Image"
                  className="w-full h-[200px] object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col gap-5">
                <p className="text-[28px] font-robotoBold">
                  <span className="text-lg">&#8369;</span> {card.price}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-hindRegular">
                    {card.propertyType}
                  </p>
                  <span className="flex items-center gap-1">
                    <CiCreditCard1 className="text-sm" /> {card.id}
                  </span>
                </div>
                <p className="text-lg font-hindBold leading-5">
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
                      <Grid2x2 /> {card.lotArea}
                    </p>
                    <p className="text-gray-400 text-[16px] font-hindBold text-center">
                      Floor Plan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="cards">
            <div className="rounded-md group hover:scale-[1.01] hover:duration-200 w-[374px] h-[442px] hover:shadow-lg border">
              <img
                src={`${devBaseImgUrl}/cards.webp`}
                alt=""
                className="w-full object-cover h-[200px]"
              />
              <div className="p-5 flex flex-col gap-5">
                <p className="text-[28px] font-robotoBold">
                  <span className="text-lg">&#8369;</span> 1,500,000,000
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-hindRegular">
                    Single Family Home
                  </p>
                  <span className="flex items-center gap-1">
                    <CiCreditCard1 className="text-sm" />
                    ABC-12345678
                  </span>
                </div>
                <p className="text-lg font-hindBold leading-4">
                  Brand New Home in Hillsborough Alabang Village, Muntinlipa
                  City
                </p>
                <div className="flex justify-around">
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-2 items-center">
                      <LandPlot /> 1873 m2
                    </p>
                    <p className="text-gray-400 text-[16px] font-hindBold text-center">
                      Lot Area
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-2 items-center">
                      <Grid2x2 /> 1873 m2
                    </p>
                    <p className="text-gray-400 text-[16px] font-hindBold text-center">
                      Lot Area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="rounded-md group hover:scale-[1.01] hover:duration-200 w-[374px] h-[442px] hover:shadow-lg border">
              <img
                src={`${devBaseImgUrl}/cards.webp`}
                alt=""
                className="w-full object-cover h-[200px]"
              />
              <div className="p-5 flex flex-col gap-5">
                <p className="text-[28px] font-robotoBold">
                  <span className="text-lg">&#8369;</span> 1,500,000,000
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-hindRegular">
                    Single Family Home
                  </p>
                  <span className="flex items-center gap-1">
                    <CiCreditCard1 className="text-sm" />
                    ABC-12345678
                  </span>
                </div>
                <p className="text-lg font-hindBold leading-4">
                  Brand New Home in Hillsborough Alabang Village, Muntinlipa
                  City
                </p>
                <div className="flex justify-around">
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-2 items-center">
                      <LandPlot /> 1873 m2
                    </p>
                    <p className="text-gray-400 text-[16px] font-hindBold text-center">
                      Lot Area
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-2 items-center">
                      <Grid2x2 /> 1873 m2
                    </p>
                    <p className="text-gray-400 text-[16px] font-hindBold text-center">
                      Lot Area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="rounded-md group hover:scale-[1.01] hover:duration-200 w-[374px] h-[442px] hover:shadow-lg border">
              <img
                src={`${devBaseImgUrl}/cards.webp`}
                alt=""
                className="w-full object-cover h-[200px]"
              />
              <div className="p-5 flex flex-col gap-5">
                <p className="text-[28px] font-robotoBold">
                  <span className="text-lg">&#8369;</span> 1,500,000,000
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-hindRegular">
                    Single Family Home
                  </p>
                  <span className="flex items-center gap-1">
                    <CiCreditCard1 className="text-sm" />
                    ABC-12345678
                  </span>
                </div>
                <p className="text-lg font-hindBold leading-4">
                  Brand New Home in Hillsborough Alabang Village, Muntinlipa
                  City
                </p>
                <div className="flex justify-around">
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-2 items-center">
                      <LandPlot /> 1873 m2
                    </p>
                    <p className="text-gray-400 text-[16px] font-hindBold text-center">
                      Lot Area
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-2 items-center">
                      <Grid2x2 /> 1873 m2
                    </p>
                    <p className="text-gray-400 text-[16px] font-hindBold text-center">
                      Lot Area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="rounded-md group hover:scale-[1.01] hover:duration-200 w-[374px] h-[442px] hover:shadow-lg border">
              <img
                src={`${devBaseImgUrl}/cards.webp`}
                alt=""
                className="w-full object-cover h-[200px]"
              />
              <div className="p-5 flex flex-col gap-5">
                <p className="text-[28px] font-robotoBold">
                  <span className="text-lg">&#8369;</span> 1,500,000,000
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-hindRegular">
                    Single Family Home
                  </p>
                  <span className="flex items-center gap-1">
                    <CiCreditCard1 className="text-sm" />
                    ABC-12345678
                  </span>
                </div>
                <p className="text-lg font-hindBold leading-4">
                  Brand New Home in Hillsborough Alabang Village, Muntinlipa
                  City
                </p>
                <div className="flex justify-around">
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-2 items-center">
                      <LandPlot /> 1873 m2
                    </p>
                    <p className="text-gray-400 text-[16px] font-hindBold text-center">
                      Lot Area
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-2 items-center">
                      <Grid2x2 /> 1873 m2
                    </p>
                    <p className="text-gray-400 text-[16px] font-hindBold text-center">
                      Lot Area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
