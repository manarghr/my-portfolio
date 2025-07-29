"use client"

import { useState, useEffect } from "react"
import { Heart, ArrowUp, Code, Coffee } from "lucide-react"

function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    const element = document.querySelector("footer")
    if (element) observer.observe(element)

    window.addEventListener("scroll", handleScroll)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-black border-gray-600 overflow-hidden">

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`py-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Made with Love */}
            <div className="flex items-center text-white text-sm">
              <span>© 2025 Made by Manar with</span>
              <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <Coffee className="h-4 w-4 mx-2 text-yellow-700 animate-bounce" />
            </div>

            {/* Built with */}
            <div className="flex items-center space-x-2 text-sm text-white">
              <Code className="h-4 w-4 text-purple-500" />
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

    
    </footer>
  )
}

export default Footer
