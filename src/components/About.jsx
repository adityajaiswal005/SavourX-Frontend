import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { GiCook, GiCookingPot, GiHotMeal } from "react-icons/gi";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-28 px-[5%] bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Image */}
          <div className="relative rounded-[20px] overflow-hidden group">
            <img 
              src="/about.png" 
              alt="About YumSphere" 
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
            <div className="absolute bottom-[20px] left-[20px] bg-gradient-to-r from-primary to-accent p-4 md:p-6 rounded-[15px] text-center z-10">
              <h4 className="text-[2rem] md:text-[2.5rem] text-white font-bold">15+</h4>
              <p className="text-white/90 text-[0.75rem] md:text-[0.85rem]">Years of Excellence</p>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="text-center md:text-left">
            <span className="inline-block text-primary font-semibold tracking-[2px] uppercase text-[0.85rem] mb-4">About Us</span>
            <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] lg:text-[3rem] text-white mb-6 leading-[1.2]">
              The Art of <span className="text-primary">Fine Dining</span>
            </h2>
            <p className="text-white/70 text-[1rem] md:text-[1.1rem] leading-[1.8] mb-6">
              At YumSphere, we believe that dining is not just about food—it's an experience that engages all your senses. 
              Our journey began with a simple vision: to create a place where exceptional cuisine meets warm hospitality.
            </p>
            <p className="text-white/70 text-[1rem] md:text-[1.1rem] leading-[1.8] mb-8">
              Every dish that leaves our kitchen is a testament to our commitment to quality, 
              using only the finest locally-sourced ingredients prepared with time-honored techniques 
              and innovative presentation.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
              <div className="flex items-center gap-3 text-white p-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary/10 rounded-[10px] flex items-center justify-center text-primary text-[1.2rem] flex-shrink-0">
                  <GiCook />
                </div>
                <p className="font-medium text-sm md:text-base">Expert Chefs</p>
              </div>
              <div className="flex items-center gap-3 text-white p-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary/10 rounded-[10px] flex items-center justify-center text-primary text-[1.2rem] flex-shrink-0">
                  <GiCookingPot />
                </div>
                <p className="font-medium text-sm md:text-base">Fine Ambiance</p>
              </div>
              <div className="flex items-center gap-3 text-white p-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary/10 rounded-[10px] flex items-center justify-center text-primary text-[1.2rem] flex-shrink-0">
                  <GiHotMeal />
                </div>
                <p className="font-medium text-sm md:text-base">Quality Service</p>
              </div>
              <div className="flex items-center gap-3 text-white p-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary/10 rounded-[10px] flex items-center justify-center text-primary text-[1.2rem] flex-shrink-0">
                  <GiCook />
                </div>
                <p className="font-medium text-sm md:text-base">Fresh Ingredients</p>
              </div>
            </div>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary no-underline font-semibold text-base transition-all duration-300 hover:gap-4"
            >
              Explore Our Story <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
