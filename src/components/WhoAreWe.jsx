import React from 'react';
import data from '../restApi.json';

const WhoAreWe = () => {
  return (
    <section id="who_are_we" className='py-20 md:py-32 px-[5%] bg-dark relative'>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(233,69,96,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12 md:gap-16 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full">
          {
            data.who_we_are.map(element => (
              <div className="text-center p-4 md:p-6 bg-white/[0.03] border border-white/[0.05] rounded-[16px] md:rounded-[20px] transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1" key={element.id}>
                <div className="font-playfair text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold text-primary leading-none mb-2">{element.number}</div>
                <div className="text-white/70 text-xs md:text-sm font-medium uppercase tracking-wide">{element.title}</div>
              </div>
            ))
          }
        </div>
        
        {/* Image Section */}
        <div className="relative w-full max-w-[700px] md:max-w-[800px]">
          <img 
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 -z-10' 
            src="/center.svg" 
            alt="gradientBg" 
          />
          <img 
            src="/whoweare.png" 
            alt="Our team at work" 
            className="w-full rounded-[16px] md:rounded-[20px]" 
          />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
