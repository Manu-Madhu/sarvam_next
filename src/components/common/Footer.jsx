import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a162e] text-white text-sm pt-12">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 px-6 md:px-16 lg:px-24">
        {/* Left Column */}
        <div className="md:w-1/3 space-y-6">
          <img
            src="/assets/sarvam_logo_inverted.png"
            alt="Sarvam Logo"
            className="h-20"
          />
          <h2 className="text-xl font-semibold">Get In Touch</h2>

          <div className="flex items-start gap-6 text-[#7E879C] ">
            <FaMapMarkerAlt size={20} className="text-primary mt-1" />
            <p>
              # A6/L11, SIDCO INDUSTRIAL ESTATE, VILLIVAKKAM, CHENNAI – 600049,
              TAMILNADU
            </p>
          </div>

          <div className="flex items-start gap-6 text-[#7E879C]">
            <FaEnvelope size={20} className="text-primary mt-1" />
            <p>
              onlinesales@sarvamsafety.com |
              Hrd@sarvamsafety.com
            </p>
          </div>

          <div className="flex items-start gap-6 text-[#7E879C]">
            <FaPhoneAlt size={20} className="text-primary mt-1" />
            <p>
              Customer Care: 044 4555 3337/2227 | +91 98402 23242 | Enquiry: <br />
               +91 98408 72666 | HR: +91 95001 73254  <br />
              
            </p>
          </div>

          <div className="flex items-start gap-6 text-[#7E879C]">
            <FaClock size={20} className="text-primary mt-1" />
            <p>Monday to Saturday 9:15 AM – 6:30 PM</p>
          </div>
        </div>

        {/* Middle Column - Nav Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-[#7E879C] text-[14px] mt-8">
          {[
            [
              "Home",
              "Shop Now",
              "Order Tracker",
              "Gallery",
              "FAQ's",
              "Payment Methods",
            ],
            [
              "About Us",
              "Blog",
              "My Orders",
              "Catalogue",
              "Webinar",
              "Terms And Conditions",
            ],
            ["Elite Products", "Contact Us", "Training", "Career", "My Cart"],
          ].map((col, idx) => (
            <ul key={idx} className="space-y-6">
              {col.map((link, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#7E879C]">&rsaquo;</span>
                  <span className="font-semibold">{link}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 pt-6 border-t border-gray-700"></div>
      <div className="flex flex-col md:flex-row items-center justify-between text-center text-gray-400 px-6 md:px-16 lg:px-24 pb-4">
        <p>
          Copyright © 2024{" "}
          <span className="font-bold text-white">SARVAM SAFETY</span>, All
          Rights Reserved
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <FaLinkedinIn className="text-white text-xl hover:text-green-400 cursor-pointer" />
          <FaFacebookF className="text-white text-xl hover:text-green-400 cursor-pointer" />
          <FaInstagram className="text-white text-xl hover:text-green-400 cursor-pointer" />
          <FaYoutube className="text-white text-xl hover:text-green-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
