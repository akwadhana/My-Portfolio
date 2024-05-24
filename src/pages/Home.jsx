import React from "react";
import CustomButton from "../Components/Button";
import { Link } from "react-router-dom";
import picture1 from "../assets/images/man.jpg";
import About from "./About";
import Services from "./Services";
import Together from "./Together";
import DownloadLink from "../Components/DownloadLink";

const Home = () => {

  return (
    <div className="bg-black ">
      <div className="flex flex-col lg:flex-row lg:gap-40 items-center lg:items-start">
        <div className="text-center lg:text-left ml-0 lg:ml-16 mt-5">
          <p className="font-bold text-red-600">Hello, My Name Is</p>
          <h1 className="text-4xl mt-2 font-extrabold text-white">
            Taiwo Hassan Raji
          </h1>
          <p className="mt-1 sm:text-center sm:mx-2 lg:text-left text-white">
            A passionate and dedicated web developer,
            <br /> driven by the ever-evolving world of technology and its
            limitless possibilities
          </p>
        </div>
        <div className="mt-5">
          <img
            className="sm:w-[300px]"
            src={picture1}
            alt="Taiwo Hassan Raji"
          />
        </div>
      </div>

      <div className="flex justify-center lg:justify-start mt-5 ">
        <Link to="/contact">
          <CustomButton label="Contact Me" />
        </Link>
      </div>
      <About />
      <Services />
     
      <Together />
    </div>
  );
};

export default Home;
