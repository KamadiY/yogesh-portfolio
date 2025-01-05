import React, { useState } from 'react'
import { RxExternalLink } from "react-icons/rx";
import frame from "/assets/mac_layout.png";
import { useNavigate } from 'react-router-dom';
import { project_data } from "../data/data.js";
import { motion } from 'framer-motion';
import ImageWithLoading from './ImageWithLoading.jsx';

function Projects() {
    const [isLoading1, setLoading1] = useState(true);
    const [isLoading2, setLoading2] = useState(true);
    const [areVisible, setVisible] = useState(false);

    const navigate = useNavigate();
    const toProjectDetails = (id) => {
        navigate(`/project?id=${id}`);
    }

    return (
        <div id='Projects' className='relative w-screen minh-screen max-ht text-white flex flex-col items-center gap-8 mb-4'>
            <div className="relative group main-container2 p-2 flex flex-col items-center justify-center rounded-xl md:rounded-[1.8rem] overflow-hidden bg-gradient-to-r from-zinc-500/50 via-white/50 transition-all duration-500 delay-500 hover:via-white hover:to-zinc-500/50 to-zinc-500/50 z-20">
                <div className='absolute w-[99.4%] h-[99%] bg-[#000A25] rounded-xl md:rounded-[1.7rem]'></div>
                <div className='absolute w-[99.4%] h-[99%] color-changer rounded-xl md:rounded-[1.7rem]'></div>
                <div onClick={() => toProjectDetails(1)} className='relative w-full flex flex-col items-center'>
                    <div className='h-[5rem] w-full pl-4 md:pl-14'>
                        <h2 className='mt-4 text-2xl font-bold'>{project_data[0].title}</h2>
                        <p className='text-zinc-300'>{project_data[0].sort_hand} - {project_data[0].date}</p>
                    </div>
                    <div className='relative group-hover:scale-[102%] transition translate-y-1 lg:mt-4 flex flex-col items-center justify-end lg:h-[38rem] max-sm:h-[230px] h-auto w-[90%]'>
                        <img src={frame} className='absolute lg:h[38.6rem] w-[91%] lg:w-[100%]  -bottom-1 z-20' alt="" />
                        <video
                            src={project_data[0].cover_video}
                            onLoadedData={() => setLoading2(false)}
                            onError={() => console.error("Video failed to load")}
                            className="relative lg:h-[34rem] w-[90%] lg:w-[98.7%] mt-[7.5rem] transition duration-150 z-10"
                            autoPlay
                            muted
                            loop
                            type="video/webm"
                        />
                        {isLoading2 && (
                            <div
                                className="relative lg:h-[34rem] w-[90%] lg:w-[98.7%] z-10 bg-gray-300 animate-pulse rounded"
                                aria-busy="true"
                                aria-hidden="true"
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className={`relative other-project-container flex gap-3 ${areVisible ? "h-auto" : "max-md:h-[10rem] overflow-hidden"} max-[1136px]:justify-center justify-between flex-wrap`}>
                {
                    project_data.slice(1).map((proj, ind) => (
                        <ImageWithLoading
                            key={ind}
                            toProjectDetails={toProjectDetails}
                            proj={proj}
                            areVisible={areVisible}
                            ind={ind}
                        />
                    ))
                }
                <div onClick={() => setVisible(pre => !pre)} className={`absolute ${areVisible ? "hidden" : "block"} md:hidden bg-gradient-to-b from-[#000A25]/0 via-[#000A25]/50 to-[#000A25] h-[6rem] w-full bottom-0 flex items-center justify-center pt-12 font-bold`}>
                    <div className='px-8 py-2 bg-gradient-to-br from-indigo-950 to-blue-950/40 shadow-xl rounded-full'>
                        <p>More</p>
                    </div>
                </div>
            </div>
            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                viewport={{ once: true }}
                href='https://www.behance.net/yogeshkamdi' target='_blank' className={`${areVisible ? "flex" : "max-md:hidden"} md:text-lg font-semibold px-8 py-4 bg-gradient-to-br from-indigo-950 to-blue-950/20 rounded-full flex items-center gap-2 transition shadow-xl`}>More on Behance <RxExternalLink />
            </motion.a>
        </div>
    )
}

export default Projects