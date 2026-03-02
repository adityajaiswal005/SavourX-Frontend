import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <section className="min-h-screen bg-dark flex items-center justify-center p-8">
      <div className="max-w-[500px] text-center bg-white/[0.03] border border-white/[0.1] rounded-[30px] p-16">
        <div className="w-[100px] h-[100px] bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8 text-white text-[3rem]">✓</div>
        <h1 className="font-playfair text-[2.5rem] text-white mb-4">Reservation Confirmed!</h1>
        <p className="text-white/60 mb-8">Your table has been successfully reserved. We look forward to seeing you!</p>
        <Link to={"/"} className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-white no-underline font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,107,53,0.4)]">
          Back to Home <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Success;
