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
    <section id="reservation" className="py-24 md:py-32 px-6 bg-dark dark:bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,53,0.1),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold tracking-[2px] uppercase text-xs mb-3 px-4 py-2 bg-primary/10 rounded-full">Reservations</span>
          <h2 className="font-playfair text-[2rem] md:text-[2.5rem] text-white">Book Your Table</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Reservation Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
            <h3 className="font-playfair text-xl text-dark mb-1">Make a Reservation</h3>
            <p className="text-gray-500 text-sm mb-6">Reserve your spot for dining</p>
            
            <form onSubmit={handleReservation} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all dark:[color-scheme:dark]"
                  />
                </div>
                <div>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all dark:[color-scheme:dark]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-dark text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3.5 bg-gradient-to-r from-primary to-accent border-none rounded-xl text-white font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/40"
              >
                Reserve Now <HiOutlineArrowNarrowRight />
              </button>
            </form>
          </div>
        
          {/* Right Side - Image with Glow Effect */}
          <div className="relative">
            <div 
              className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:scale-105 transition duration-500"
            >
              <img 
                src="/reservation.png" 
                alt="Restaurant Reservation" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
