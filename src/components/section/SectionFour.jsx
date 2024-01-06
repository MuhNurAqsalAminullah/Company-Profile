import React, { useEffect, useState } from "react";
import * as BsIcons from "react-icons/bs";

// Import Image
import bgMark from "../../assets/image/Mask2.png";

const dataText = [
  {
    id: 1,
    title: "Low entry prices on DeFi tokens",
  },
  {
    id: 2,
    title: "Fully decentralized",
  },
  {
    id: 3,
    title: "Only vetted projects that passed our due diligence",
  },
  {
    id: 4,
    title: "New projects every month",
  },
  {
    id: 5,
    title: "High chance of success thanks to our incubation program",
  },
  {
    id: 6,
    title: "Yield farming rewards in PIE (up to 100% a year)",
  },
];

const SectionFour = () => {
  const [textData, setTextData] = useState([]);

  useEffect(() => {
    setTextData(dataText);
  }, []);
  return (
    <section className="bg-[#8053FF] relative sm:py-[100px] sm:px-5 md:px-[50px] lg:px-[200px] lg:py-[200px]">
      <div className="z-10 relative h-full">
        <div>
          <h1 className="text-white sm:text-xl md:text-4xl lg:text-5xl font-bold sm:mt-1">
            Access <span className="text-[#9E7CFF]">high-potential</span> DeFi{" "}
            <br /> startups before everyone else
          </h1>
        </div>

        <div className="sm:mt-5 lg:flex lg:flex-wrap lg:justify-between">
          {textData.map((item) => (
            <div
              key={item.id}
              className="flex items-center shadow-lg bg-white gap-x-3 sm:py-2 sm:px-5 sm:mb-5 sm:mt-3 md:mt-0 lg:w-[49%] rounded-md"
            >
              <div className="bg-green-400 h-fit p-1 rounded-full">
                <BsIcons.BsCheckLg className="text-white sm:text-xs md:text-base lg:text-lg" />
              </div>
              <div>
                <p className="text-[#23155B] sm:text-sm sm:font-semibold lg:text-base ">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={bgMark}
        className="sm:w-2/3 md:w-2/4 lg:w-2/4 absolute top-0 right-0"
        alt=""
      />
    </section>
  );
};

export default SectionFour;
