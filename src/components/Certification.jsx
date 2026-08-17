import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { carrent, jobit, tripguide } from "../assets";

const CertificationCard = ({ index, title, issuer, date, description, image, onClick }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.4, 0.75)}
    onClick={onClick}
    className='bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] flex flex-col justify-between border border-[#232631] hover:border-[#915EFF] hover:shadow-lg hover:shadow-[#915EFF]/20 transition-all duration-300 cursor-pointer shadow-card group'
  >
    <div className='w-full'>
      {/* Certificate Image Container */}
      <div className='relative w-full h-[200px] overflow-hidden rounded-2xl'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300'
        />
      </div>

      {/* Info */}
      <h3 className='text-white font-bold text-[22px] mt-4 leading-[28px] group-hover:text-[#915EFF] transition-colors duration-300'>
        {title}
      </h3>
      <p className='text-secondary text-[14px] mt-2 leading-[22px] line-clamp-3'>
        {description}
      </p>
    </div>

    <div className='mt-4 flex flex-col gap-2'>
      <span className='bg-[#1d1836] border border-secondary text-secondary text-[12px] px-3 py-1 rounded-full w-fit font-semibold'>
        {issuer}
      </span>
      <p className='text-secondary text-[12px] font-semibold pl-1'>{date}</p>
    </div>
  </motion.div>
);

const Certification = () => {
  const [activeCert, setActiveCert] = useState(null);

  const certifications = [
    {
      title: "Wipro Certified Data Scientist",
      issuer: "Wipro",
      date: "2025",
      description: "Demonstrated deep expertise in statistical analysis, predictive modeling, machine learning workflows, and advanced data processing techniques to solve complex industrial business challenges.",
      image: carrent,
      credentialUrl: "https://www.wipro.com/",
    },
    {
      title: "Data Science Certification",
      issuer: "Sanjivani College of Engineering",
      date: "2024 - 2025",
      description: "A comprehensive year-long specialization program covering data science methodologies, exploratory data analysis, machine learning algorithms, and interactive visualization tools.",
      image: jobit,
      credentialUrl: "https://sanjivani.org.in/",
    },
    {
      title: "SQL Advanced Certification",
      issuer: "HackerRank",
      date: "2025",
      description: "Verified expert-level capabilities in writing complex analytical SQL queries, optimizing query performance, schema design, and database indexing strategies.",
      image: tripguide,
      credentialUrl: "https://www.hackerrank.com/certificates/advanced-sql",
    },
    {
      title: "Oracle Data Science Professional Certificate",
      issuer: "Oracle",
      date: "2025",
      description: "Professional certification covering Oracle Cloud Infrastructure (OCI) Data Science capabilities. Gained experience in model training, ML pipelines, and scalable cloud analytics.",
      image: carrent,
      credentialUrl: "https://education.oracle.com/",
    },
    {
      title: "Organizational Behaviour & Project Management",
      issuer: "NPTEL",
      date: "2025",
      description: "Certified coursework covering modern methodologies in project management, agile lifecycles, structured planning, risk assessment, and team dynamics optimization.",
      image: jobit,
      credentialUrl: "https://nptel.ac.in/",
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>A selection of certifications I have earned to enhance my technical knowledge and skills.</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      {/* Grid container: 3 in a row on desktop (lg/xl), 2 on medium (md), 1 on mobile */}
      <div className='mt-20 flex flex-wrap gap-7 justify-center sm:justify-start'>
        {certifications.map((cert, index) => (
          <CertificationCard 
            key={`cert-${index}`} 
            index={index} 
            {...cert} 
            onClick={() => setActiveCert(cert)}
          />
        ))}
      </div>

      {/* Interactive Modal Backdrop and Box */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4'
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className='bg-[#151030] border border-[#232631] rounded-3xl max-w-2xl w-full p-6 relative flex flex-col gap-6 shadow-2xl overflow-y-auto max-h-[90vh]'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className='absolute top-4 right-5 text-secondary hover:text-white text-[28px] font-bold transition-all duration-200 cursor-pointer'
                onClick={() => setActiveCert(null)}
              >
                ✕
              </button>

              {/* Certificate Image */}
              <div className='w-full overflow-hidden rounded-2xl shadow-inner mt-4'>
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className='w-full h-auto max-h-[360px] object-contain mx-auto'
                />
              </div>

              {/* Text Info */}
              <div className='flex flex-col gap-3'>
                <h3 className='text-white text-[26px] font-black leading-[32px]'>{activeCert.title}</h3>
                <p className='text-secondary text-[15px] leading-[24px]'>{activeCert.description}</p>
                <p className='text-[#915EFF] font-bold text-[14px]'>
                  Issued by: {activeCert.issuer} — {activeCert.date}
                </p>
              </div>

              {/* View Certificate Button */}
              <button
                onClick={() => window.open(activeCert.credentialUrl, "_blank")}
                className='w-full bg-[#915EFF] hover:bg-[#804dee] text-white font-bold py-4 px-6 rounded-2xl text-[16px] text-center transition-all duration-300 shadow-md shadow-primary mt-2'
              >
                View Certificate
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
