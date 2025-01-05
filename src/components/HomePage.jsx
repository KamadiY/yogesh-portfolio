import React, { lazy, useState } from 'react'
const Home = lazy(() => import("./Home"));
const Projects = lazy(() => import("./Projects"));
const About2 = lazy(() => import("./About2"));
const TechStack = lazy(() => import("./TechStack"));
const Contact = lazy(() => import("./Contact"));
import { Element } from 'react-scroll';
import Navbar from './Navbar';
const Experience = lazy(() => import("./Experience"));

function HomePage() {
    const [activeComponent, setActiveComponent] = useState('');
    return (
        <>
            <Navbar setActiveComponent={setActiveComponent} />
            <Element name='Home'>
                <Home />
            </Element>
            <Element name='Projects'>
                <Projects />
            </Element>
            <Element name='About'>
                <About2 />
            </Element>
            <Experience />
            <TechStack />
            <Element name='Contact'>
                <Contact />
            </Element>
        </>
    )
}

export default HomePage