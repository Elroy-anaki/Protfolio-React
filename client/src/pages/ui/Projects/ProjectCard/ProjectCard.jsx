import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {

  return (
    <div className="w-80 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`project-page/${project._id}`} state={project}>
        <img
          className="rounded-t-lg w-full"
          src={project.image}
          alt=""
        />
      </Link>
      <div className="p-5">
          <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
        <div className="flex justify-center gap-5 items-center mt-5">
        {project.languages.map((lang) => (
          <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {lang}
          </p>
        ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
