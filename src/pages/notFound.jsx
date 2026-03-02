import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-dark flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,107,53,0.1),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(233,69,96,0.1),transparent_50%)]"></div>
      <div className="max-w-[600px] text-center relative z-10">
        <img src="/notFound.svg" alt="notFound" className="mb-8 mx-auto" />
        <h1 className="font-playfair text-[10rem] text-primary leading-none mb-4 drop-shadow-[0_20px_60px_rgba(255,107,53,0.3)]">404</h1>
        <h2 className="text-[2.5rem] text-white mb-4">LOOKS LIKE YOU'RE LOST</h2>
        <p className="text-white/60 text-[1.2rem] mb-8">We can't seem to find you the page you're looking for</p>
        <Link to={"/"} className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-white no-underline font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,107,53,0.4)]">
          Back to Home <span><HiOutlineArrowNarrowRight /></span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
