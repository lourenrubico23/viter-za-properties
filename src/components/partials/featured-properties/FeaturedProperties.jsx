import { Captions, Grid2x2, LandPlot } from "lucide-react";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { setIsAdd } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import useQueryData from "../../custom-hooks/useQueryData";
import {
  devApiVersion,
  devNavUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../helpers/functions-general";
import LoadImages from "../LoadImages";
import PropertyDescriptionPage from "../PropertyDescriptionPage";
import FetchingSpinner from "../spinners/FetchingSpinner";
import NoDataWebPage from "../spinners/NoDataWebPage";
import ServerErrorWebPage from "../spinners/ServerErrorWebPage";
import TableLoading from "../spinners/TableLoading";
import LoadMoreProperties from "../LoadMoreProperties";
import PropertiesList from "./PropertiesList";
import HomePropertiesList from "./HomePropertiesList";

const FeaturedProperties = ({
  pageType,
  result,
  status,
  error,
  isSearching,
  isFetchingNextPage,
  fetchNextPage,
  page,
  hasNextPage,
  setPage,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [selectedPropertyId, setSelectedPropertyId] = React.useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibleProperties, setVisibleProperties] = React.useState(6);

  const isHomePage = pageType === "home";

  const handleLoadMore = () => {
    setVisibleProperties((prev) => prev + 6);
    fetchNextPage();
  };

  const {
    isFetching,
    isLoading,
    data: propertyListData,
  } = useQueryData(
    `${devApiVersion}/property-list`, // endpoint
    "get", // method
    "property-list" // key
  );

  const { data: featuredPropertiesData } = useQueryData(
    `${devApiVersion}/featured-properties`, // endpoint
    "get", // method
    "featured-properties" // key
  );

  // Ensure featuredPropertiesData.data is always an array
  const featuredDataToRender = Array.isArray(featuredPropertiesData?.data)
    ? featuredPropertiesData.data
    : [];

  // // Check if we are on the home page or properties page, and set the data accordingly
  // const dataToRender = isSearching
  //   ? result?.pages?.flatMap((page) => page?.data || []) // Show search results when searching
  //   : isHomePage
  //   ? featuredDataToRender // Show featured properties on the home page
  //   : result?.pages?.flatMap((page) => page?.data || []); // Show all properties on the properties page

  const totalProperties = propertyListData?.data.length || 0;
  const hasMoreProperties = visibleProperties < totalProperties;

  const handleOpenDescription = (item) => {
    dispatch(setIsAdd({ modal: true, modalCode: "properties-description" }));
    setItemEdit(item);
    setSelectedPropertyId(item.list_aid);

    // Format list_name for the URL
    const formattedName = item.list_name.replace(/\s+/g, "-").toLowerCase();
    setSearchParams({ property: formattedName });

    document.body.classList.toggle("overflow-hidden");
  };

  // Check URL on page load & open modal
  React.useEffect(() => {
    const propertySlug = searchParams.get("property"); // Get property name from URL

    if (propertySlug && propertyListData?.data) {
      // Find the matching property by slug
      const selectedProperty = propertyListData.data.find(
        (item) =>
          item.list_name.replace(/\s+/g, "-").toLowerCase() === propertySlug
      );

      if (selectedProperty) {
        setItemEdit(selectedProperty);
        setSelectedPropertyId(selectedProperty.list_aid);
        dispatch(
          setIsAdd({ modal: true, modalCode: "properties-description" })
        );
      }
    }
  }, [searchParams, propertyListData]); // Re-run when URL or property data changes

  return (
    <>
      <div className="bg-light mt-[450px] md:mt-[468px] lg:mt-[180px] customContainer lg:max-w-[1240px] ">
        {isFetching && !isLoading && <FetchingSpinner />}
        <div className="title uppercase text-secondary text-[clamp(25px,3vw,34px)] font-hindBold text-center">
          Featured properties
        </div>
        {(status === "pending" || result?.pages[0].data.length === 0) && (
          <div className="text-center my-8">
            {status === "pending" ? (
              <TableLoading cols={3} count={30} />
            ) : (
              <NoDataWebPage />
            )}
          </div>
        )}

        {error && (
          <div className="text-center my-8">
            <ServerErrorWebPage />
          </div>
        )}

        {isSearching ? (
          <>
            {result?.pages.map((page, key) => (
              <React.Fragment key={key}>
                <div className="flex flex-wrap gap-8 my-10 place-content-center">
                  {page?.data.map((item, key) => {
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
                        <PropertiesList firstImage={firstImage} item={item} />
                      </a>
                    );
                  })}
                </div>
              </React.Fragment>
            ))}
          </>
        ) : isHomePage ? (
          <div className="flex flex-wrap gap-8 my-10 place-content-center">
            {featuredPropertiesData?.data.map((item, key) => {
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
                  <HomePropertiesList firstImage={firstImage} item={item} />
                </a>
              );
            })}
          </div>
        ) : (
          <>
            {result?.pages.map((page, key) => (
              <React.Fragment key={key}>
                <div className="flex flex-wrap gap-8 my-10 place-content-center">
                  {page?.data.map((item, key) => {
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
                        <PropertiesList firstImage={firstImage} item={item} />
                      </a>
                    );
                  })}
                </div>
              </React.Fragment>
            ))}
          </>
        )}

        {pageType === "properties" ? (
          <div className="place-self-center my-20">
            <>
              <LoadMoreProperties
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
                hasNextPage={hasNextPage}
                result={result?.pages[0]}
                setPage={setPage}
                page={page}
                text={"No more properties to show"}
              />
            </>
          </div>
        ) : (
          <div className="place-self-center my-20">
            <Link
              to={`${devNavUrl}/properties`}
              className="text-sm font-semibold relative pb-1 transition duration-300 
          before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
          before:bg-secondary before:transition-transform before:duration-300 before:scale-x-0 
          hover:before:scale-x-100"
            >
              View more properties
            </Link>
          </div>
        )}
      </div>

      {store.isAdd?.modal &&
        store.isAdd?.modalCode === "properties-description" && (
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

export default FeaturedProperties;
