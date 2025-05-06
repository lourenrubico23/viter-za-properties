import { MoveRight } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { setIsAdd } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import useQueryData from "../custom-hooks/useQueryData";
import {
  devApiVersion,
  devNavUrl,
  generateSlug,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../helpers/functions-general";
import LoadImages from "./LoadImages";

const BlogList = ({ pageType, currentBlogSlug }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const { slug: blogsSlug } = useParams(); // Get property slug from URL

  const { data: blogsData } = useQueryData(
    `${devApiVersion}/blogs`, // endpoint
    "get", // method
    "blogs" // key
  );

  const [selectedPropertyId, setSelectedPropertyId] = React.useState(null);

  const initialVisibleProperties =
    pageType === "home" ? 3 : pageType === "blogSinglePage" ? 3 : 9;
  const [visibleProperties, setVisibleProperties] = React.useState(
    initialVisibleProperties
  );

  const totalProperties = blogsData?.data.length || 0;
  const hasMoreProperties = visibleProperties < totalProperties;

  const handleLoadMore = () => {
    setVisibleProperties((prev) => prev + 6);
  };

  // Exclude the current blog post
  const filteredBlogs =
    blogsData?.data.filter(
      (item) =>
        `${generateSlug(item.blogs_title)}` !==
        `${generateSlug(currentBlogSlug)}`
    ) || [];

  React.useEffect(() => {
    if (blogsSlug && blogsData?.data) {
      const formattedSlug = `${generateSlug(blogsSlug)}`; // Ensure consistency

      // Find the matching blog
      const selectedProperty = blogsData.data.find(
        (item) => `${generateSlug(item.blogs_title)}` === formattedSlug
      );

      if (selectedProperty) {
        setItemEdit(selectedProperty);
        setSelectedPropertyId(selectedProperty.blogs_aid);
      }
    }
  }, [blogsSlug, blogsData]);

  return (
    <>
      <div className="bg-light mt-20  customContainer lg:max-w-[1240px] mb-32 ">
        {pageType === "home" && (
          <div className="title uppercase text-secondary text-[clamp(25px,3vw,34px)] font-hindBold text-center md:mt-[168px]">
            Blog
          </div>
        )}

        <div className="flex flex-wrap gap-8 my-20 place-content-center">
          {filteredBlogs.slice(0, visibleProperties).map((item, index) => {
            const blogsImages =
              getConvertStringToJSONparseData(item.blogs_img) || [];
            const firstImage = blogsImages.length > 0 ? blogsImages[0] : null;

            return (
              <div
                key={index}
                className="group hover:border-secondary hover:scale-[1.01] hover:duration-200 md:max-w-[372px] md:min-w-[372px] md:min-h-[555px] max-w-[320px] min-w-[320px] min-h-[500px] hover:shadow-xl border overflow-hidden transition-transform place-items-center"
              >
                <div className="overflow-hidden relative h-[246px]">
                  {firstImage && (
                    <LoadImages
                      url={`${googleHDViewLink}${firstImage?.id}`}
                      alt="Property Image"
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="p-6 flex flex-col gap-7 min-h-[240px]">
                  <div className=" font-hindBold text-center ">
                    <p className="text-lg line-clamp-2">{item.blogs_title}</p>
                  </div>
                  <p className="text-[16px] text-justify line-clamp-6">
                    {item.blogs_brief_description}
                  </p>
                </div>
                <Link
                  className="btn group-hover:shadow-[inset_300px_0_0_0_#007B80] mb-5"
                  to={`${devNavUrl}/blogs/${generateSlug(item.blogs_title)}`}
                >
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
        {pageType === "Home" && (
          <a
            href={`${devNavUrl}/blogs`}
            className="btn !flex gap-2 items-center place-self-center"
          >
            <MoveRight />
            Read more Blogs
          </a>
        )}

        {pageType === "Blogs" && (
          <div className="place-self-center">
            {hasMoreProperties ? (
              <button
                className="text-sm font-semibold relative pb-1 transition duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                before:bg-secondary before:transition-transform before:duration-300 before:scale-x-0 
                hover:before:scale-x-100"
                onClick={handleLoadMore}
              >
                Load more blogs
              </button>
            ) : (
              <p className="text-gray-400 text-base">No more blogs to show</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
