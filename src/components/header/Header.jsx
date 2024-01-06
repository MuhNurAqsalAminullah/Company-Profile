import React, { useState } from "react";
import * as GiIcons from "react-icons/gi";

// Import Image
import logoImage from "../../assets/image/logo.png";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const [fixScroll, setFixScroll] = useState(false);

  const burgerToggle = () => {
    setBurger(!burger);
  };

  const fixedScroll = () => {
    if (window.scrollY >= 20) {
      setFixScroll(true);
    } else {
      setFixScroll(false);
    }
  };

  window.addEventListener("scroll", fixedScroll);
  return (
    <header
      className={
        fixScroll
          ? "fixed z-30 w-full bg-white drop-shadow-md md:h-fit"
          : "fixed z-30 w-full sm:bg-white md:h-fit md:bg-transparent"
      }
    >
      <div className="sm:flex sm:items-center sm:justify-between sm:px-5 sm:py-4 sm:text-white md:px-[50px] lg:px-[100px]">
        <div className="flex items-center gap-x-2 leading-3 sm:z-20">
          <img src={logoImage} className="w-10" />
          <p className="text-lg font-bold capitalize text-[#23155B]">
            vision capital
          </p>
        </div>

        <ul
          className={
            burger
              ? "drop-shadow-md sm:absolute sm:right-0 sm:top-0 sm:mt-[75px] sm:flex sm:w-full sm:flex-col sm:items-center sm:justify-evenly sm:gap-y-3 sm:bg-white sm:py-2 sm:duration-300 sm:ease-in"
              : "sm:absolute sm:right-0 sm:top-0 sm:hidden sm:w-full sm:flex-col sm:items-center sm:justify-evenly sm:bg-white sm:duration-300 sm:ease-in md:relative md:flex md:h-fit md:w-fit md:translate-y-0 md:flex-row md:gap-10 md:bg-transparent"
          }
        >
          <li
            className={
              fixScroll
                ? "cursor-pointer sm:py-2 sm:text-sm sm:text-[#23155B] md:border-0 md:py-0 md:text-base"
                : "cursor-pointer text-white sm:py-2 sm:text-sm sm:text-[#23155B] md:border-0 md:py-0 md:text-base md:text-white"
            }
          >
            For Projects
          </li>
          <li
            className={
              fixScroll
                ? "cursor-pointer sm:py-2 sm:text-sm sm:text-[#23155B] md:border-0 md:py-0 md:text-base"
                : "cursor-pointer sm:py-2 sm:text-sm sm:text-[#23155B] md:border-0 md:py-0 md:text-base md:text-white"
            }
          >
            For Investors
          </li>
          <li className="text-[#23155B] sm:py-2 sm:text-sm md:border-0 md:py-0 md:text-base">
            <button className="cursor-pointer rounded bg-[#9E7CFF] px-3 py-1 text-white">
              Join Now
            </button>
          </li>
        </ul>

        <GiIcons.GiHamburgerMenu
          color="#23155B"
          onClick={burgerToggle}
          className="z-20 md:hidden"
        />
      </div>
    </header>
  );
};

export default Header;
// <header className="border border-red-500 fixed w-full">
//   <div className="border border-blue-500 flex sm:items-center sm:justify-between lg:px-[120px] lg:py-5">
//     <div className="flex items-center gap-x-2">
//       <img src={logoImage} className="w-10" />
//       <p className="text-lg font-bold capitalize text-[#23155B]">
//         vision capital
//       </p>
//     </div>
//     <div className="md:hidden">
//       <GiIcons.GiHamburgerMenu />
//     </div>

//     <ul className="sm:fixed sm:w-full md:w-fit md:static bg-blue-500 flex sm:flex-col items-center sm:translate-y-[100px] sm:gap-y-5 md:gap-x-5 text-base">
//       <li className="cursor-pointer sm:py-1 sm:px-3">For Projects</li>
//       <li className="cursor-pointer sm:py-1 sm:px-3">For Investors</li>
//       <li>
//         <button className="bg-[#9E7CFF] py-1 px-3 rounded text-white">
//           Join Now
//         </button>
//       </li>
//     </ul>
//   </div>
// </header>
