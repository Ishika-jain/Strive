import React, { useState } from "react";

const BrickTile = ({ name, link, status, desc }) => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="p-8 bg-lightestBlue rounded-md m-4">
      <div className="flex flex-col justify-center ">
        <div className="text-2xl font-bold overflow-hidden">{name}</div>
        <div>{desc}</div>
        <div className="mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a
            href={status}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Deploy
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-blue-500 hover:underline">Likes: {likes}</span>
          <button onClick={handleLikeClick} className="ml-2">
            💖
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrickTile;
