import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const projects = [
    {
      title: "Weather App",
      description: "A weather application that shows current weather data for any location.",
      image: "/images/about.jpg",
      link: "https://github.com/ata-shahid?tab=repositories",
      technologies: ["React", "API", "Next.js","Tailwind CSS"],
    },
    {
      title: "Design Thinking Project",
      description: "A project based on the principles of design thinking.",
      image: "/images/about.jpg",
      link: "https://github.com/ata-shahid?tab=repositories",
      technologies: ["Figma","Microsoft Office"],
    },
    // Add more projects here
  ];

  return (
    <div className='bg-[#192330] pt-12 md:pt-[6rem] pb-16'>
      <h1 className='heading'>Proj<span className='text-yellow-400'>ects</span></h1>
      <div className='w-[80%] pt-8 mx-auto mt-10 min-h-[80vh]'>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className='px-4'>
              <div className='relative w-full h-[300px] md:h-[400px]'>
                <Image src={project.image} alt={project.title} layout="fill" className="object-contain rounded-lg"/>
              </div>
              <h2 className='text-2xl font-bold text-white mt-4'>{project.title}</h2>
              <p className='text-lg text-slate-300 mt-2'>{project.description}</p>
              <div className='mt-2 flex flex-wrap'>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className='bg-[#0BC5EA] text-black text-sm font-semibold px-2 py-1 rounded mr-2 mt-2'>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className='inline-block mt-4 text-yellow-400 hover:text-yellow-500'>
                View Project
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
