import React, { lazy, Suspense, useEffect } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { project_data } from "../data/data.js";
const GetIcons = lazy(() => import('./GetIcons.jsx'));
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

function ProjectDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const param = new URLSearchParams(location.search);
    const id = param.get('id');

    if (!id) navigate('/');
    const cli = () => {
        navigate(-1);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>{project_data[id - 1].title}</title>
                <meta name="description" content={`Project: ${project_data[id - 1].sort_hand}`} />
                <link rel="canonical" href={`https://yogesh-two.vercel.app/project?id=${id}`} />

                <meta property="og:title" content={project_data[id - 1].title} />
                <meta property="og:description" content={project_data[id - 1].sort_hand} />
                <meta property="og:image" content="https://yogesh-two.vercel.app/project.png" />
                <meta property="og:url" content={`https://yogesh-two.vercel.app/project?id=${id}`} />
                <meta property="og:type" content="website" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://yogesh-two.vercel.app/project?id=${id}`} />
                <meta property="twitter:title" content={project_data[id - 1].title} />
                <meta property="twitter:description" content={project_data[id - 1].sort_hand} />
                <meta property="twitter:image" content="https://yogesh-two.vercel.app/project.png" />
            </Helmet>

            <div className='min-h-screen w-screen text-white flex justify-center'>
                <div className='relative project-det-container mt-6 pb-14'>
                    <div className="absolute left-2 z-50">
                        <div onClick={cli} className="fixed group cursor-pointer">
                            <div className='relative flex items-center justify-center gap-1 h-[2.1rem] sm:h-[2.5rem] px-4 rounded-full bg-zinc-500/30 backdrop-blur-sm z-20'>
                                <IoArrowBack className='sm:text-xl' />
                                <p className='sm:text-lg'>Back</p>
                            </div>
                            <div className='absolute left-2 top-2 h-[1.2rem] sm:h-[1.5rem] w-[5rem] bg-white transition group-hover:blur-[2rem] blur-[2.5rem] z-10' />
                        </div>
                    </div>
                    <div className='relative mt-6 flex flex-col items-center justify-center border-b border-zinc-500/30 max-[509px]:pb-[2.9rem] pb-2'>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            className='text-2xl 2xl:text-3xl font-bold'>{project_data[id - 1].title}</motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
                            className='text-zinc-400 2xl:text-lg text-center'>{project_data[id - 1].sort_hand} - {project_data[id - 1].date}</motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
                            className='absolute max-[509px]:bottom-2 max-[509px]:right-auto right-0'>
                            <a target='_blank' href={project_data[id - 1].github_link}>
                                <FaGithub size={28} className='cursor-pointer' />
                            </a>
                        </motion.div>
                    </div>
                    <div className='mt-6 flex flex-col gap-14'>
                        <div className='flex max-md:flex-col gap-8 itemscenter justify-between'>
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                                src={project_data[id - 1].home_img} alt="" className='md:w-[40%] z-20'
                                title='page'
                                loading='loding...'
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                                className='text-lg leading-relax z-10'>
                                <h2 className='text-2xl font-bold mb-2'>Description</h2>
                                <p>
                                    {project_data[id - 1].description}
                                </p>
                            </motion.div>
                        </div>
                        <div className='flex max-md:flex-col-reverse gap-8 items-center justify-between'>
                            {
                                project_data[id - 1].functionalities &&
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                                    className='text-lg'>
                                    <h2 className='text-2xl font-bold'>Features</h2>
                                    <ul className='list-disc ml-[1.2rem] mt-2 flex flex-col gap-2'>
                                        {
                                            project_data[id - 1].functionalities.map((feat, ind) => (
                                                <li key={ind}>{feat}</li>
                                            ))
                                        }
                                    </ul>
                                </motion.div>
                            }
                            <div className={`${project_data[id - 1].functionalities ? 'md:w-[55%]' : 'w-full'} mt-6`}>
                                <p className='font-bold text-2xl mb-2'>Designs</p>
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                                    src={project_data[id - 1].second_img} alt=""
                                    title='pages'
                                    loading='loding...'
                                />
                            </div>
                        </div>
                        {project_data[id - 1].tools &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.5 }}
                                className='flex flex-col gap-4 items-center mt-6 bg-white/10 py-6 backdrop-blur-sm'>
                                <h2 className='text-2xl font-bold'>Tools Used</h2>
                                <div className="flex gap-4 justify-center px-6 flex-wrap">
                                    {
                                        project_data[id - 1].tools.map((tool, ind) => (
                                            <>
                                                <Suspense key={ind} fallback={
                                                    <div className='bg-zinc-600 h-[3.5rem] w-[3.5rem] rounded-full animate-pulse' />
                                                }>
                                                    <GetIcons iconName={tool} />
                                                </Suspense>

                                            </>
                                        ))
                                    }
                                </div>
                            </motion.div>
                        }
                        {/* <div className=''>
                            <motion.h2
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.5 }}
                                viewport={{ once: true }}
                                className='text-2xl font-semibold z-10'>{project_data[id - 1].diagram.name}</motion.h2>
                            <div className='z-20'>
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.5 }}
                                    src={project_data[id - 1].diagram.link} alt=""
                                    title='vidstream user model diagram'
                                    loading='loding...'
                                />
                            </div>
                        </div> */}
                        {project_data[id - 1].note &&
                            <div className='relative'>
                                <p className='absolute right-0 text-lg text-zinc-400'>{project_data[id - 1].note}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails