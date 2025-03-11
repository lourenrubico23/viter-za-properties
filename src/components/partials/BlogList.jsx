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
    pageType === "home" ? 3 : pageType === "blogSinglePage" ? 3 : 6;
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
      <div className="bg-light mt-20  customContainer lg:max-w-[1240px] mb-32">
        {pageType === "home" && (
          <div className="title uppercase text-secondary text-[clamp(20px,3vw,34px)] font-hindBold text-center md:mt-[168px]">
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
                className="group hover:border-secondary hover:scale-[1.01] hover:duration-200 max-w-[372px] min-h-[555px] hover:shadow-xl border overflow-hidden transition-transform place-items-center"
              >
                <div className="overflow-hidden">
                  {firstImage && (
                    <img
                      src={`${googleHDViewLink}${firstImage?.id}`}
                      alt="Property Image"
                      className="w-full h-[246px] object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="p-6 flex flex-col gap-7 min-h-[240px]">
                  <div className="text-lg font-hindBold text-center ">
                    <p>{item.blogs_title}</p>
                  </div>
                  <p className="text-[16px]">{item.blogs_brief_description}</p>
                </div>
                <Link
                  className="btn group-hover:shadow-[inset_300px_0_0_0_#007B80] absolute bottom-0 mb-5"
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
              <button className="btn" onClick={handleLoadMore}>
                Load More Blogs
              </button>
            ) : (
              <p className="text-gray-500 text-lg font-semibold">
                No more properties to show
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
