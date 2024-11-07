import React from "react";
import Footer from './Footer';
import { project } from '../constants';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="relative max-w-sm sm:max-w-sm md:max-w-md bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden group transition-transform transform hover:scale-105 duration-300">
            
            {/* Image */}
            <a href="#">
                <img className="w-[430px] h-[350px] object-cover transition-opacity duration-300 group-hover:opacity-80" src={image} alt={title} />
            </a>

            {/* Title - always visible below the image */}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
            </div>

            {/* Hidden content that appears on hover, with a scrollable area */}
            <div className="absolute inset-0 bg-gray-900 p-6 flex flex-col justify-center items-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:overflow-y-auto group-hover:max-h-[500px] custom-scrollbar">
                <p className="text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400 text-center">
                    {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="mt-4 text-red-300 border border-gray-200 rounded-lg shadow p-2 hover:text-green-500 duration-300 transition-colors">
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
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
