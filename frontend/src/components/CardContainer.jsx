import React from "react";

const CardContainer = ({ key, name, link, desc }) => {
  return (
    <div key={key} className="p-4 flex flex-col">
      <div className="bg-lightestBlue rounded-lg w-64 h-48 p-2 m-2 flex flex-col justify-around">
        <div className="font-bold text-darkestBlue text-center pt-4 m-2 bg-white rounded-lg">{name}</div>
        <div className="font-md text-zinc-400 text-center">{desc}</div>
        <button>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-bold animate-pulse  hover:animate-none hover:text-xl "
          >
            GitHub
          </a>
        </button>
      </div>
    </div>
  );
};

export default CardContainer;
