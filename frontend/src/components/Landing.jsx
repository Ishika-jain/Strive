import React from "react";
import img from "../assets/19366.jpg"
import GuidetoHack from "./GuidetoHack";
import scroll from "../assets/icons8-double-down.gif"

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className=" flex flex-col justify-center items-center gap-2 h-2/3">
        <h1 className="font-bold text-7xl text-darkestBlue">STRIVE</h1>
        <p className="font-semibold text-xl text-darkestBlue">Your Path to Self-Study Mastery</p>
        <GuidetoHack/>
        
      </div>
      <div className="animate-bounce p-10 text-3xl"><img src={scroll} alt="scroll"/></div>
    </div>
  );
};

export default Landing;
