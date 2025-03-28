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
  generateSlug,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../helpers/functions-general";
import Navigation from "../pages/website/Navigation";
import BlogList from "./BlogList";
import LoadImages from "./LoadImages";
import Footer from "./Footer";
import ShareLinkModal from "./modals/ShareLinkModal";
import ContactForm from "./contact-form/ContactForm";

const BlogsDescriptionPage = ({ setSearchParams }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isPropertyLinkOpen, setIsPropertyLinkOpen] = React.useState(false);
  const [propertyLink, setPropertyLink] = React.useState("");
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
      (item) => `${generateSlug(item.blogs_title)}` === slug
    );
  };

  const post = getBlogs();

  if (!post) {
    return "";
  }

  const blogsImages = getConvertStringToJSONparseData(post.blogs_img) || [];
  const firstImage = blogsImages.length > 0 ? blogsImages[0] : null;

  const handleCopyLink = (post) => {
    const link = `${window.location.origin}/blogs/${post.blogs_title
      .replace(/\s+/g, "-")
      .toLowerCase()}`;

    setPropertyLink(link);
    setIsPropertyLinkOpen(true);
    navigator.clipboard.writeText(link);
  };

  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Navigation />
          <div className="customContainer my-20">
            <p className="text-lg font-hindBold text-secondary">
              Blogs and Insights
            </p>

            <div>
              <h1 className="text-[clamp(20px,3vw,34px)] font-hindBold mt-3">
                {post.blogs_title}
              </h1>
            </div>
            <div className="space-y-10 md:flex md:justify-between md:items-center py-16 border-b-2">
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
              <button
                className="btn gap-2 md:!mt-0 !place-self-start"
                onClick={() => {
                  handleCopyLink(post);
                }}
              >
                <Share2 className="h-6 " /> Share this Post
              </button>
            </div>

            <div className="md:mx-[10%] lg:mx-[190px] py-[52px] flex flex-col gap-8 relative text-justify ">
              {post.blogs_contents_a
                .split("\n") // Split by new lines
                .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                .map((content_a, index) => (
                  <p key={index}>{content_a}</p>
                ))}
              {firstImage && (
                <LoadImages
                  url={`${googleHDViewLink}${firstImage?.id}`}
                  alt={`${post.blogs_title}`}
                  className="my-10"
                />
              )}
              {post.blogs_contents_b
                .split("\n") // Split by new lines
                .filter((content_b) => content_b.trim() !== "") // Remove empty lines
                .map((content_b, index) => (
                  <p key={index}>{content_b}</p>
                ))}
              <div className="flex flex-wrap gap-4 md:max-w-[850px] place-content-center relative">
                {blogsImages.slice(1).map((image, index) => (
                  <LoadImages
                    url={`${googleHDViewLink}${image?.id}`}
                    alt={`${post.blogs_title}`}
                    className="md:max-h-[400px] md:max-w-[400px] object-cover my-10"
                    key={index}
                  />
                ))}
              </div>
              {post.blogs_contents_c
                .split("\n") // Split by new lines
                .filter((content_c) => content_c.trim() !== "") // Remove empty lines
                .map((content_c, index) => (
                  <p key={index}>{content_c}</p>
                ))}
              <div className="my-7 place-self-start">
                <button
                  className="btn gap-2"
                  onClick={() => {
                    handleCopyLink(post);
                  }}
                >
                  <Share2 className="h-6 " /> Share this Post
                </button>
              </div>
            </div>

            <div className="pt-16 border-t-2">
              <h1 className="text-[clamp(20px,3vw,34px)] font-hindBold ">
                Related Insights
              </h1>
              <BlogList pageType="blogSinglePage" currentBlogSlug={slug} />
            </div>

            {/* <ContactForm pageType={"Blogs"} /> */}
          </div>
          <Footer />
        </div>
      </div>

      {isPropertyLinkOpen && (
        <ShareLinkModal
          propertyLink={propertyLink}
          setSearchParams={setSearchParams}
          setIsPropertyLinkOpen={setIsPropertyLinkOpen}
          setPropertyLink={setPropertyLink}
        />
      )}
    </>
  );
};

export default BlogsDescriptionPage;
