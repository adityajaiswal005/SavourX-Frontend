import React from 'react';
import { Link } from 'react-scroll';
import { GiCookingPot, GiKnifeFork } from 'react-icons/gi';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="heroSection" className='min-h-screen bg-dark relative overflow-hidden flex items-center'>
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
            <div className="absolute rounded-full animate-[float_6s_ease-in-out_infinite] w-[500px] h-[500px] bg-primary/10 -top-[150px] -right-[150px] blur-[100px]"></div>
            <div className="absolute rounded-full animate-[float_6s_ease-in-out_infinite] w-[400px] h-[400px] bg-accent/10 -bottom-[100px] -left-[100px] blur-[80px]" style={{animationDelay: '-2s'}}></div>
            <div className="absolute rounded-full w-[200px] h-[200px] bg-primary/5 top-1/3 left-1/4 blur-[60px] animate-pulse"></div>
        </div>
        
        
        <div className="max-w-[1400px] mx-auto px-[5%] w-full relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                        <FaStar className="text-primary text-xs" />
                        <span className="text-primary text-sm font-medium">Rated 4.9 by 500+ Customers</span>
                    </div>
                    
                    <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                        Taste the
                        <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                            Extraordinary
                        </span>
                    </h1>
                    <p className="text-white/70 text-lg leading-[1.8] mb-8 max-w-[600px] mx-auto lg:mx-0">
                        Experience culinary excellence crafted by world-class chefs. 
                        Every dish tells a story of passion, tradition, and innovation.
                    </p>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                        <Link 
                            to="reservation" 
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            className="group px-8 py-4 bg-gradient-to-accent text-white-r from-primary to font-semibold rounded-full cursor-pointer transition-all duration-300 inline-flex items-center gap-2 no-underline hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,107,53,0.4)]"
                        >
                            <GiCookingPot className="text-xl group-hover:animate-bounce" />
                            Reserve a Table
                            <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                        <Link 
                            to="menu" 
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            className="group px-8 py-4 bg-white/5 border-2 border-white/20 text-white font-semibold rounded-full cursor-pointer transition-all duration-300 inline-flex items-center gap-2 no-underline hover:border-primary hover:text-primary hover:bg-white/10"
                        >
                            <GiKnifeFork className="text-xl" />
                            Explore Menu
                        </Link>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-white/10">
                        <div className="text-center lg:text-left">
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <h3 className="text-3xl lg:text-4xl text-primary font-bold">15+</h3>
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-white/50 text-sm">Years Experience</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <h3 className="text-3xl lg:text-4xl text-primary font-bold">50+</h3>
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                            </div>
                            <p className="text-white/50 text-sm">Expert Chefs</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <h3 className="text-3xl lg:text-4xl text-primary font-bold">100+</h3>
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-white/50 text-sm">Dish Varieties</p>
                        </div>
                    </div>
                </div>
                
                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[500px]">
                        {/* Decorative rings */}
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-[40px] -rotate-6 scale-105"></div>
                        <div className="absolute inset-0 border border-accent/20 rounded-[40px] rotate-6 scale-110"></div>
                        
                        {/* Main image */}
                        <div className="relative rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] group">
                            <img 
                                src="/hero1.png" 
                                alt="Delicious food" 
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Floating badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-semibold">Today's Special</p>
                                        <p className="text-white/60 text-sm">Grilled Salmon with herbs</p>
                                    </div>
                                    <div className="bg-primary text-white px-4 py-2 rounded-full font-bold">
                                        $24
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating review card */}
                        <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-dark/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-xl animate-[float_5s_ease-in-out_infinite]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">4.9</span>
                                </div>
                                <div>
                                    <div className="flex text-primary text-sm">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    </div>
                                    <p className="text-white/70 text-sm">500+ Reviews</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating delivery badge */}
                        <div className="absolute -top-4 -right-4 lg:-right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 animate-[float_6s_ease-in-out_infinite]" style={{animationDelay: '-2s'}}>
                            <div className="text-center">
                                <span className="text-2xl">🚚</span>
                                <p className="text-white text-xs font-medium">Fast Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
