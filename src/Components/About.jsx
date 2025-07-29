"use client"

import { useState, useEffect } from "react"

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [skillsAnimated, setSkillsAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setSkillsAnimated(true), 500)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skills = [
    "JavaScript",
    "React",
    "Next",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "HTML/CSS",
    "Python",
    
  ]

  const skillLevels = [
    { name: "Frontend Development", level: 80 },
    { name: "Backend Development", level: 30 },
    { name: "UI/UX Design", level: 40 },
  ]

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <span className="text-black underline underline-offset-8">About Me</span>
          </h2>
        
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Journey */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-300 hover:shadow-xl transition-shadow duration-300">
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a third-year Computer Science student and a co-manager of the development department at my university's tech club NCS. I lead and contribute to team projects while strengthening my skills through both academic and hands-on experiences.
                  <br /><br />
                  I began coding in early 2024 with HTML and CSS, and quickly expanded into JavaScript and Frameworks. I'm passionate about both web and mobile app development, and I’ve actively participated in hackathons and ideathons, where I enjoy solving real-world challenges and building user-centered products.
              </p>

              {/* Skill Progress Bars */}
              <div className="space-y-6">
                {skillLevels.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-white to-blue-300 h-full rounded-full transition-all duration-1500 ease-out"
                        style={{
                          width: skillsAnimated ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 200}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div
            className={`transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-300 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r from-blue-200 to-purple-50 text-blue-800 text-sm font-medium rounded-full border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-default ${
                      skillsAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
