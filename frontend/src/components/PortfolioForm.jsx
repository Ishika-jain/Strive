import React, { useState } from "react";
import axios from "axios";

const PortfolioForm = ({ onUpload }) => {
  const [newPost, setNewPost] = useState({
    name: "",
    description: "",
    githubLink: "",
  });

  const formSubmit = async (e) => {
    e.preventDefault();
     await axios.post("http://localhost:5000/portfolio", newPost);
      onUpload();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="mt-2 h-96 bg-bg flex flex-col items-center justify-center rounded-lg">
      <div className="w-full flex flex-col items-center justify-center p-1">
        <form className="text-primary max-w-md  " onSubmit={formSubmit}>
          <div className="mb-1">
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={newPost.name}
              onChange={handleChange}
              className="w-full h-8 md:h-10 px-2 py-1 mb-2 rounded-md"
            />
          </div>
          <div className="mb-1">
            <textarea
              placeholder="Description and Tech Stack (Up to 100 words) "
              id="description"
              name="description"
              value={newPost.description}
              onChange={handleChange}
              className="w-full h-8 md:h-10 px-2 py-1 mb-2 rounded-md resize-none"
              style={{ height: "10rem" }}
            ></textarea>
          </div>
          <div className="mb-1">
            <input
              placeholder="GitHub Link"
              type="text"
              id="githubLink"
              name="githubLink"
              value={newPost.githubLink}
              onChange={handleChange}
              className="w-full h-8 md:h-10 px-2 py-1 mb-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full px-2 py-1 bg-blue-900 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PortfolioForm;
