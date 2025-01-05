import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from "framer-motion"

function Navbar({ setActiveComponent }) {

  useEffect(() => {
    setActiveComponent('Home')
  }, [setActiveComponent])

  return (
    <div className='fixed w-screen flex items-center justify-center top-4 z-50 text-white'>
      <motion.nav
        initial={{ scaleX: '10%' }}
        animate={{ scaleX: '100%' }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className='h-10 flex items-center justify-center px-4 sm:px-8 md:px-10 bg-zinc-500/40 backdrop-blur-sm rounded-full'>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.2, delay: 0.5 }}
          className='flex sm:gap-4 md:gap-6 h-[80%] sm:font-semibold'>
          <li className='navli relative cursor-pointer h-full flex items-center justify-center '>
            <Link
              activeClass='active'
              to='Home'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveComponent('Home')}
              className='active-bg-0'
            >
              Home
            </Link>
            <div className='lighter absolute h-[2px] w-[1.2rem] bg-gradient-to-r from-zinc-500 via-white to-zinc-500 -top-[2px] rounded-full' />
            <div className='lighter absolute h-4 w-4 bg-white -top-[25%] blur-md' />
          </li>
          <li className='navli relative cursor-pointer h-full flex items-center justify-center '>
            <Link
              activeClass='active'
              to='Projects'
              spy={true}
              smooth={true}
              duration={500}
              translate='yes'
              onSetActive={() => setActiveComponent('Projects')}
              className='active-bg-0'
            >
              Projects
            </Link>
            <div className='lighter absolute h-[2px] w-[1.2rem] bg-gradient-to-r from-zinc-500 via-white to-zinc-500 -top-[2px] rounded-full' />
            <div className='lighter absolute h-4 w-4 bg-white -top-[25%] blur-md' />
          </li>
          <li className='navli relative cursor-pointer h-full flex items-center justify-center '>
            <Link
              activeClass='active'
              to='About'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveComponent('About')}
              className='active-bg-0'
            >
              About
            </Link>
            <div className='lighter absolute h-[2px] w-[1.2rem] bg-gradient-to-r from-zinc-500 via-white to-zinc-500 -top-[2px] rounded-full' />
            <div className='lighter absolute h-4 w-4 bg-white -top-[25%] blur-md' />
          </li>
          <li className='navli relative cursor-pointer h-full flex items-center justify-center '>
            <Link
              activeClass='active'
              to='Contact'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveComponent('Contact')}
              className='active-bg-0'
            >
              Contact
            </Link>
            <div className='lighter absolute h-[2px] w-[1.2rem] bg-gradient-to-r from-zinc-500 via-white to-zinc-500 -top-[2px] rounded-full' />
            <div className='lighter absolute h-4 w-4 bg-white -top-[25%] blur-md' />
          </li>
        </motion.ul>
      </motion.nav>
    </div>
  )
}

export default Navbar