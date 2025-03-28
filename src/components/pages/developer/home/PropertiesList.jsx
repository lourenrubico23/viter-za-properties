import { Captions, Grid2x2, LandPlot } from "lucide-react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { setIsAdd } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devApiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import LoadImages from "../../../partials/LoadImages";
import PropertyDescriptionPage from "../../../partials/PropertyDescriptionPage";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import NoDataWebPage from "../../../partials/spinners/NoDataWebPage";
import ServerErrorWebPage from "../../../partials/spinners/ServerErrorWebPage";

const PropertiesList = ({ pageType }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [selectedPropertyId, setSelectedPropertyId] = React.useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibleProperties, setVisibleProperties] = React.useState(6);

  const {
    isFetching,
    error,
    isLoading,
    data: propertyListData,
  } = useQueryData(
    `${devApiVersion}/property-list`, // endpoint
    "get", // method
    "property-list" // key
  );

  const isHomePage = pageType === "home";

  const handleLoadMore = () => {
    setVisibleProperties((prev) => prev + 6);
  };

  const handleOpenDescription = (item) => {
    dispatch(setIsAdd({ modal: true, modalCode: "propertyDesc" }));
    setItemEdit(item);
    setSelectedPropertyId(item.list_aid);
    document.body.classList.toggle("overflow-hidden");
  };

  const totalProperties = propertyListData?.data.length || 0;
  const hasMoreProperties = visibleProperties < totalProperties;
  return (
    <>
      <div className="bg-light mt-[450px] md:mt-[468px] lg:mt-[90px] customContainer lg:max-w-[1240px] ">
        {isFetching && !isLoading && <FetchingSpinner />}
        <div className="title uppercase text-secondary text-[clamp(25px,3vw,34px)] font-hindBold text-center">
          Featured properties
        </div>
        {(isLoading === "pending" || propertyListData?.data.length === 0) && (
          <div className="text-center my-8">
            {isLoading === "pending" ? <FetchingSpinner /> : <NoDataWebPage />}
          </div>
        )}

        {error && (
          <div className="text-center my-8">
            <ServerErrorWebPage />
          </div>
        )}

        <div className="flex flex-wrap gap-8 my-20 place-content-center">
          {propertyListData?.data
            .slice(0, isHomePage ? 6 : visibleProperties)
            .map((item, key) => {
              const propertyImages =
                getConvertStringToJSONparseData(item.list_img) || [];
              const firstImage =
                propertyImages.length > 0 ? propertyImages[0] : null;

              return (
                <a
                  className="cursor-pointer"
                  onClick={() => handleOpenDescription(item)}
                  key={key}
                >
                  <div className="rounded-md group hover:scale-[1.01] hover:duration-200 md:min-w-[374px] md:max-w-[374px] min-h-[442px] hover:shadow-xl border overflow-hidden transition-transform relative">
                    <div className="overflow-hidden">
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
                          <span className="text-lg">&#8369;</span>{" "}
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
                        <p className="text-[clamp(16px,3vw,18px)] font-hindBold leading-5">
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
                </a>
              );
            })}
        </div>

        {pageType === "properties" && (
          <div className="place-self-center my-7">
            {hasMoreProperties ? (
              <button className="btn" onClick={handleLoadMore}>
                Load More
              </button>
            ) : (
              <p className="text-gray-400 text-base">
                No more properties to show
              </p>
            )}
          </div>
        )}
      </div>

      {store.isAdd?.modal && store.isAdd?.modalCode === "propertyDesc" && (
        <PropertyDescriptionPage
          setSelectedPropertyId={setSelectedPropertyId}
          propertyListData={propertyListData}
          selectedPropertyId={selectedPropertyId}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
      )}
    </>
  );
};

export default PropertiesList;
