import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes, FaHome, FaInfoCircle, FaUtensils, FaCalendarAlt, FaChevronDown, FaMoon, FaSun } from 'react-icons/fa';
import data from '../restApi.json';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        // Check localStorage or system preference on mount
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const closeMenu = () => setShow(false);

    const navItems = [
        { id: 1, title: "HOME", link: "heroSection", icon: <FaHome /> },
        { id: 2, title: "ABOUT", link: "about", icon: <FaInfoCircle /> },
        { id: 3, title: "MENU", link: "menu", icon: <FaUtensils />, hasDropdown: true },
        { id: 4, title: "SERVICES", link: "qualities", icon: <FaInfoCircle /> },
        { id: 5, title: "RESERVATION", link: "reservation", icon: <FaCalendarAlt /> },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 px-[5%] py-3 flex justify-between items-center bg-[rgba(15,15,26,0.85)] backdrop-blur-xl border-b border-[rgba(255,107,53,0.1)] transition-all duration-300 ${scrolled ? 'py-2 bg-[rgba(15,15,26,0.98)] shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : ''}`}>
            {/* Logo */}
            <a href="/" className="font-playfair text-xl sm:text-[1.8rem] font-bold text-white no-underline tracking-wide flex items-center gap-2">
                <span className="text-2xl">🍽️</span>
                <span className="hidden sm:inline">Sav<span className="text-primary">ourX</span></span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
                <div className="flex gap-6 list-none">
                    {
                        data.navbarLinks.map(element => (
                            <Link 
                                to={element.link} 
                                key={element.id} 
                                spy={true} 
                                smooth={true} 
                                duration={500}
                                className="text-white/80 no-underline font-medium text-[0.85rem] tracking-wide relative cursor-pointer transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {element.title}
                            </Link>
                        ))
                    }
                    
                    {/* Our Menu Button with Sliding Dropdown */}
                    <div className="relative" ref={menuRef}>
                        <button 
                            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-accent border-none rounded-full text-white font-semibold text-[0.8rem] cursor-pointer transition-all duration-300 uppercase tracking-widest hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,107,53,0.4)]"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FaUtensils />
                            Our Menu
                            <FaChevronDown className={`text-xs transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Sliding Dropdown Menu */}
                        <div className={`absolute top-full left-0 mt-2 w-56 overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                            <div className="bg-[rgba(26,26,46,0.95)] backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                                {data.cuisines.map((cuisine, index) => (
                                    <Link 
                                        key={cuisine.id}
                                        to={cuisine.link}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => { setMenuOpen(false); }}
                                        className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 cursor-pointer group"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">{cuisine.icon}</span>
                                        <span className="font-medium">{cuisine.name}</span>
                                        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">→</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dark Mode Toggle */}
            <button 
                onClick={toggleDarkMode}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 hover:scale-110 group"
                aria-label="Toggle dark mode"
            >
                {darkMode ? (
                    <FaSun className="text-yellow-400 text-lg group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                    <FaMoon className="text-white text-lg group-hover:-rotate-45 transition-transform duration-500" />
                )}
            </button>

            {/* Mobile Menu Button */}
            <div 
                className="lg:hidden text-white text-[1.5rem] cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-primary p-2"
                onClick={() => setShow(!show)}
            >
                {show ? <FaTimes /> : <GiHamburgerMenu />}
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${show ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
                    {navItems.map(item => (
                        <Link 
                            key={item.id}
                            to={item.link} 
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            onClick={closeMenu}
                            className="text-white/80 no-underline font-semibold text-2xl tracking-wide relative cursor-pointer transition-colors duration-300 hover:text-primary flex items-center gap-3"
                        >
                            <span className="text-primary">{item.icon}</span>
                            {item.title}
                            {item.hasDropdown && <FaChevronDown className="text-xs" />}
                        </Link>
                    ))}
                    
                    {/* Mobile Cuisine Dropdown */}
                    <div className="mt-4 w-64">
                        <p className="text-white/50 text-sm text-center mb-4 uppercase tracking-wider">Cuisines</p>
                        <div className="grid grid-cols-2 gap-3">
                            {data.cuisines.map(cuisine => (
                                <Link 
                                    key={cuisine.id}
                                    to={cuisine.link}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-xl text-white font-medium transition-all duration-300"
                                >
                                    <span>{cuisine.icon}</span>
                                    <span>{cuisine.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
