import React from 'react'
import { IoArrowDown } from "react-icons/io5";
import { motion } from 'framer-motion';

function Home() {
  return (
    <div id='Home' className='relative h-screen w-screen sm:px-24 text-white flex flex-col items-center justify-center'>
      <motion.div
        initial={{ opacity: 1, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.7 }}
        className="absolute w-[90%] sm:w-[30rem] sm:h-[30rem] md:w-[40rem] md:h-[40rem] lg:w-[60rem] lg:h-[60rem] aspect-square object-fit bg-[#0056BA] -top-[20%] sm:-top-[30%] lg:-top-[50%] blur-[80px] sm:blur-[120px] md:blur-[150px] lg:blur-[190px] rounded-full z-10" />
      <div className='z-20 w-auto flex flex-col items-center gap-4'>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className='text-xl md:text-3xl'>Hello, this is</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className='text-[2.8rem] text-nowrap md:text-[3rem] font-semibold leading-none'>Yogesh Kamadi</motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9 }}
          className='text-[2rem] md:text-[3.5rem] text-white/80 font-bold leading-none text-center'>An UI/UX Designer</motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1.1 }}
          className='text-center w-[85%] sm:w-[95%] md:w-[70%] text-slate-400 leading-relaxed font-semibold'>Designing websites and mobile applications</motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.3 }}
        className='absolute bottom-8 animate-bounce'>
        <IoArrowDown size={40} color='grey' />
      </motion.div>
    </div>
  )
}

export default Home