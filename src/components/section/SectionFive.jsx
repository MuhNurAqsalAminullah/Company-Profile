import React from "react";

// Import Image
import bgLogo from "../../assets/image/logo.png";
import bgMark from "../../assets/image/image1.png";

const SectionFive = () => {
  return (
    <section className="sm:py-[100px] sm:px-5 md:pl-0 md:pr-[50px] lg:pr-[200px] lg:py-[200px]">
      <div className="md:flex md:items-center md:justify-between md:gap-x-10 lg:gap-40">
        <img
          src={bgMark}
          className="sm:hidden md:block md:w-1/2 lg:w-2/5"
          alt=""
        />
        <div className="sm:text-center md:text-left">
          <div className="sm:flex sm:justify-center md:justify-start">
            <img src={bgLogo} className="sm:w-10" alt="" />
          </div>
          <h1 className="text-[#8053FF] font-bold sm:text-xl sm:my-2 md:my-5 md:text-4xl lg:text-5xl">
            Brought to you <br />
            <span className="text-[#23155B]">by DeFiPie</span>
          </h1>
          <p className="text-[#23155B] sm:text-xs lg:text-sm">
            DeFiPie is the first DeFi app to bring together crypto lending,
            staking, P2P loans, liquidity mining, and trading. We have a strong
            development and marketing team and an active, constantly growing
            community.
          </p>
          <br />
          <p className="text-[#23155B] sm:text-xs lg:text-sm">
            Project incubation is a natural next step: now that we've done it
            ourselves, we want to help other quality projects to achieve
            success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
