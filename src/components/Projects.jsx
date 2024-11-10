// Projects.jsx
import React from "react";
import Footer from './Footer';
import { project } from '../constants'; // Import project data from constants
import { Link } from "react-router-dom";

const ProjectCard = ({ id,image, title, description, git, technologies }) => {

    return (
      <div className="relative w-[400px] h-[395px]  bg-gray-900 border border-gray-700 rounded-lg shadow overflow-hidden group transition-transform transform hover:scale-105 duration-300">
        {/* Static content: Image and Centered Title */}
        <div className="flex flex-col h-full">
          <a href="#">
            <img
              className="w-full h-[300px] object-cover"
              src={image}
              alt={title}
            />
          </a>
          <div className="p-4 text-center">
            {" "}
            {/* Centered the title here */}
            <a href="#">
              <h5 className="text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                {title}
              </h5>
            </a>
          </div>
        </div>

        {/* Hover overlay content: Description, Tags, GitHub Link */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90 p-6 flex flex-col justify-start items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 overflow-y-auto custom-scrollbar mb-2">
          <div className="max-h-[70%] w-full mb-4">
            <p className="text-base text-gray-300 text-center mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {technologies.map((tag, index) => (
                <span key={index} className="text-[14px] text-blue-400">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex justify-center w-full mb-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={`/project/${id}`}
                className="text-red-300 border border-gray-300 rounded-lg shadow p-2 hover:text-green-500 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 ml-1 mr-1 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
