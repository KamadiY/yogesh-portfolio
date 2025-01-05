import React from 'react'
import { IoArrowBack } from "react-icons/io5"
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='h-screen w-screen text-white flex justify-center'>
            <div className='relative conta mt-6'>
                <div className="absolute left-2 z-50">
                    <Link to="/" className=" group cursor-pointer">
                        <div className='relative flex items-center justify-center gap-1 h-[2.1rem] sm:h-[2.5rem] px-4 rounded-full bg-zinc-500/30 backdrop-blur-sm z-20'>
                            <IoArrowBack className='sm:text-xl' />
                            <p className='sm:text-lg'>Back</p>
                        </div>
                        <div className='absolute left-2 top-2 h-[1.2rem] sm:h-[1.5rem] w-[5rem] bg-white transition group-hover:blur-[2rem] blur-[2.5rem] z-10' />
                    </Link>
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center'>
                    <p className='text-[5rem] font-bold text-white/40'>404</p>
                    <p className='text-xl'>Page Not Found</p>
                </div>
            </div>
        </div>
    )
}

export default Error