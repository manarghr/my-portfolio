"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      // Updated URL to connect to your Express.js backend NOW RENDER
      const response = await fetch("https://portfolio-backend-1-yw88.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus(result.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("Failed to send message. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black underline underline-offset-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm open to discussing new opportunities, interesting projects, or just having a chat about technology.
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="group p-4 rounded-xl border-2 bg-purple-50 border-purple-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <a href="mailto:gheribmanar2@gmail.com" className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <Mail className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        gheribmanar2@gmail.com
                      </p>
                    </div>
                  </a>
                </div>

                {/* Location */}
                <div className="group p-4 rounded-xl border-2 bg-blue-50 border-blue-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Algiers, Algeria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/manarghr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-black rounded-full shadow-lg"
                >
                  <Github className="h-6 w-6 text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/manar-gherib-68161b301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-[#0a66c2] rounded-full shadow-lg"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-white to-blue-200 p-6">
                <h3 className="text-xl font-semibold text-black flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Send me a message
                </h3>
                <p className="text-black mt-1">I'll get back to you within 24 hours</p>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 rounded-lg bg-white transition-all duration-300 focus:outline-none focus:border-blue-300 focus:shadow-lg focus:scale-105 border-gray-200 hover:border-gray-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 rounded-lg bg-white transition-all duration-300 focus:outline-none focus:border-blue-300 focus:shadow-lg focus:scale-105 border-gray-200 hover:border-gray-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-lg bg-white transition-all duration-300 focus:outline-none focus:border-blue-300 focus:shadow-lg focus:scale-105 border-gray-200 hover:border-gray-300"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-lg bg-white resize-none transition-all duration-300 focus:outline-none focus:border-blue-300 focus:shadow-lg focus:scale-105 border-gray-200 hover:border-gray-300"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative w-full bg-gradient-to-r from-blue-300 to-white text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300 ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:from-purple-100 hover:to-blue-200"
                    }`}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                    <div className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                          Send Message
                        </>
                      )}
                    </div>
                  </button>

                  {/* Status Message */}
                  {submitStatus && (
                    <div
                      className={`text-center p-3 rounded-lg ${
                        submitStatus.includes("successfully")
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {submitStatus}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
