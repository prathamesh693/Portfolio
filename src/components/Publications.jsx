import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  advancedDetectionPaper,
  smartVisionPatent,
  opticalEnhancementPatent,
  cuttingEdgePaper,
} from "../assets";

const PublicationCard = ({ index, title, type, date, description, link, image }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    onClick={() => window.open(link, "_blank")}
    className='bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] flex flex-col justify-between border border-[#232631] hover:border-[#915EFF] hover:shadow-lg hover:shadow-[#915EFF]/20 transition-all duration-300 cursor-pointer shadow-card group'
  >
    <div className='w-full'>
      {/* Decorative Card Image */}
      <div className='relative w-full h-[180px] overflow-hidden rounded-2xl'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300'
        />
        <div className='absolute top-2 right-2 bg-black/70 backdrop-blur-sm border border-[#232631] text-secondary text-[11px] px-2.5 py-1 rounded-full font-bold'>
          {type}
        </div>
      </div>

      {/* Info */}
      <h3 className='text-white font-bold text-[19px] mt-4 leading-[24px] group-hover:text-[#915EFF] transition-colors duration-300 line-clamp-2'>
        {title}
      </h3>
      <p className='text-secondary text-[13.5px] mt-2 leading-[20px] line-clamp-4'>
        {description}
      </p>
    </div>

    <div className='mt-4 flex justify-between items-center'>
      <span className='text-secondary text-[12px] font-semibold'>{date}</span>
      <span className='text-[#915EFF] text-[12px] font-bold group-hover:underline flex items-center gap-1'>
        View Document ↗
      </span>
    </div>
  </motion.div>
);

const Publications = () => {
  const publications = [
    {
      title: "Detection of Small Intestine Ulcers Using Narrow Band Imaging and Hyperspectral Imaging",
      type: "Research Paper",
      date: "Published 2025",
      description: "Author. Evaluated Narrow Band Imaging (NBI) and Hyperspectral Imaging (HSI) techniques for small intestine ulcer classification, advancing medical computer vision and diagnostics precision.",
      image: advancedDetectionPaper,
      link: "https://github.com/prathamesh693",
    },
    {
      title: "Smart Vision Glasses: Real-Time Object Detection with Audio Assistance",
      type: "Patent Published",
      date: "Aug 2025",
      description: "Lead Inventor. Developed assistive wearable technology integrating YOLO-based object detection and real-time speech feedback to aid distance vision navigation for visually impaired individuals.",
      image: smartVisionPatent,
      link: "https://github.com/prathamesh693",
    },
    {
      title: "Optical Enhancement Spectacle Frames for Distance Vision",
      type: "Patent Granted",
      date: "Granted Apr 2025",
      description: "Lead Inventor. Granted patent for mechanical optical adjustment mechanisms built into spectacle frames, providing tunable focus correction for distance vision.",
      image: opticalEnhancementPatent,
      link: "https://github.com/prathamesh693",
    },
    {
      title: "A Cutting-Edge Security Solution: OTP-Based Smart Wireless Locking System",
      type: "Conference Paper",
      date: "Published 2022",
      description: "Co-author. Designed an IoT-based security solution implementing OTP authorization algorithms and hardware-software synchronization protocols for wireless home locks.",
      image: cuttingEdgePaper,
      link: "https://github.com/prathamesh693",
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My research publications & engineering patents</p>
        <h2 className={`${styles.sectionHeadText}`}>Publications & Patents.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center sm:justify-start'>
        {publications.map((pub, index) => (
          <PublicationCard 
            key={`pub-${index}`} 
            index={index} 
            {...pub} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications");
