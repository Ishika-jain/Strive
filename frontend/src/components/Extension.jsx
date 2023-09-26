import React from "react";

const Extension = () => {
  return (
    <div className="bg-bg h-fit p-4 flex flex-col justify-center items-center">
      <p className="text-2xl font-bold text-blue-900 mt-8">
        Use Our Focus Extension NOW !
      </p>
      <div className="flex m-2 p-4 gap-4">
        <button className="bg-lightestBlue text-darkestBlue hover:bg-darkestBlue hover:text-lightestBlue font-bold py-2 px-4 rounded">
          <a
            href="https://drive.google.com/drive/folders/16rHYv6AokZN6WSofd0QdeDJvtIE8SkEx?usp=sharing
"
          >
            Download Extension
          </a>
        </button>
        <button className="bg-lightestBlue text-darkestBlue hover:bg-darkestBlue hover:text-lightestBlue font-bold py-2 px-4 rounded">
          <a href="https://www.youtube.com/watch?v=hIRX1dpfqHc">
            Watch Tutorial
          </a>
        </button>
        <button className="bg-lightestBlue text-darkestBlue hover:bg-darkestBlue hover:text-lightestBlue font-bold py-2 px-4 rounded">
          <a href="chrome://extensions/">
            Chrome Extension Page
          </a>
        </button>
      </div>
    </div>
  );
};

export default Extension;
