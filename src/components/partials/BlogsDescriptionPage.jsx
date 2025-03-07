import { Share2 } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setIsAdd } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import useQueryData from "../custom-hooks/useQueryData";
import {
  devApiVersion,
  devBaseImgUrl,
  formatDate,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../helpers/functions-general";
import Navigation from "../pages/website/Navigation";
import BlogList from "./BlogList";
import LoadImages from "./LoadImages";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const BlogsDescriptionPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { slug } = useParams();

  const { data: blogsData } = useQueryData(
    `${devApiVersion}/blogs`, // endpoint
    "get", // method
    "blogs" // key
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to get the post based on slug
  const getBlogs = () => {
    if (!blogsData || !Array.isArray(blogsData.data)) {
      return undefined;
    }
    return blogsData.data.find(
      (item) =>
        item.blogs_title?.trim().toLowerCase() === slug?.trim().toLowerCase()
    );
  };

  const post = getBlogs();

  if (!post) {
    return "";
  }

  const blogsImages = getConvertStringToJSONparseData(post.blogs_img) || [];
  const firstImage = blogsImages.length > 0 ? blogsImages[0] : null;

  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Navigation />
          <div className="customContainer my-16">
            <p className="text-lg font-hindBold text-secondary">
              Blogs and Insights
            </p>

            <div>
              <h1 className="text-[clamp(20px,3vw,34px)] font-hindBold mt-3">
                {post.blogs_title}
              </h1>
            </div>
            <div className="flex justify-between py-16 border-b-2">
              <div className="flex gap-10">
                <div>
                  <span>WRITTEN BY</span>
                  <p className="text-[16px] font-hindRegular">
                    {post.blogs_author}
                  </p>
                </div>
                <div>
                  <span>PUBLISHED</span>
                  <p className="text-[16px] font-hindRegular">{`${formatDate(
                    post.blogs_published_date
                  )}`}</p>
                </div>
              </div>
              <button className="btn !flex gap-2 items-center">
                <Share2 className="h-6 " /> Share this Post
              </button>
            </div>

            <div className="mx-[190px] py-[52px] flex flex-col gap-10 ">
              {post.blogs_contents_a
                .split("\n") // Split by new lines
                .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                .map((content_a, index) => (
                  <p key={index}>{content_a}</p>
                ))}
              {firstImage && (
                <LoadImages
                  url={`${googleHDViewLink}${firstImage?.id}`}
                  alt=""
                />
              )}
              {post.blogs_contents_b
                .split("\n") // Split by new lines
                .filter((content_b) => content_b.trim() !== "") // Remove empty lines
                .map((content_b, index) => (
                  <p key={index}>{content_b}</p>
                ))}
              <div className="flex flex-wrap gap-4 w-[850px] place-content-center">
                {blogsImages.map((image, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${image?.id}`}
                    alt=""
                    className="h-[400px] w-[400px] object-cover"
                  />
                ))}
              </div>
              {post.blogs_contents_c
                .split("\n") // Split by new lines
                .filter((content_c) => content_c.trim() !== "") // Remove empty lines
                .map((content_c, index) => (
                  <p key={index}>{content_c}</p>
                ))}
              <div>
                <button className="btn !flex gap-2 items-center">
                  <Share2 className="h-6 " /> Share this Post
                </button>
              </div>
            </div>

            <div>
              <h1 className="text-[clamp(20px,3vw,34px)] font-hindBold pt-10 border-t-2">
                Related Insights
              </h1>
              <BlogList />
            </div>

            <ContactForm pageType={"home"} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogsDescriptionPage;
