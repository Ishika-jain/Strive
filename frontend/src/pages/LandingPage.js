import React, { useState } from "react";
import { Landing, Learnings, Projects, HackathonListItem, Portfolios } from "../components";
import Extension from "../components/Extension";

const LandingPage = () => {
  
  const [view, setView] = useState('hackathons');

  return (
    <div className="h-screen">
      <Landing />
      <Extension/>

      <div className="pt-20 flex justify-center gap-24 bg-bg text-xl text-white text-bold">
        <div className="w-fit bg-darkestBlue p-2 rounded-md">
          <button
            className={`p-4 ${
              view === "hackathons"
                ? "text-bold bg-lightestBlue text-darkestBlue rounded-md"
                : ""
            }`}
            onClick={() => setView("hackathons")}
          >
            Hackathons
          </button>
          <button
            className={`p-4 ${
              view === "learnings"
                ? "text-bold bg-lightestBlue text-darkestBlue rounded-md"
                : ""
            }`}
            onClick={() => setView("learnings")}
          >
            Learnings
          </button>
          <button
            className={`p-4 ${
              view === "projects"
                ? "text-bold bg-lightestBlue text-darkestBlue rounded-md"
                : ""
            }`}
            onClick={() => setView("projects")}
          >
            Projects
          </button>
          <button
            className={`p-4 ${
              view === "portfolio"
                ? "text-bold bg-lightestBlue text-darkestBlue rounded-md"
                : ""
            }`}
            onClick={() => setView("portfolio")}
          >
            Portfolios
          </button>
        </div>
      </div>
      {view === "hackathons" && <HackathonListItem />}
      {view === "learnings" && <Learnings />}
      {view === "projects" && <Projects />}
      {view === 'portfolio' && <Portfolios/>}
    </div>
  );
};

export default LandingPage;
