import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { scoe_logo, GSGCU_logo, SSVP_logo } from "../assets";

const EducationCard = ({ index, degree, school, date, grade, description, skills, logo }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-6 sm:p-8 rounded-2xl w-full flex flex-col gap-4 shadow-card border border-[#232631] hover:border-[#915EFF] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3),_0_0_15px_rgba(145,94,255,0.2)] hover:-translate-y-2 transition-all duration-300'
  >
    {/* Logo Wrapper */}
    <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white flex items-center justify-center p-2 shadow-inner overflow-hidden flex-shrink-0 mx-auto'>
      <img 
        src={logo} 
        alt={school} 
        className='w-full h-full object-contain'
      />
    </div>
    
    {/* Title block */}
    <div className='flex flex-col min-h-[85px] sm:min-h-[95px] mt-2 justify-start'>
      <h3 className='text-white text-[17px] sm:text-[19px] font-black leading-[22px]'>{degree}</h3>
      <p className='text-secondary text-[12px] sm:text-[13px] font-bold mt-1 tracking-wider uppercase'>{school}</p>
      <p className='text-secondary text-[11px] sm:text-[12px] font-semibold mt-1'>{date}</p>
    </div>

    {grade && (
      <div className='mt-2'>
        <p className='text-white font-bold text-[14px] sm:text-[15px]'>
          Grade: <span className='text-[#915EFF] font-black'>{grade}</span>
        </p>
      </div>
    )}

    {skills && (
      <div className='mt-1 min-h-[45px] sm:min-h-[50px]'>
        <p className='text-white font-bold text-[14px] sm:text-[15px]'>
          Skills: <span className='text-secondary font-medium text-[13px] sm:text-[14px]'>{skills}</span>
        </p>
      </div>
    )}

    <p className='text-secondary text-[13px] sm:text-[14px] leading-[22px] mt-2 flex-grow'>
      {description}
    </p>
  </motion.div>
);

const Education = () => {
  const educationList = [
    {
      degree: "B.E. – Electronics & Computer Science (Honors: AI & ML)",
      school: "Sanjivani College of Engineering, Kopargaon",
      date: "2022 - 2026",
      grade: "CGPA: 7.90",
      skills: "Data Mining · DBMS & SQL · Python · Machine Learning · Deep Learning",
      description: "Specializing in Electronics & Computer Science with honors coursework in Artificial Intelligence and Machine Learning. Gained hands-on experience in DBMS, advanced ML systems, and data-driven problem solving.",
      logo: scoe_logo
    },
    {
      degree: "Higher Secondary Certificate (HSC), Science",
      school: "Gopikabai Sitaram Gawande Jr. College, Umarkhed",
      date: "2021 - 2022",
      grade: "60.00%",
      skills: "Physics · Chemistry · Mathematics · Science",
      description: "Completed higher secondary education in Science, developing strong analytical thinking, mathematics skills, and scientific curiosity.",
      logo: GSGCU_logo
    },
    {
      degree: "Secondary School Certificate (SSC), Science",
      school: "Shri Shivaji Jr. College of Education, Pusad",
      date: "2019 - 2020",
      grade: "83.80%",
      skills: "Mathematics · Science · Social Sciences",
      description: "Completed secondary education with high academic achievement, laying a solid foundation for quantitative and scientific reasoning.",
      logo: SSVP_logo
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My academic journey</p>
        <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
      </motion.div>

      <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 gap-7'>
        {educationList.map((edu, index) => (
          <EducationCard key={`edu-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
