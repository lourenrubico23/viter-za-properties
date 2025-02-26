import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import Slider from "react-slick";

function SampleNextArrow({ onClick }) {
  return (
    <div
      style={{
        background: "",
        color: "white",
        fontSize: "3rem",
        cursor: "pointer",
        borderRadius: "100%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
        top: "90px",
        right: "150px",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <MoveRight className="text-3xl" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      style={{
        background: "",
        color: "white",
        fontSize: "3rem",
        cursor: "pointer",
        borderRadius: "100%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
        top: "90px",
        right: "180px",
        position: "absolute",
      }}
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

  const testimonialsData = [
    {
      name: "Mary Grace Rodriguez",
      testimony:
        " Lorem ipsum dolor sit amet consectetur. Lacus donec lacus non risus. Hac venenatis fermentum a eget. Nisl nullam nec semper et ipsum vulputate nunc. Egestas pellentesque lectus bibendum eget. Dignissim turpis tellus a quis quis vestibulum.",
      position: "Social Media Influencer",
    },
    {
      name: "John Smith",
      testimony:
        " Lorem ipsum dolor sit amet consectetur. Lacus donec lacus non risus. Hac venenatis fermentum a eget. Nisl nullam nec semper et ipsum vulputate nunc. Egestas pellentesque lectus bibendum eget. Dignissim turpis tellus a quis quis vestibulum.",
      position: "Businessman",
    },
    {
      name: "Olivia Masterson",
      testimony:
        " Lorem ipsum dolor sit amet consectetur. Lacus donec lacus non risus. Hac venenatis fermentum a eget. Nisl nullam nec semper et ipsum vulputate nunc. Egestas pellentesque lectus bibendum eget. Dignissim turpis tellus a quis quis vestibulum.",
      position: "Creative Art Director",
    },
    {
      name: "Will Stevenson",
      testimony:
        " Lorem ipsum dolor sit amet consectetur. Lacus donec lacus non risus. Hac venenatis fermentum a eget. Nisl nullam nec semper et ipsum vulputate nunc. Egestas pellentesque lectus bibendum eget. Dignissim turpis tellus a quis quis vestibulum.",
      position: "Surgeon",
    },
  ];
  return (
    <>
      <div className="bg-dark min-h-[499px] relative  mb-9">
        <div className="customContainer overflow-hidden py-24">
          <div className="flex justify-between items-center">
            <h2 className="text-[clamp(20px,3vw,34px)] text-beige font-hindBold flex gap-4">
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
            {testimonialsData.map((item, key) => (
              <div className=" text-light mt-20 flex flex-col gap-5" key={key}>
                <div className="flex flex-col gap-5 w-[527px]">
                  <p className="text-2xl font-hindBold">{item.name}</p>
                  <p className="text-[16px]">{item.testimony}</p>
                  <div className="flex gap-5">
                    <p className="bg-secondary rounded-full p-2 h-0.5 w-0.5"></p>
                    <p className="text-[16px]"> {item.position}</p>
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
