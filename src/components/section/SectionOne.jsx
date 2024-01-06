import React from "react";

// Import Image
import bgImage from "../../assets/image/bgImage1.png";
import bgilustrasi from "../../assets/image/illustrasi1.png";

const SectionOne = () => {
  return (
    <section className="min-h-screen">
      <div className="z-10 absolute w-full h-full">
        <div className="h-full flex items-center sm:flex-col-reverse sm:justify-center lg:flex-row lg:justify-between sm:px-5 md:px-[50px] lg:px-[100px]">
          <div className="text-center sm:mt-10 md:mt-20 lg:mt-0">
            <h1 className="sm:text-2xl md:text-3xl lg:text-5xl text-[#23155B] font-bold">
              Vision Capital
            </h1>
            <p className="sm:text-xs md:text-base lg:text-lg text-[#23155B] sm:mt-2">
              The right way to fund and incubate your DeFi startup
            </p>

            <div className="flex sm:flex-col sm:gap-y-3 sm:mt-3 lg:flex-row lg:gap-x-2">
              <button className="bg-[#8053FF] text-white sm:py-2 sm:text-xs md:text-base lg:text-lg lg:w-full rounded">
                I Need Funding
              </button>
              <button className="border border-[#8053FF] sm:py-2 sm:text-xs md:text-base lg:text-lg lg:w-full rounded">
                Become an Investor
              </button>
            </div>
          </div>

          <img src={bgilustrasi} className="sm:w-2/3 md:w-1/2 lg:w-2/4" />
        </div>
      </div>
      <img
        src={bgImage}
        className="sm:h-1/2 md:h-2/4 lg:h-full absolute right-0"
      />
    </section>
  );
};

export default SectionOne;
