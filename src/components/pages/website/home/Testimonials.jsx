import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import Slider from "react-slick";

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

  const testimonialsData = [
    {
      name: "Jade D.",
      testimony:
        "Zac was a great agent that helped me navigate a difficult sale as I was based in London and a completely different time zone. He was readily available at all times. ",
      position: "London Based Seller",
    },
    {
      name: "Alyanna B.",
      testimony:
        "Transparent with transactons, nothing hidden. He also made an effort to lst down each and every transaction for our reference. Overall, I highly recommended Sir Zac as broker/agent. He negotiates excellently with both buyer and seller, in such a ways that it's in favor of both parties. If you're a beginner to real property, he'll make it easy for you.",
      position: "Commercial Pilot",
    },
    {
      name: "Angelina C.",
      testimony:
        "I am very grateful that Zac was my Broker in selling my properties! He deals professionally and protects both the seller and the buyer's interest. Everything is in order, especially in document preparation, which leads to a very smooth turn-over! Zac, you are a blessing to us! God bless you with more clients and sales in Jesus name Amen!",
      position: "Seller",
    },
  ];
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
            {testimonialsData.map((item, key) => (
              <div className=" text-light mt-20 flex flex-col gap-5" key={key}>
                <div className="flex flex-col gap-5 max-w-[527px] px-7 lg:px-4">
                  <p className="text-[clamp(16px,3vw,24px)] font-hindBold">{item.name}</p>
                  <p className="text-[clamp(12px,3vw,16px)]">{item.testimony}</p>
                  <div className="flex gap-5">
                    <p className="bg-secondary rounded-full p-2 h-0.5 w-0.5"></p>
                    <p className="text-[clamp(12px,3vw,16px)]"> {item.position}</p>
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
