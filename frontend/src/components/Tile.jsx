import React from "react";

const Tile = ({ name, link, status, date }) => {
  return (
    <div className="p-8 bg-lightestBlue rounded-md m-4 w-80">
      <div className="flex flex-col justify-center h-fit ">
        <div className="text-2xl font-bold overflow-hidden">{name}</div>
        <div className="text- font-">{date}</div>

        <div className=" flex justify-between">
          <div className="w-1/2 flex justify-center items-start flex-col">
            <div className=" flex text-lg font-semibold">
              {status.substring(0, 6) === "Online"
                ? "Online"
                : status.substring(0, 7)}
            </div>
            <div className="flex font-bold text-green-700 text-2xl animate-pulse">
              {status.includes("Live") ? "Live" : ""}
            </div>
          </div>
          <a href={link}>
            <div className=" bg-darkestBlue p-4 w-fit rounded-md text-center transition-transform transform hover:scale-105 hover:bg-blue-700 hover:text-white">
              Apply now
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tile;
