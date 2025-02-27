import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Smartphone,
} from "lucide-react";
import React from "react";

const ContactForm = ({ pageType }) => {
  return (
    <div className="bg-light py-24">
      <div className="customContainer">
        <div className="lg:flex  items-center justify-between">
          <div className="flex flex-col gap-7">
            {pageType === "buyers" && (
              <div className="flex flex-col gap-12 mb-9">
                <p className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold">
                  Buyers
                </p>
                <p className="text-[16px] font-hindRegular max-w-[556px]">
                  Finding the perfect property is more than just a
                  transaction—it's about securing your future. Whether you're
                  searching for your dream home, a smart investment, or a prime
                  commercial space, I am committed to guiding you every step of
                  the way. With expert market insights, personalized service,
                  and a passion for real estate, I help buyers make confident,
                  well-informed decisions. Let's turn your vision into
                  reality—because the right property changes everything.
                </p>
              </div>
            )}
            {pageType === "sellers" && (
              <div className="flex flex-col gap-12 mb-9">
                <p className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold">
                  Sellers
                </p>
                <p className="text-[16px] font-hindRegular max-w-[556px]">
                  Selling your property is a major decision, and I'm here to
                  make the process smooth, strategic, and successful. With
                  expert market analysis, targeted marketing, and a vast network
                  of qualified buyers, I ensure your property gets the exposure
                  and value it deserves. From pricing to closing, I handle every
                  detail with professionalism and care. Let's maximize your
                  propertys potential and achieve the best possible deal.
                </p>
              </div>
            )}

            <h1 className="text-[clamp(30px,3vw,72px)] font-hindBold">
              ZA Properties
            </h1>

            <ul className="flex flex-col gap-6 [&>li]:flex [&>li]:items-center [&>li]:gap-4 mb-10 lg:mb-0">
              <li>
                <Smartphone className="fill-beige" />
                <p className="text-secondary text-[clamp(20px,3vw,34px)] font-hindBold">
                  +63 917 653 1919
                </p>
              </li>
              <li>
                <MapPin className="fill-beige" />
                <p className="text-[16px] font-hindRegular">
                  24th Floor PSE Tower 5th Avenue BGC Taguig
                </p>
              </li>
              <li>
                <Facebook className="fill-beige" />
                <p className="text-[16px] font-hindRegular">ZAPropertiesPh</p>
              </li>
              <li>
                <Instagram className="fill-beige" />
                <p className="text-[16px] font-hindRegular">ZAPropertiesPh</p>
              </li>
              <li>
                <Linkedin className="fill-beige" />
                <p className="text-[16px] font-hindRegular">ZacAlfantaJr</p>
              </li>
            </ul>
          </div>

          <div className="bg-light border shadow-lg p-16">
            <p className="text-[clamp(16px,3vw,24px)] font-hindBold mb-6 md:w-[520px]">
              {pageType === "home" || pageType === "properties"
                ? "Contact Us"
                : ""}
              {pageType === "buyers" &&
                "Your Ideal Property Awaits—Let’s Connect!"}
              {pageType === "sellers" &&
                "Let's Get Your Property Sold—Contact Me Now!"}
              {pageType === "contact" &&
                "Contact us today for a complimentary, no-pressure home appraisal!"}
            </p>

            <div className="flex flex-col gap-7">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-none border-2 max-w-[494px] h-[50px]"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="rounded-none border-2 max-w-[494px] h-[50px]"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="rounded-none border-2 max-w-[494px] h-[50px]"
              />
              <input
                type="text"
                placeholder="Best Time To Call"
                className="rounded-none border-2 max-w-[494px] h-[50px]"
              />
              <textarea
                type="text"
                placeholder="Message"
                className="rounded-none border-2 max-w-[494px]"
              />
            </div>

            <button className="btn my-6">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
