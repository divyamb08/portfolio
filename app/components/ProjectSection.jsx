import React from 'react'
import ProjectCards from './ProjectCards'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";
const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Portfolio Website",
      image: "/images/Projects/Portfolio.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "HouseParty Application",
      description: "An application to control music for a house party",
      image: "/images/Projects/Houseparty_landing.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Interactive Information Visualization",
      description: "An interactive visualization of Nobel Laureates of the World using D3.js",
      image: "/images/Projects/InteractiveViz.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description: "Content based end to end recommendation system using TMDB APIs",
      image: "/images/Projects/MRS.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    
  ];

  const ProjectsSection = () => {
    return (
      <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div>
        {projectsData.map((project) => (<ProjectCards key={project.id} title={project.title} description={project.description} imgUrl={project.image} />))}
      </div>
      </>
    );
  };
  
  export default ProjectsSection;
