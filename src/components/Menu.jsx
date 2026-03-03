import React, { useState, useMemo } from 'react';
import { GiHotSpices, GiCookingPot } from 'react-icons/gi';
import { FaPepperHot, FaFireAlt, FaSnowflake, FaUtensils } from 'react-icons/fa';
import toast from 'react-hot-toast';
import data from '../restApi.json';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCuisine, setActiveCuisine] = useState('All');
  const [activeSpice, setActiveSpice] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(data.dishes.map(dish => dish.category))];
  
  // Get unique cuisines
  const cuisines = ['All', ...new Set(data.dishes.map(dish => dish.cuisine))];
  
  // Spice levels
  const spiceLevels = ['All', 'Mild', 'Medium', 'Spicy', 'Extra Spicy'];

  // Get spice icon and color based on level
  const getSpiceInfo = (level) => {
    switch (level) {
      case 'Mild':
        return { icon: <FaSnowflake />, color: '#4ade80', bg: 'bg-green-500/20' };
      case 'Medium':
        return { icon: <GiHotSpices />, color: '#fbbf24', bg: 'bg-yellow-500/20' };
      case 'Spicy':
        return { icon: <FaFireAlt />, color: '#f97316', bg: 'bg-orange-500/20' };
      case 'Extra Spicy':
        return { icon: <FaPepperHot />, color: '#ef4444', bg: 'bg-red-500/20' };
      default:
        return { icon: <GiCookingPot />, color: '#94a3b8', bg: 'bg-gray-500/20' };
    }
  };

  // Filter dishes
  const filteredDishes = useMemo(() => {
    return data.dishes.filter(dish => {
      const categoryMatch = activeCategory === 'All' || dish.category === activeCategory;
      const cuisineMatch = activeCuisine === 'All' || dish.cuisine === activeCuisine;
      const spiceMatch = activeSpice === 'All' || dish.spiceLevel === activeSpice;
      return categoryMatch && cuisineMatch && spiceMatch;
    });
  }, [activeCategory, activeCuisine, activeSpice]);

  const handleAddToCart = (dish) => {
    toast.success(`${dish.title} added to cart!`, {
      icon: '🍽️',
      style: {
        background: '#1a1a2e',
        color: '#fff',
      },
    });
  };

  return (
    <section id="menu" className='py-24 md:py-32 px-[5%] bg-secondary relative overflow-hidden border-t border-gray-800/30'>
      {/* Background decoration */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle,rgba(255,107,53,0.15),transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[radial-gradient(circle,rgba(233,69,96,0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold tracking-[3px] uppercase text-[0.85rem] mb-4 px-4 py-2 bg-primary/10 rounded-full">Our Menu</span>
          <h2 className="font-playfair text-[2rem] sm:text-[2.5rem] lg:text-[3rem] text-white mb-4">Popular Dishes</h2>
          <p className="text-white/60 text-[1rem] md:text-[1.1rem] max-w-[600px] mx-auto">
            Explore our curated selection of signature dishes, crafted with passion 
            and the finest ingredients by our expert chefs.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-10 space-y-5">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30' 
                    : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/[0.1]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cuisine Filter */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <span className="text-white/50 text-sm uppercase tracking-wider flex items-center gap-2">
              <FaUtensils /> Cuisine:
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {cuisines.map(cuisine => (
                <button
                  key={cuisine}
                  onClick={() => setActiveCuisine(cuisine)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCuisine === cuisine 
                      ? 'bg-primary/20 text-primary border border-primary/50' 
                      : 'text-white/60 hover:text-white bg-white/[0.05] hover:bg-white/[0.1]'
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          {/* Spice Level Filter */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <span className="text-white/50 text-sm uppercase tracking-wider">Spice Level:</span>
            <div className="flex flex-wrap justify-center gap-2">
              {spiceLevels.map(spice => {
                const spiceInfo = getSpiceInfo(spice);
                return (
                  <button
                    key={spice}
                    onClick={() => setActiveSpice(spice)}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                      activeSpice === spice 
                        ? 'text-white shadow-lg' 
                        : 'text-white/60 hover:text-white bg-white/[0.05] hover:bg-white/[0.1]'
                    }`}
                    style={activeSpice === spice ? { backgroundColor: `${spiceInfo.color}30`, borderColor: spiceInfo.color } : {}}
                  >
                    <span style={{ color: activeSpice === spice ? spiceInfo.color : 'inherit' }}>
                      {spiceInfo.icon}
                    </span>
                    {spice}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="text-center mb-8">
          <p className="text-white/50 text-sm">
            Showing {filteredDishes.length} {filteredDishes.length === 1 ? 'dish' : 'dishes'}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
            {activeCuisine !== 'All' && ` with ${activeCuisine} cuisine`}
            {activeSpice !== 'All' && ` with ${activeSpice} spice`}
          </p>
        </div>

        {/* Dishes Grid - Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((element) => {
              const spiceInfo = getSpiceInfo(element.spiceLevel);
              return (
                <div 
                  className="flip-card group"
                  key={element.id}
                >
                  <div className="flip-card-inner">
                    
                    {/* Front Side */}
                    <div className="flip-card-front bg-white/[0.03] border border-white/[0.05] rounded-[20px] overflow-hidden">
                      {/* Image Container */}
                      <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                        <img 
                          src={element.image} 
                          alt={element.title} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent"></div>
                        
                        {/* Category Badge */}
                        <span className="absolute top-3 left-3 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-[0.7rem] font-semibold z-10 uppercase tracking-wide">
                          {element.category}
                        </span>

                        {/* Cuisine Badge */}
                        <span className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full text-[0.65rem] font-medium z-10">
                          {element.cuisine}
                        </span>

                        {/* Price Badge */}
                        <div className="absolute bottom-3 right-3 bg-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
                          <span className="text-white font-bold">${element.price}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-white text-base md:text-[1.1rem] mb-2 font-semibold line-clamp-1">
                          {element.title}
                        </h3>
                        <p className="text-white/50 text-sm line-clamp-2">
                          {element.description}
                        </p>
                      </div>
                    </div>

                    {/* Back Side - Flip Content */}
                    <div className="flip-card-back bg-gradient-to-br from-primary/20 to-accent/20 border border-white/[0.1] rounded-[20px] overflow-hidden flex flex-col justify-center items-center p-6">
                      <h3 className="text-white text-xl font-semibold mb-3 text-center">{element.title}</h3>
                      <p className="text-white/70 text-sm mb-4 text-center leading-relaxed">
                        {element.description}
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        <span style={{ color: spiceInfo.color }}>{spiceInfo.icon}</span>
                        <span className="text-white/80 text-sm">{element.spiceLevel} Spice</span>
                      </div>
                      <button 
                        onClick={() => handleAddToCart(element)}
                        className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full text-sm cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-white/30 text-5xl mb-4">🍽️</div>
              <h3 className="text-white text-xl font-semibold mb-2">No dishes found</h3>
              <p className="text-white/50">Try adjusting your filters to find what you're looking for.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setActiveCuisine('All'); setActiveSpice('All'); }}
                className="mt-6 px-6 py-3 bg-primary/20 text-primary rounded-full font-medium hover:bg-primary/30 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
