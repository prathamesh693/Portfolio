import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, subtitle, icon }) => {
  const isEmoji = typeof icon === "string" && icon.length <= 4;

  return (
    <Tilt className='w-full' tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full rgb-hover-card shadow-card'
      >
        <div
          className='relative z-[1] bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          {isEmoji ? (
            <div className='text-5xl select-none'>{icon}</div>
          ) : (
            <img
              src={icon}
              alt={title}
              className={`${["Agentic AI", "Microsoft Fabric", "Adobe Photoshop"].includes(title) ? "w-20 h-20" : "w-16 h-16"} object-contain`}
            />
          )}

          <div className='flex flex-col items-center gap-2'>
            <h3 className='text-white text-[20px] font-bold text-center leading-[24px]'>
              {title}
            </h3>
            {subtitle && (
              <p className='text-secondary text-[14px] text-center font-medium leading-[18px]'>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[32px]'
      >
        Data Scientist and Agentic AI Builder with hands-on experience shipping enterprise-grade platforms via AI-powered development workflows — architecting system design, data flow, and full-stack integration end-to-end without writing traditional code line by line. Brings deep comprehension of full-stack architectures (React, FastAPI, multi-database systems) and ML pipelines, enabling rapid delivery of real-world solutions across data governance, BI, and enterprise automation. Strong background in data analytics, Power BI, SQL, and machine learning, with hands-on exposure to N8N and LangGraph for agentic workflow automation, plus 2 patents and published research in applied AI.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
