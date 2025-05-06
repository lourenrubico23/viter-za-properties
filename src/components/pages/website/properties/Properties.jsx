import React from "react";
import Footer from "../../../partials/Footer";
import {
  devApiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import Navigation from "../Navigation";
import useQueryData from "../../../custom-hooks/useQueryData";
import LoadImages from "../../../partials/LoadImages";
import { CiImageOn } from "react-icons/ci";
import ContactForm from "../../../partials/contact-form/ContactForm";
import { StoreContext } from "../../../../store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../custom-hooks/queryDataInfinite";
import {
  setError,
  setIsSearch,
  setMessage,
} from "../../../../store/StoreAction";
import Loader from "../../../partials/spinners/Loader";
import FeaturedProperties from "../../../partials/featured-properties/FeaturedProperties";

const Properties = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isFilter, setIsFilter] = React.useState(false);
  const [propertyStatusData, setPropertyStatusData] = React.useState("all");
  const [location, setLocation] = React.useState("all");
  const [propertyType, setPropertyTypeData] = React.useState("all");
  const [searchData, setSearchData] = React.useState("all");
  const [cities, setCities] = React.useState([]);

  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const search = React.useRef({ value: "" });

  const featuredRef = React.useRef(null);

  const { isLoadingBanner, data: bannerData } = useQueryData(
    `${devApiVersion}/banner`, // endpoint
    "get", // method
    "banner" // key
  );
  const { data: aboutData } = useQueryData(
    `${devApiVersion}/about`, // endpoint
    "get", // method
    "about" // key
  );
  const { data: propertyStatus } = useQueryData(
    `${devApiVersion}/property-status`, // endpoint
    "get", // method
    "property-status" // key
  );
  const { data: propertyListData } = useQueryData(
    `${devApiVersion}/property-list`, // endpoint
    "get", // method
    "property-list" // key
  );

  const { data: propertyTypeData } = useQueryData(
    `${devApiVersion}/property-type`, // endpoint
    "get", // method
    "property-type" // key
  );

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [
      "property-list",
      onSearch,
      searchData,
      store.isSearch,
      isFilter,
      propertyStatusData,
      location,
      propertyType,
    ],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${devApiVersion}/property-list/search`, // search endpoint
        `${devApiVersion}/property-list/page/${pageParam}`, // list endpoint
        store.isSearch || isFilter,
        // search boolean
        {
          searchValue: search.current.value,
          id: "",
          isFilter,
          list_property_status_id:
            propertyStatusData === "all" ? "" : propertyStatusData,
          list_city: location === "all" ? "" : location,
          list_property_type_id: propertyType === "all" ? "" : propertyType,
          search_data: searchData === "all" ? "" : searchData,
        }, // search value
        "post"
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  const handleChange = (e) => {
    console.log(e.value);
    if (e.target.value === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = search.current.value;

    if (val === " " || val === "") {
      setSearchData("all");
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
      dispatch(setError(false));
    } else {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(true));
    }
  };

  const handleChangePropertyStatus = (e) => {
    setPropertyStatusData(e.target.value);
    setIsFilter(false);
    dispatch(setIsSearch(false));
    search.current.value = "";
    if (e.target.value !== "all") {
      setIsFilter(true);
    }
    setPage(1);
  };

  const handleChangePropertyLocation = (e) => {
    setLocation(e.target.value);
    setIsFilter(false);
    dispatch(setIsSearch(false));
    search.current.value = "";
    if (e.target.value !== "all") {
      setIsFilter(true);
    }
    setPage(1);
  };

  const handleChangePropertyType = (e) => {
    setPropertyTypeData(e.target.value);
    setIsFilter(false);
    dispatch(setIsSearch(false));
    search.current.value = "";
    if (e.target.value !== "all") {
      setIsFilter(true);
    }
    setPage(1);
    featuredRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fetch cities from the API
  React.useEffect(() => {
    fetch("https://psgc.gitlab.io/api/cities/")
      .then((response) => response.json())
      .then((data) => {
        const cleanedData = data
          .map((city) => ({
            ...city,
            name: city.name.replace(/^City of\s+/i, ""), // Remove "City of " at the beginning
          }))
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
        setCities(cleanedData);
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="outer-wrapper min-h-screen flex flex-col">
        <div className="wrapper flex flex-col flex-grow">
          <Navigation />
          <div className=" relative flex justify-center lg:min-h-[420px] w-full">
            {isLoadingBanner && <Loader />}
            {bannerData?.data.map((item, key) => {
              if (item.banner_page === "Properties") {
                const bannerImage =
                  getConvertStringToJSONparseData(item.banner_image) || [];

                return (
                  <div
                    className="relative flex justify-center w-full"
                    key={key}
                  >
                    {bannerImage.length > 0 ? (
                      bannerImage.map((image, index) => (
                        <div
                          className="relative w-full min-h-[375px] lg:max-h-[420px]"
                          key={index}
                        >
                          <LoadImages
                            url={`${googleHDViewLink}${image?.id}`}
                            alt={`${item.banner_title}`}
                            className="object-cover w-full h-full z-10"
                            isTableSpinner={true}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="bg-gray-300 inset-0 w-full h-[420px] object-cover">
                        <CiImageOn className="text-[10rem] place-self-center mt-20 text-gray-400" />
                      </div>
                    )}

                    <h1 className="px-2 lg:px-0 text-[clamp(20px,3vw,34px)] md:w-[592px] md:mx-[15%] text-center font-hindBold absolute top-0 md:mt-[10%] mt-[110px] lg:mt-[84px] ">
                      {item.banner_title}
                    </h1>
                  </div>
                );
              }
            })}

            <div className=" lg:max-h-[143px] shadow-md bg-light w-[352px] md:w-[650px] lg:w-[1240px] place-self-center absolute top-[300px] lg:top-[350px] place-content-center place-items-center px-9  md:py-9 py-9">
              <div className="flex flex-col lg:flex lg:flex-row gap-5 items-center ">
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Property
                  </span>
                  <select
                    name="status"
                    value={propertyStatusData}
                    onChange={(e) => handleChangePropertyStatus(e)}
                    className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[180px] "
                    disabled={isFetching || status === "pending"}
                  >
                    <option value="all">Any</option>

                    {propertyStatus?.data.map((item, key) => (
                      <option key={key} value={item.property_status_aid}>
                        {item.property_status_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-hindRegular">City</span>
                  <select
                    name="location"
                    value={location}
                    onChange={handleChangePropertyLocation}
                    className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[329px]"
                  >
                    <option value="all">Any</option>
                    {cities.map((city, index) => (
                      <option key={city.id || index} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Property Type
                  </span>
                  <select
                    name="type"
                    value={propertyType}
                    onChange={(e) => handleChangePropertyType(e)}
                    className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[255px] "
                    disabled={isFetching || status === "pending"}
                  >
                    <option value="all">Any</option>

                    {propertyTypeData?.data.map((item, key) => (
                      <option key={key} value={item.property_type_aid}>
                        {item.property_type_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <span htmlFor="" className="text-xs font-hindRegular">
                    Keyword
                  </span>
                  <form className="search-box">
                    <div>
                      <input
                        type="search"
                        placeholder="Search here..."
                        ref={search}
                        onChange={(e) => handleChange(e)}
                        className="rounded-none border-[2px] w-[250px] md:w-[280px] lg:!h-[46px] lg:max-w-[196px] "
                      />
                    </div>
                  </form>
                </div>
                <button
                  className="btn mt-6"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div ref={featuredRef}>
              <FeaturedProperties
                pageType="properties"
                result={result}
                status={status}
                error={error}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
                page={page}
                hasNextPage={hasNextPage}
                setPage={setPage}
              />
            </div>
          </div>

          <div className="relative flex-row">
            <ContactForm pageType={"Properties"} />
          </div>

          <Footer
            handleChangePropertyType={handleChangePropertyType}
            propertyType={propertyType}
            featuredRef={featuredRef}
          />
        </div>
      </div>
    </>
  );
};

export default Properties;
