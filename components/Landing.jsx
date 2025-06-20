"use client";

import { useEffect, useRef } from 'react';
import { ContainerScroll } from "../components/ui/container-scroll-animation";

import Script from 'next/script';

export default function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (window.VANTA && window.THREE && vantaRef.current) {
      const effect = window.VANTA.WAVES({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0,
        shininess: 42.00,
        waveHeight: 7.50,
        waveSpeed: 0.85,
        zoom: 1.07
      });

      return () => {
        if (effect) effect.destroy();
      };
    }
  }, []);

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
        strategy="beforeInteractive"
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js" 
        strategy="beforeInteractive"
      />
      
      <div ref={vantaRef} className="h-full w-full px-4 sm:px-8 md:px-16 lg:px-40 ">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider text-center pt-40' style={{
          color: 'transparent',
          WebkitTextStroke: '1px white',
          textShadow: '0 0 20px rgba(255,255,255,0.1)',
          letterSpacing: '0.15em'
        }}>
          Transform. Grow. <br /> Dominate.
        </h1>
        <section >
        <ContainerScroll
          titleComponent={
            <>
             <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white dark:text-white">
  We craft digital experiences that <br />
  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
    Demand Attention
  </span>
</h1>
            </>
          }
        >
          <img
            src='https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500'
            alt="hero"
            height={720}
            width={1400}
            className="w-full max-w-[1400px] mx-auto rounded-2xl object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[720px]"
            draggable={false}
          />
        </ContainerScroll>
      </section>
      </div>
    </>
  );
}