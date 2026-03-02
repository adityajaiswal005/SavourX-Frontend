import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section id="reservation" className="py-20 md:py-32 px-[5%] bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.02%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        {/* Left Image */}
        <div className="relative order-2 md:order-1">
          <img 
            src="/reservation.png" 
            alt="Reservation" 
            className="w-full rounded-[16px] md:rounded-[20px]" 
          />
          <div className="absolute top-[-15px] left-[-15px] right-[15px] bottom-[15px] border-[3px] border-primary rounded-[16px] md:rounded-[20px] -z-10"></div>
        </div>
        
        {/* Right Form */}
        <div className="bg-white/[0.03] border border-white/[0.1] rounded-[20px] md:rounded-[30px] p-6 md:p-10 order-1 md:order-2">
          <h1 className="font-playfair text-[1.8rem] md:text-[2.5rem] text-white mb-2 text-center md:text-left">Book a Table</h1>
          <p className="text-white/60 mb-6 md:mb-8 text-center md:text-left">Reserve your spot for an unforgettable dining experience</p>
          
          <form onSubmit={handleReservation}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full p-3 md:p-4 bg-white/[0.05] border border-white/[0.1] rounded-[10px] md:rounded-[12px] text-white text-sm md:text-base transition-all duration-300 placeholder-white/40 focus:outline-none focus:border-primary focus:bg-primary/5"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full p-3 md:p-4 bg-white/[0.05] border border-white/[0.1] rounded-[10px] md:rounded-[12px] text-white text-sm md:text-base transition-all duration-300 placeholder-white/40 focus:outline-none focus:border-primary focus:bg-primary/5"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-6">
              <div className="relative">
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full p-3 md:p-4 bg-white/[0.05] border border-white/[0.1] rounded-[10px] md:rounded-[12px] text-white text-sm md:text-base transition-all duration-300 placeholder-white/40 focus:outline-none focus:border-primary focus:bg-primary/5 dark:[color-scheme:dark]"
                />
              </div>
              <div className="relative">
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full p-3 md:p-4 bg-white/[0.05] border border-white/[0.1] rounded-[10px] md:rounded-[12px] text-white text-sm md:text-base transition-all duration-300 placeholder-white/40 focus:outline-none focus:border-primary focus:bg-primary/5 dark:[color-scheme:dark]"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 md:p-4 bg-white/[0.05] border border-white/[0.1] rounded-[10px] md:rounded-[12px] text-white text-sm md:text-base transition-all duration-300 placeholder-white/40 focus:outline-none focus:border-primary focus:bg-primary/5"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-3 md:p-4 bg-white/[0.05] border border-white/[0.1] rounded-[10px] md:rounded-[12px] text-white text-sm md:text-base transition-all duration-300 placeholder-white/40 focus:outline-none focus:border-primary focus:bg-primary/5"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 md:py-5 bg-gradient-to-r from-primary to-accent border-none rounded-[10px] md:rounded-[12px] text-white text-base md:text-[1.1rem] font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 mt-4 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,107,53,0.4)]"
            >
              Reserve Now <HiOutlineArrowNarrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
