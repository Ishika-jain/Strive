import React, { useState, useEffect } from "react";
import BrickTile from "./BrickTile"; // Make sure to import your component

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    githublink: "",
    deploylink: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {

    
    try {
      const response = await fetch("http://localhost:5000/projects"); 
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 201) {
        setFormData({
          name: "",
          desc: "",
          githublink: "",
          deploylink: "",
        });
        fetchProjects();
      }
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex h-full p-8 w-full justify-around bg-bg ">
      <div className="flex flex-col w-full h-full flex-wrap bg-bg">
        {projects.map((item) => (
          <BrickTile
            key={item.id}
            name={item.name}
            link={item.githublink}
            status={item.deploylink}
            desc={item.desc}
          />
        ))}
      </div>
        <div>
        <form
        onSubmit={handleSubmit}
        className="h-fit mx-auto p-4 bg-white rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Project Name - Contributor Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
        />
        <input
          type="text"
          name="desc"
          placeholder="Project Description"
          value={formData.desc}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
        />
        <input
          type="text"
          name="githublink"
          placeholder="GitHub Link"
          value={formData.githublink}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
        />
        <input
          type="text"
          name="deploylink"
          placeholder="Deploy Link"
          value={formData.deploylink}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
        />
        <button type="submit">Add Project</button>
      </form>
      <div className="bg-white mt-4 rounded-md shadow-md p-4">
        <p className="text-2xl font-bold text-center text-darkestBlue ">This week's best project  </p>
        <BrickTile name={"Strive"} link={"ss"} status={"ad"} desc={"this is the best projetc ever"}/>
      </div>
        </div>
      
    </div>
  );
};

export default Projects;
