import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icons8-find.gif";

const GuidetoHack = () => {
  return (
    <div className="text h-24 Center flex flex-col bg-bg justify-center items-center">
      <button className="flex w-full bg-white rounded-lg shadow-lg shadow-darkestBlue">
        <Link
          to="/hackathons"
          className="text-2xl p-5 text-darkestBlue px-20 rounded-lg "
        >
          Find Hackathons Near Me
        </Link>
          <img src={icon} alt="search icon" className=" p-4 w-16 h-full flex justify-center items-center " /> 
      </button>
    </div>
  );
};

export default GuidetoHack;
