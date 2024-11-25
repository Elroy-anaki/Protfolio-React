import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../ProjectCard/ProjectCard";

function ProjectsSection() {
  const [allProjects, setAllProjects] = useState([]);
  const url = `http://localhost:3000/projects/get-all-projects`;

  async function getAllProjects(url) {
    try {
      const { data } = await axios.get(url);
      console.log(data.allProjects);
      setAllProjects(data.allProjects);
    } catch (error) {
      console.log(error.response.msg);
    }
  }

  useEffect(() => {
    getAllProjects(url);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900  min-h-[90vh]">
      <h1 className="text-3xl text-center text-white mb-10">Projects</h1>
      <div className="w-5/6 m-auto flex flex-wrap justify-center gap-16 items-center py-5 ">
      {allProjects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
