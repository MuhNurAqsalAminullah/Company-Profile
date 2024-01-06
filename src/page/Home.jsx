import React from "react";
import Header from "../components/header/Header";
import SectionOne from "../components/section/SectionOne";
import SectionTwo from "../components/section/SectionTwo";
import SectionThree from "../components/section/SectionThree";
import SectionFour from "../components/section/SectionFour";
import SectionFive from "../components/section/SectionFive";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
      {/* <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1> */}
      {/* <button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800 font-bold">
        button
      </button> */}
    </main>
  );
};

export default Home;
