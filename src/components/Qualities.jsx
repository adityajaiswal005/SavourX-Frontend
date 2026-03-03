import React from 'react';
import data from '../restApi.json';
import { GiCookingPot, GiHotMeal, GiDeliveryDrone } from 'react-icons/gi';

const Qualities = () => {
  return (
    <section id="qualities" className='py-24 md:py-32 px-[5%] bg-dark relative mb-24 md:mb-28'>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_70%)] pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block text-primary font-semibold tracking-[2px] uppercase text-[0.85rem] mb-4">Why Choose Us</span>
          <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] lg:text-[3rem] text-white mb-4">Our Special Qualities</h2>
          <p className="text-white/60 text-[1rem] md:text-[1.1rem] max-w-[600px] mx-auto">
            We strive to deliver an exceptional dining experience through our commitment to quality, 
            innovation, and customer satisfaction.
          </p>
        </div>
        
        {/* Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {
            data.ourQualities.map((element, index) => {
              const icons = [<GiCookingPot />, <GiHotMeal />, <GiDeliveryDrone />];
              return (
                <div 
                  className='bg-white/[0.03] border border-white/[0.05] rounded-[20px] p-6 md:p-10 text-center relative overflow-hidden' 
                  key={element.id} 
                >
                    <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-[1.8rem] md:text-[2rem] text-primary">{icons[index] || <GiCookingPot />}</span>
                    </div>
                    <h3 className="text-white text-[1.2rem] md:text-[1.4rem] mb-3 font-semibold">{element.title}</h3>
                    <p className="text-white/60 leading-[1.7] text-[0.9rem] md:text-[0.95rem]">{element.description}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Qualities;
