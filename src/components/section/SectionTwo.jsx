import React, { useEffect, useState } from "react";

const dataText = [
  {
    id: 1,
    text: "Without a big budget, it's hard to approach venture investors",
  },
  {
    id: 2,
    text: "VCs don't care about your DeFi idea – only their gains",
  },
  {
    id: 3,
    text: "They force you into selling your tokens at a huge discount…",
  },
  {
    id: 4,
    text: "...Then dump them at the first opportunity",
  },
  {
    id: 5,
    text: "Result: your token collapses. Everyone goes home.",
  },
];
const SectionTwo = () => {
  const [textData, setTextData] = useState([]);

  useEffect(() => {
    setTextData(dataText);
  }, []);
  return (
    <section className="sm:py-[100px] sm:px-5 md:px-[50px] lg:px-[200px] lg:py-[200px]">
      <div className="md:flex md:justify-between">
        <div className="text-[#23155B] font-bold sm:text-center sm:text-xl md:text-start md:text-4xl md:w-full lg:text-5xl">
          <h1>Traditional Fundraising</h1>
          <h1 className="text-[#8053FF]">Doesn't Work</h1>
          <h1>in DeFi</h1>
        </div>

        <div className="md:w-full">
          {textData.map((item) => (
            <div
              key={item.id}
              className="flex gap-x-3 shadow-md sm:h-[50px] sm:py-2 sm:pr-20 sm:px-5 sm:mb-3 sm:mt-3 md:mt-0 lg:pr-32 lg:h-[70px] rounded-md"
            >
              <p className="text-[#8053FF] sm:text-sm font-bold">0{item.id}</p>
              <p className="text-[#23155B] sm:text-xs sm:font-bold lg:text-sm lg:font-semibold">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
