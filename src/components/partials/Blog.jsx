import React from "react";
import { devBaseImgUrl } from "../helpers/functions-general";
import { MoveRight } from "lucide-react";

const Blog = () => {
  const cardData = Array(3).fill({
    title: "Keys to Homeownership:",
    subtitle: "Tips & Insights for Buyers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vel cras ornare sit ullamcorper lacus platea aliquam. Aliquet lacus viverra mauris",
    button: "Read more",
    imgSrc: `${devBaseImgUrl}/cards2.webp`,
  });
  return (
    <>
      <div className="bg-light mt-20 md:mt-[168px] customContainer lg:max-w-[1240px] mb-32">
        <div className="title uppercase text-secondary text-[clamp(20px,3vw,34px)] font-hindBold text-center">
          Blog
        </div>

        <div className="flex flex-wrap gap-8 my-20 place-content-center">
          {cardData.map((card, index) => (
            <a className="cursor-pointer">
              <div
                key={index}
                className=" group hover:border-secondary hover:scale-[1.01] hover:duration-200 max-w-[372px] min-h-[555px] hover:shadow-xl border overflow-hidden transition-transform place-items-center"
              >
                <div className="overflow-hidden">
                  <img
                    src={card.imgSrc}
                    alt="Property Image"
                    className="w-full h-[246px] object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col gap-7 min-h-[240px]">
                  <div className="text-lg font-hindBold text-center ">
                    <p>{card.title}</p>
                    <p>{card.subtitle}</p>
                  </div>
                  <p className="text-[16px]">{card.description}</p>
                </div>
                <button className="btn group-hover:shadow-[inset_300px_0_0_0_#007B80] absolute bottom-0 mb-5">
                  {card.button}
                </button>
              </div>
            </a>
          ))}
        </div>

        <button className="btn !flex gap-2 items-center place-self-center">
          <MoveRight />
          Read more Blogs
        </button>
      </div>
    </>
  );
};

export default Blog;
