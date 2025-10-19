import React from "react";
import { Mail, MessageCircle, Linkedin, Instagram, Globe } from "lucide-react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" mt-10 min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white w-full max-w-lg sm:max-w-xl md:max-w-2xl p-8 sm:p-10 rounded-2xl shadow-xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-4">
            Contact Me
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            I’d love to connect! You can reach me through any of the platforms below.
          </p>

          <div className="flex flex-col items-center space-y-6">
            {/* Email */}
            <a
              href="mailto:rizwanjanbaloch7@gmail.com"
              className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-emerald-600" />
              <span className="text-lg sm:text-xl font-medium">
                rizwanjanbaloch7@gmail.com
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923127130457?text=Hello%20Rizwan%2C%20I%20would%20like%20to%20connect%20regarding%20GapoTaraan."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 text-emerald-600" />
              <span className="text-lg sm:text-xl font-medium">
                WhatsApp: +92 312 7130457
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/therizwanbaloch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-emerald-600" />
              <span className="text-lg sm:text-xl font-medium">
                LinkedIn: TheRizwanBaloch
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/website_developer.pkk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-emerald-600" />
              <span className="text-lg sm:text-xl font-medium">
                Instagram: website_developer.pkk
              </span>
            </a>

            {/* Portfolio */}
            <a
              href="https://rizwanbalochportfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-all duration-300"
            >
              <Globe className="w-6 h-6 text-emerald-600" />
              <span className="text-lg sm:text-xl font-medium">
                Portfolio: rizwanbalochportfolio.netlify.app
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
