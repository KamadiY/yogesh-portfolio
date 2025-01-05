import React, { useEffect, useState } from 'react'
import { LiaUniversitySolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiCodeforces } from "react-icons/si";
import { motion } from 'framer-motion';

function About2() {
    const [Time, setTime] = useState(null);

    useEffect(() => {
        function getIndiaTime() {
            const date = new Date();
            const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
            const indiaTime = new Date(utcTime + 19800000); // IST offset (UTC + 5:30)

            const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' };
            return indiaTime.toLocaleTimeString('en-US', options);
        }

        const intervalId = setInterval(() => {
            setTime(getIndiaTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    const redAnimate = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1, transition: { ease: "easeInOut", duration: 0.8, delay: 0.2 } },
        exit: { opacity: 0, transition: { ease: "easeInOut", duration: 0.4, delay: 0 } },
    }

    const textAnimate = {
        initial: { y: 50, opacity: 0 },
        whileInView: { y: 0, opacity: 1, transition: { ease: "easeInOut", duration: 0.6, delay: 0.4 } },
        exit: { y: 0, opacity: 0, transition: { ease: "easeInOut", duration: 0, delay: 0 } },
    }


    return (
        <div id="About" className='w-screen max-ht text-white overflow-x-hidden flex flex-col items-center gap-8 mt-8 mb-4'>
            <div className='relative mt-[6rem] about-conatiner'>
                <div
                    className="absolute h-full w-full flex sm:items-center ml-[25%]">
                    <motion.div
                        variants={redAnimate}
                        initial="initial"
                        whileInView="whileInView"
                        exit="exit"
                        className='h-[20rem] w-[20rem] sm:h-[28rem] sm:w-[28rem] z-10 max-sm:mt-[100%] bg-red-600 blur-[8rem]' />
                </div>
                <div className='relative w-full flex max-[590px]:justify-center z-20'>
                    <motion.h2
                        variants={textAnimate}
                        initial="initial"
                        whileInView="whileInView"
                        exit="exit"
                        className='text-4xl mb-2 font-bold text-white/80'>ME</motion.h2>
                </div>
                <div className='relative w-full grid gap-2 place-content-center sm:gap-4 about-grid z-20'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.8 }}
                        className='grid-span flex items-center justify-center'>
                        <img src="assets/photo2.jpeg" alt="" className='max-md:w-[20rem]' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.9 }}
                        className='grid-span py-4 px-2 bg-slate-900 flex flex-col items-center'>
                        <div>
                            <LiaUniversitySolid size={30} />
                        </div>
                        <p className='text-lg md:text-xl text-center'>Vishwakarma Institute of Information Technology, Pune</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        className='grid-span bg-slate-900 p-4 pl-6'>
                        <p className='text-lg md:text-xl font-semibold'>Skills</p>
                        <p className='md:text-lg'>UI/UX Designer</p>
                        <p className='md:text-lg'>Web Developer</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 1 }}
                        className='grid-span bg-slate-900 p-4 lg:p-6 flex flex-col gap-3'>
                        <div className='w-full'>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
                                className='text-lg leading-relaxed'>My name is, <span className='font-semibold'>Yogesh Kamadi</span></motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
                                className='text-lg leading-relaxed'>
                                Completed a Bachelor of Technology degree from Information Technology branch, with CGPA of 7.92.
                            </motion.p>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
                            className='text-lg leading-relaxed first-letter:text-4xl first-letter:font-semibold'>
                            My focus lies in web development, using ReactJS and UI/UX designing using softwares like Figma, Adobe XD & Sketch.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ ease: "easeInOut", duration: 0.8, delay: 0.2 }}
                            className='text-lg leading-relaxed'>
                            I am certified in Databases and SQL, Python Data Structures, and Industrial IoT Security, and I continually seek opportunities to expand my knowledge. My strengths lie in problem-solving, adaptability, and collaboration, making me a reliable team player and an independent contributor. I am driven by innovation and aim to contribute meaningfully to the IT sector while advancing my professional journey.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        className='grid-span bg-slate-900 px-2 max-[590px]:py-6 sm:p-4 flex gap-2 sm:gap-4 items-center justify-evenly'>
                        <a href=" https://github.com/KamadiY" target='_blank'>
                            <FaGithub size={35} className='cursor-pointer' />
                        </a>
                        <a href="https://linkedin.com/in/yogesh-kamadi" target='_blank'>
                            <FaLinkedin size={35} className='cursor-pointer' />
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.7 }}
                        className='grid-span bg-slate-900 p-4 flex gap-2 sm:gap-3 md:gap-4 items-center justify-evenly'>
                        {/* <p className='text-[1.7rem] font-bold text-white/20'>Certifications</p> */}
                        {/* <a href="https://leetcode.com/u/Rabadvilas/">
                            <SiLeetcode size={35} className='cursor-pointer' />
                        </a>
                        <a href="https://www.codechef.com/users/rabad_vilas">
                            <SiCodechef size={35} className='cursor-pointer' />
                        </a>
                        <a href="https://codeforces.com/profile/Vilrabad">
                            <SiCodeforces size={35} className='cursor-pointer' />
                        </a> */}
                        <a href="mailto:yogeshkamadi999@gmail.com" className='text-2xl font-bold'>
                            G-MAIL
                        </a>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 1 }}
                        className='grid-span bg-slate-900 p-4 flex items-center justify-center'>
                        <a href='https://docs.google.com/document/d/1AcH0mPOnApaEsm0LZjok_Hkx13fQphiK/edit?pli=1' target='_blank' className='text-[2rem] md:text-[3rem] font-bold'>CV</a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.9 }}
                        className='grid-span bg-slate-900 p-4'>
                        <div className='flex gap-3 items-center'>
                            <IoLocationOutline size={23} />
                            <p className='md:text-xl'>Nashik, India</p>
                        </div>
                        <div className='h-[80%] flex items-center justify-center'>
                            <p className='text-[2rem] md:text-[3.5rem] lg:text-[4rem] font-bold'>{Time ? `${Time}` : "00:00"}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About2;
