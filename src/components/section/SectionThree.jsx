import React, { useEffect, useState } from "react";
import * as BsIcons from "react-icons/bs";

// Import Image
import bgMark from "../../assets/image/Mask1.png";

const dataText = [
  {
    id: 1,
    title: "Decentralized investments",
    text: "we'll distribute your tokens among our huge and active community",
  },
  {
    id: 2,
    title: "Exchange relations",
    text: "get better terms when listing your token",
  },
  {
    id: 3,
    title: "Access to professional investors",
    text: "we'll put you in touch with funds and business angels ready to invest larger sums",
  },
  {
    id: 4,
    title: "Staking",
    text: "allow users to stake your tokens on DeFiPie and earn rewards",
  },
  {
    id: 5,
    title: "Product-market fit analysis",
    text: "",
  },
  {
    id: 6,
    title: "Detailed tokenomics  ",
    text: "",
  },
  {
    id: 7,
    title: "Smart contract audit",
    text: "",
  },
  {
    id: 8,
    title: "Community-building and social media marketing",
    text: "",
  },
  {
    id: 9,
    title: "White Paper, blog, and media content from the best authors",
    text: "",
  },
];

const SectionThree = () => {
  const [textData, setTextData] = useState([]);

  useEffect(() => {
    setTextData(dataText);
  }, []);
  return (
    <section className="relative sm:py-[100px] sm:px-5 md:px-[50px] lg:px-[200px] lg:py-[200px]">
      <div className="z-10 relative h-full">
        <div>
          <p className="text-[#8053FF] sm:text-xs lg:text-lg">— For Projects</p>
          <h1 className="text-[#23155B] sm:text-xl md:text-4xl lg:text-5xl font-bold sm:mt-1">
            Vision is the <span className="text-[#8053FF]">answer</span>
          </h1>
          <p className="sm:text-xs lg:text-lg text-[#23155B] sm:mt-1">
            You have an idea, IncuPie has a plan. We offer everything you need
            <br className="sm:hidden md:block" /> to go from an early-stage idea
            to a successful exchange listing.
          </p>
        </div>

        <div className="sm:mt-5 lg:flex lg:flex-wrap lg:justify-between">
          {textData.map((item) => (
            <div
              key={item.id}
              className="flex shadow-lg border gap-x-3 sm:py-2 sm:pr-20 sm:px-5 sm:mb-5 sm:mt-3 md:mt-0 lg:w-[49%] lg:pr-32 rounded-md"
            >
              <div className="bg-green-400 h-fit p-1 rounded-full">
                <BsIcons.BsCheckLg className="text-white sm:text-xs md:text-base lg:text-lg" />
              </div>
              <div>
                <p className="text-[#23155B] sm:text-sm sm:font-semibold lg:text-base ">
                  {item.title}
                </p>
                <p className="text-[#23155B] sm:text-xs lg:text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={bgMark}
        className="sm:w-2/3 md:w-2/4 lg:w-2/4 absolute top-0 left-0"
        alt=""
      />
    </section>
  );
};

export default SectionThree;
