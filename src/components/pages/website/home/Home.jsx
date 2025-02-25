import React from "react";
import Navigation from "../Navigation";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import FeaturedProperties from "../../../partials/FeaturedProperties";

const Home = () => {
  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Navigation />
          <div className="w-[1660px] h-[420px] relative flex justify-center ">
            <img
              src={`${devBaseImgUrl}/home-banner.webp`}
              alt=""
              className="object-cover w-full h-full"
            />
            <h1 className="text-[clamp(20px,3vw,34px)] w-[592px] text-center font-hindBold absolute top-0 mt-[84px] ">
              Turning Properties Into Opportunities, Turning Clients Into
              Partners.
            </h1>

            <div className=" h-[143px] shadow-md bg-light absolute mt-[373px] place-content-center px-9">
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Properties Status
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] !h-[46px] w-[180px] "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Location
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] !h-[46px] w-[329px] "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Property Type
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] !h-[46px] w-[255px] "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Keyword
                  </span>
                  <input
                    type="text"
                    placeholder="Any"
                    className="rounded-none border-[2px] !h-[46px] w-[196px] "
                  />
                </div>
                <button className="btn mt-6">Search</button>
              </div>
            </div>
          </div>
          <FeaturedProperties/>
        </div>
      </div>
    </>
  );
};

export default Home;
