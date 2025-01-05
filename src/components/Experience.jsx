import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

function Experience() {
    return (
        <div id='experice' className='mt-20 w-screen flex items-center justify-center text-white'>
            <div className='experice-container'>
                <div className='w-full flex justify-center'>
                    <h2 className='text-2xl font-bold'>EXPERIENCE</h2>
                </div>
                <div className='w-full p-7 bg-slate-900 mt-10'>
                    <div className='flex gap-3 justify-between items-center flex-wrap'>
                        <div className='flex gap-3 items-center flex-wrap'>
                            <p className='font-bold text-xl'>Apprenticeship</p>
                            <div className='w-[1.5px] h-[25px] bg-white' />
                            <div className='font-bold flex gap-2 items-center'>
                                <img src="assets/HAL.png" className='h-[2rem]' alt="" />
                                Hindustan Aeronautics Limited
                            </div>
                            <div className='w-[1.5px] h-[25px] bg-white' />
                            <span className='flex items-center justify-center gap-1'><IoLocationOutline /> <span>Nashik</span></span>
                        </div>
                        <p className='opacity-70'>Oct’23 - Oct’24</p>
                    </div>
                    <div>
                        <ul className='list-disc ml-8 mt-4'>
                            <li>Developed and deployed internal web-based systems to improve operational efficiency. </li>
                            <li className='mt-1'>Provided IT support, delivering technical assistance and troubleshooting hardware and software issues.</li>
                            <li className='mt-1'>Acquired hands-on experience in Networking, including configuring and troubleshooting LAN/WAN systems.</li>
                            <li className='mt-1'>Ensured system security by managing antivirus updates and applying daily patches.</li>
                            <li className='mt-1'>Assisted in software installations, configured PCs and workstations, and optimized system performance.</li>
                            <li className='mt-1'>Resolved technical issues effectively through remote and onsite support. </li>
                            <li className='mt-1'>Contributed to documentation tasks, maintaining accurate records of technical processes and updates.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience