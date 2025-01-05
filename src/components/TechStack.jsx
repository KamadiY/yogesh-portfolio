import React from 'react'
import { motion } from 'framer-motion'

const programing_languages = [
  "C++", "Javascript", "UI", "UX", "IT Support",
  "HTML", "CSS", "ReactJs", "Adobe XD", "Sketch",
  "Canva", "Photoshop", "Wireframing", "MySQL",
  "Git/Github", "Figma", "VS Code"
]


function TechStack() {

  const redAnimate = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { ease: "easeInOut", duration: 0.8, delay: 0.2 } },
    exit: { opacity: 0, transition: { ease: "easeInOut", duration: 0.4, delay: 0 } },
  }

  return (
    <div id='Teckstack' className='w-screen min-hscreen max-ht text-white flex flex-col items-center overflow-x-hidden'>
      <div className='relative mt-[6rem] h-full w-full flex flex-col items-center'>
        <div className='w-full flex items-center justify-center'>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className='text-2xl font-bold'>TECHSTACK</motion.h2>
        </div>
        <motion.div
          variants={redAnimate}
          initial="initial"
          whileInView="whileInView"
          exit="exit"
          className="absolute h-[30rem] w-[30rem] bg-violet-800 top-[25%] blur-[4rem]"></motion.div>
        <div className='relative mt-16 grid-conatiner '>
          {
            programing_languages.map((tool, ind) => (
              <motion.div
                initial={{ scale: '0%', opacity: 0 }}
                whileInView={{ scale: '100%', opacity: 1 }}
                exit={{ scale: '0%', opacity: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                key={ind} className='items hover:shadow-2xl flex items-center justify-center'>
                <p className='text-xl font-semibold'>{tool}</p>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TechStack