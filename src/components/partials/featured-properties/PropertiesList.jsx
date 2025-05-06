import React from "react";
import LoadImages from "../LoadImages";
import { googleHDViewLink } from "../../helpers/functions-general";
import { Captions, Grid2x2, LandPlot } from "lucide-react";

const PropertiesList = ({ firstImage, item }) => {
  return (
    <div className="rounded-md group hover:scale-[1.01] hover:duration-200 md:min-w-[374px] md:max-w-[374px] max-h-[442px] min-h-[442px] hover:shadow-xl border overflow-hidden transition-transform relative">
      <div className="overflow-hidden relative">
        {firstImage && (
          <LoadImages
            url={`${googleHDViewLink}${firstImage?.id}`}
            alt="Property Image"
            className="w-full h-[200px] object-cover transition-transform duration-200 group-hover:scale-105 z-10"
            isTableSpinner={true}
          />
        )}
      </div>
      <div className="bg-primary/90 text-white absolute top-2  p-1 px-2">
        <span>{item.list_property_status_name}</span>
      </div>
      <div className="p-5 flex flex-col gap-5">
        {item.list_price && (
          <p className="text-[clamp(20px,3vw,24px)] font-robotoBold">
            <span className="text-[clamp(20px,3vw,24px)]">&#8369;</span>
            {item.list_price}
          </p>
        )}
        <div className="flex items-center justify-between">
          {item.list_property_type_name && (
            <p className="text-[16px] font-hindRegular">
              {item.list_property_type_name}
            </p>
          )}
          {item.list_id && (
            <span className="flex items-center justify-center gap-1">
              <Captions className="h-4" /> {item.list_id}
            </span>
          )}
        </div>
        {item.list_name && (
          <p className="text-[clamp(16px,3vw,18px)] font-hindBold leading-5 line-clamp-2">
            {item.list_name}
          </p>
        )}
        <div className="flex justify-around">
          {item.list_lot_area && (
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <LandPlot /> {item.list_lot_area}
              </p>
              <p className="text-gray-400 text-[16px] font-hindBold text-center">
                Lot Area
              </p>
            </div>
          )}
          {item.list_floor_area && (
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <Grid2x2 /> {item.list_floor_area}
              </p>
              <p className="text-gray-400 text-[16px] font-hindBold text-center">
                Floor Area
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
