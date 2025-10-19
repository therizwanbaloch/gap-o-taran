import React from "react";
import profilePic from "../assets/profile.jpg";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar  />
      <div className=" mt-10 min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
        <div className="bg-white w-full max-w-6xl rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Image Section */}
          <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md border-4 border-emerald-600">
            <img
              src={profilePic}
              alt="M Rizwan"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-emerald-600 mb-4">
              About Me
            </h1>

            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Hi, I’m{" "}
              <span className="font-semibold text-emerald-600">M Rizwan</span> — 
              a dedicated <span className="font-medium">MERN Stack Developer</span> from Pakistan. 
              I create modern, responsive, and visually appealing web applications using{" "}
              <span className="font-medium">React, Node.js, Express, and MongoDB</span>.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              I’m passionate about solving real-world problems through clean code and smart design. 
              My goal is to build digital experiences that not only work efficiently but also 
              deliver meaningful impact to users worldwide.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Outside of development, I enjoy reading, learning about new technologies, 
              and contributing to open-source projects. 
              I’m constantly exploring ways to improve my craft and make the web a better place.
            </p>

            <a
              href="/contact"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
