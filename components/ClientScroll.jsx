"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

const clients = [
  "/OurClients/client1.png",
  "/OurClients/client2.png",
  "/OurClients/client3.png",
  "/OurClients/client4.png",
  "/OurClients/client5.png",
  "/OurClients/client6.png",
  "/OurClients/client7.png",
  "/OurClients/client8.png",
  "/OurClients/clientl1-03-03-01.png",
  "/OurClients/clientl1-03-03-02-01.png",
];

export default function ClientScroll() {
  return (
    <div className="relative h-[15rem] bg-black overflow-hidden">
      {/* <div className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-black z-10" />
      <div className="absolute w-full h-full bg-gradient-to-r from-black via-transparent to-black z-10" /> */}
     <div className="relative h-full w-full flex flex-col gap-4 overflow-hidden">
  {/* Glow effect container */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 to-black/0 z-10"></div>
  </div>

  {/* Client logos with improved visibility */}
  <div className="flex animate-scroll-reverse gap-8 py-4">
    {[...clients, ...clients].map((client, idx) => (
      <div
        key={idx}
        className="relative h-40 w-60 flex-shrink-0 group rounded-xl overflow-hidden
                   bg-gray-900/50 backdrop-blur-sm border border-gray-800
                   hover:bg-gray-900/70 transition-all duration-300"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 group-hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] group-hover:from-blue-500/10 group-hover:to-transparent transition-opacity duration-500"></div>
        
        {/* Logo with smart contrast adjustment */}
        <div className="relative h-full w-full p-6 flex items-center justify-center">
          <Image
            src={client}
            alt={`Client ${idx + 1}`}
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))',
            }}
          />
        </div>
        
        {/* Subtle reflection effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
    ))}
  </div>

        
      </div>
    </div>
  );
} 