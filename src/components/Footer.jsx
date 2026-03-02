import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark px-[5%] py-20 border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="font-playfair text-[2rem] text-white mb-4">Yum<span className="text-primary">Sphere</span></div>
            <p className="text-white/60 leading-[1.8] mb-6">
              Experience the art of fine dining at YumSphere. 
              We serve delicious meals crafted with passion and the finest ingredients.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-white/[0.05] rounded-[12px] flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:-translate-y-1">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-white/[0.05] rounded-[12px] flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:-translate-y-1">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-white/[0.05] rounded-[12px] flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:-translate-y-1">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-white/[0.05] rounded-[12px] flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:-translate-y-1">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-white/[0.05] rounded-[12px] flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:-translate-y-1">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-white text-[1.2rem] mb-6 font-semibold">Quick Links</h4>
            <ul className="list-none p-0">
              <li className="mb-3"><a href="#home" className="text-white/60 no-underline transition-colors duration-300 hover:text-primary">Home</a></li>
              <li className="mb-3"><a href="#about" className="text-white/60 no-underline transition-colors duration-300 hover:text-primary">About Us</a></li>
              <li className="mb-3"><a href="#menu" className="text-white/60 no-underline transition-colors duration-300 hover:text-primary">Menu</a></li>
              <li className="mb-3"><a href="#reservation" className="text-white/60 no-underline transition-colors duration-300 hover:text-primary">Reservation</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-white text-[1.2rem] mb-6 font-semibold">Contact</h4>
            <ul className="list-none p-0">
              <li className="mb-3 text-white/80">anshujaiswal12300@gmail.com</li>
              <li className="mb-3 text-white/80">(+91)9648527769</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center text-white/50 text-[0.9rem] gap-4">
          <p>&copy; {new Date().getFullYear()} YumSphere. All Rights Reserved.</p>
          <p>Designed with ❤️ by <a href="#" className="text-primary no-underline">YumSphere Team</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
