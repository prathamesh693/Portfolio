import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profileImg from "../assets/prof.jpg";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-10 md:gap-5`}
      >
        {/* Left Side: Greeting Line & Text */}
        <div className='flex flex-row items-start gap-5 w-full md:w-auto'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Prathamesh</span>
            </h1>
            <p className='text-[#915EFF] font-bold text-[16px] sm:text-[18px] lg:text-[20px] mt-1 tracking-wide'>
              Data Analyst | Data Scientist | Agentic AI Builder | AI-Powered System Designer
            </p>
            <p className='text-[#dfd9ff] font-normal lg:text-[18px] sm:text-[16px] xs:text-[15px] text-[14px] lg:leading-[28px] mt-2 text-white-100 max-w-2xl'>
              I architect enterprise AI platforms, intelligent multi-agent systems, scalable data pipelines, and predictive analytics dashboards.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive HTML Profile Photo Overlay */}
        <motion.div 
          className='z-10 flex items-center justify-center mt-6 md:mt-0 md:mr-4 lg:mr-8'
          whileHover={{ 
            scale: 1.1,
            y: [0, -10, 0], // gentle hover bounce
            rotate: [0, 4, -4, 0], // subtle hover tilt
          }}
          transition={{ 
            y: {
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut"
            },
            rotate: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            },
            scale: {
              duration: 0.3
            }
          }}
        >
          <div className='w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] lg:w-[210px] lg:h-[210px] rounded-full p-[3px] bg-[#915EFF] shadow-lg shadow-[#915EFF]/40 flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 hover:bg-[#b197fc] hover:shadow-[#b197fc]/60'>
            <div 
              className='w-full h-full rounded-full'
              style={{
                backgroundImage: `url(${profileImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        </motion.div>
      </div>

      {!isMobile && <ComputersCanvas />}

      <div className='absolute xs:bottom-10 bottom-6 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
