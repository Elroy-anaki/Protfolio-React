import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProjectPage() {
  const location = useLocation();
  const project = location.state;
  const { projectId } = useParams();

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 h-[90vh] flex justify-between items-center">
      <Link
        to={"/projects"}
        className="absolute top-5 left-32 px-6 py-2  bg-slate-200 rounded-lg hover:bg-slate-500 hover:text-white"
      >
        <p>Back</p>
      </Link>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[350px] rounded-xl mb-4">
              <img
                className="w-full h-full object-cover border-2 border-indigo-500 rounded-xl "
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-full text-center px-2">
                <a
                  href={project.sourceLink}
                  target="blank"
                  className=" bg-gray-900 dark:bg-gray-600 text-2xl text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  View in GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="relative md:flex-1 px-4 flex flex-col justify-start gap-5 text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              {project.title}
            </h2>

            <div className="text-center">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {project.description}
              </p>
            </div>
            <div className="mb-4 absolute bottom-36 left-1/2 transform -translate-x-1/2">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Written By:
              </span>
              <div className="flex justify-center items-center mt-2 text-center ">
                {project.languages.map((lang) => (
                  <p className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    {lang}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
