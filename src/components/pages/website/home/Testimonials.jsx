import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import Slider from "react-slick";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devApiVersion } from "../../../helpers/functions-general";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="bg-transparent text-white text-3xl cursor-pointer rounded-full w-12 h-12 grid place-items-center absolute top-[90px] right-[20px] md:right-[150px]"
      onClick={onClick}
    >
      <MoveRight className="text-3xl" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="bg-transparent text-white text-3xl cursor-pointer rounded-full w-12 h-12 grid place-items-center absolute top-[90px] right-[50px] md:right-[180px]"
      onClick={onClick}
    >
      <MoveLeft className="text-3xl" />
    </div>
  );
}

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dotsClass: "slickNav slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px", 
          color: "blue",
          background: "gray",
          borderRadius: "50%",
          opacity: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { data: testimonialData } = useQueryData(
    `${devApiVersion}/testimonial`, // endpoint
    "get", // method
    "testimonial" // key
  );

  return (
    <>
      <div className="bg-dark min-h-[499px] relative  mb-9">
        <div className="customContainer overflow-hidden py-16 md:py-24">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-[clamp(20px,3vw,34px)] text-beige font-hindBold md:flex gap-4">
              Client Reviews
              <span className="text-yellow-400 flex gap-2">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </span>
            </h2>
          </div>

          <Slider {...settings}>
            {testimonialData?.data.map((item, key) => (
              <div className=" text-light mt-20 flex flex-col gap-5" key={key}>
                <div className="flex flex-col gap-5 max-w-[527px] px-7 lg:px-4">
                  <p className="text-[clamp(16px,3vw,24px)] font-hindBold">
                    {item.testimonial_name}
                  </p>
                  <p className="text-[clamp(12px,3vw,16px)]">
                    {item.testimonial_feedback}
                  </p>
                  <div className="flex gap-5">
                    <p className="bg-secondary rounded-full p-2 h-0.5 w-0.5"></p>
                    <p className="text-[clamp(12px,3vw,16px)]">
                      {item.testimonial_occupation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
