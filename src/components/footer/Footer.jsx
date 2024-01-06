import React from "react";

// Import Image
import bgMark1 from "../../assets/image/Mask3.png";
import bgMark2 from "../../assets/image/Mask4.png";
import iconMark1 from "../../assets/icon/icons_fb.png";
import iconMark2 from "../../assets/icon/icons_twitter.png";
import iconMark3 from "../../assets/icon/icons_telegram.png";
import iconMark4 from "../../assets/icon/icons_github.png";

const Footer = () => {
  return (
    <section className="bg-[#23155B] relative sm:py-[100px] sm:px-5 md:px-[50px] lg:px-[200px] lg:py-[200px]">
      <div className="z-10 relative h-full lg:flex lg:justify-between">
        <div className="lg:w-full">
          <h1 className="text-white sm:text-xl md:text-4xl lg:text-5xl font-bold sm:mt-1">
            <span className="text-[#8053FF]">Join</span>
            <br /> Vision Capital <br /> and get funded
          </h1>
          <p className="text-[#D4CDEF] sm:text-xs sm:mt-2 lg:text-sm">
            We'll get back to you within 24 hours
          </p>

          <form className="sm:mt-3 md:mt-8 md:flex md:gap-5">
            <div className="md:w-full">
              <label className="sm:text-xs text-[#D4CDEF]">
                How is your project called?
              </label>
              <br />
              <input type="text" className="sm:w-full sm:py-2 rounded-md" />
              <br />
              <br />
              <label className="sm:text-xs text-[#D4CDEF]">Your Email</label>
              <br />
              <input type="text" className="sm:w-full sm:py-2 rounded-md" />
              <br className="md:hidden" />
              <br />
            </div>
            <div className="md:w-full">
              <label className="sm:text-xs text-[#D4CDEF]">
                Please tell us a few words about the project
              </label>
              <br />
              <input type="text" className="sm:w-full sm:py-2 rounded-md" />
              <br />
              <br />
              <label className="sm:text-xs text-[#D4CDEF]">Telegram name</label>
              <br />
              <input type="text" className="sm:w-full sm:py-2 rounded-md" />
            </div>
          </form>
          <button className="bg-[#8053FF] text-white sm:mt-8 sm:py-2 sm:w-full md:w-1/2 lg:w-1/3 rounded-md">
            Send
          </button>
        </div>

        <div className="md:flex md:justify-between md:items-end lg:flex-col lg:justify-end lg:items-end lg:w-1/2">
          <div className="sm:flex sm:gap-x-3 sm:mt-10">
            <img src={iconMark1} className="sm:w-6" alt="" />
            <img src={iconMark2} className="sm:w-6" alt="" />
            <img src={iconMark3} className="sm:w-6" alt="" />
            <img src={iconMark4} className="sm:w-6" alt="" />
          </div>
          <div className="sm:mt-5 md:flex md:gap-x-5">
            <p className="text-[#D4CDEF] sm:text-xs sm:mb-3 md:mb-0">
              hello@visioncapital.com
            </p>
            <p className="text-[#D4CDEF] sm:text-xs">Join us on Telegram</p>
          </div>
        </div>
      </div>

      <img
        src={bgMark1}
        className="sm:w-2/3 md:w-2/4 lg:w-2/4 absolute top-0 left-0"
        alt=""
      />
      <img
        src={bgMark2}
        className="sm:w-2/3 md:w-2/4 lg:w-2/4 absolute bottom-0 right-0"
        alt=""
      />
    </section>
  );
};

export default Footer;
