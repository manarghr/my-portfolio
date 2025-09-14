"use client"

import { ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Elevate Designathon ",
      description:
        "Developed Elevate Designathon website for NCS Club with a team, ensuring responsive design, performance optimization, and seamless user experience.",
      image: "/Elevate.jpg",
      technologies: ["React", "Node.js", "Three.js", "MongoDB"],
      demo: "https://elevate2025.ncs-club.com/",
    },
    {
      title: "NcsHack Hackathon",
      description:
        "Collaborated on developing the official NCSHack website, focusing on responsive layouts, clean UI, and an optimized user experience.",
      image: "/Ncshack.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      demo: "https://ncshack2025.ncs-club.com/",
    },
  
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <span className="text-black underline underline-offset-8 ">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Container with Layout Animation */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 transform-gpu">
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2  transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-black rounded-full border border-purple-200 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300 transform group-hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
  <div className="mt-2 ml-2 mb-2">
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 font-semibold hover:underline transition-colors duration-200"
    >
      View Project
      <span className="ml-2">
        <ExternalLink className="h-4 w-4" />
      </span>
    </a>
  </div>
                
                
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default Projects
