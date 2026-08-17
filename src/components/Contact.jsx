import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Prathamesh Jadhav",
          from_email: form.email,
          to_email: "prathameshj693@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Quick Contact Badges */}
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <a 
            href='mailto:prathameshj693@gmail.com'
            className='flex items-center gap-3 p-3 bg-tertiary rounded-xl border border-[#232631] hover:border-[#915EFF] transition-colors duration-200 group'
          >
            <span className='text-lg'>📧</span>
            <div className='overflow-hidden'>
              <p className='text-secondary text-[11px] font-medium'>Email</p>
              <p className='text-white text-[13px] font-semibold truncate group-hover:text-[#915EFF]'>prathameshj693@gmail.com</p>
            </div>
          </a>

          <a 
            href='tel:+918380890453'
            className='flex items-center gap-3 p-3 bg-tertiary rounded-xl border border-[#232631] hover:border-[#915EFF] transition-colors duration-200 group'
          >
            <span className='text-lg'>📱</span>
            <div>
              <p className='text-secondary text-[11px] font-medium'>Phone</p>
              <p className='text-white text-[13px] font-semibold group-hover:text-[#915EFF]'>+91 8380890453</p>
            </div>
          </a>

          <div className='flex items-center gap-3 p-3 bg-tertiary rounded-xl border border-[#232631]'>
            <span className='text-lg'>📍</span>
            <div>
              <p className='text-secondary text-[11px] font-medium'>Location</p>
              <p className='text-white text-[13px] font-semibold'>Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 bg-tertiary rounded-xl border border-[#232631] justify-around'>
            <a 
              href='https://github.com/prathamesh693' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-secondary hover:text-white text-[13px] font-semibold flex items-center gap-1.5 transition-colors'
            >
              GitHub ↗
            </a>
            <span className='text-secondary'>|</span>
            <a 
              href='https://www.linkedin.com/in/prathamesh-jadhav-78b02523a/' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-secondary hover:text-white text-[13px] font-semibold flex items-center gap-1.5 transition-colors'
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
