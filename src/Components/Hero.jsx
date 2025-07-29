"use client"
import { useState, useEffect } from "react"
import { Github, Linkedin } from "lucide-react"

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const fullText = "Aspiring web developer passionate about building clean, modern, and user-friendly websites."

  useEffect(() => {
    setIsVisible(true)

    // Start typewriter effect after a delay
    const startDelay = setTimeout(() => {
      let currentIndex = 0

      const typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
        }
      }, 80) // Speed of typing

      return () => clearInterval(typeInterval)
    }, 1500) // 1.5 seconds before starting to type

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearTimeout(startDelay)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div
              className={`relative inline-block transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              {/* Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-100 to-pink-200 animate-spin-slow opacity-75 blur-sm"></div>
              <div className="absolute inset-2 rounded-full bg-white"></div>

              <img
                src="/me.JPG"
                alt="Profile"
                className="relative w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-2xl hover:scale-110 transition-all duration-500 ease-out hover:rotate-6 hover:shadow-3xl"
              />

              {/* Floating cercles */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-300 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
            </div>
          </div>

          {/* Animated Text */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              <span className="inline-block transition-transform duration-300 mr-5">{"Hi, I'm "}</span>
              <span className="text-black inline-block underline underline-offset-8 decoration-blue-400 decoration-4 transition-all duration-300 hover:scale-105">
                Manar Gherib
              </span>
            </h1>
          </div>

          {/* JavaScript Typewriter Effect */}
          <div
            className={`transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex justify-center items-center min-h-[100px] mb-8">
              <p className="text-center text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4">
                <span className="inline-block">
                  {displayedText}
                  <span
                    className={`inline-block w-0.5 h-6 bg-blue-600 ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
                    style={{ animation: "none" }}
                  ></span>
                </span>
              </p>
            </div>
          </div>

          <div
            className={`flex justify-center gap-6 mb-12 mt-12 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-700`}
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/manar-gherib-68161b301/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-[#0a66c2] rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2"
            >
              <Linkedin className="h-6 w-6 text-white group-hover:text-blue-200 transition-colors duration-300" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/manarghr"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-black rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2"
            >
              <Github className="h-6 w-6 text-white group-hover:text-gray-300 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
