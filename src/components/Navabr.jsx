import React from 'react'
import { useSpring, animated } from 'react-spring'
import NavItem from './Navbar/NavItem'
export default function Navabr() {
    const props = useSpring({ to: { opacity: 1, }, from: { opacity: 0 },  delay: 800 })


    return (
        <animated.div className="w-screen h-14 flex shadow-md items-center justify-evenly rounded-b-3xl font-bold uppercase text-xs md:text-md" style={props}>
           <NavItem >
            <a className="cursor-pointer" href="#about">Carlos</a>
            <a className="cursor-pointer" href="#about">About</a>
            <a className="cursor-pointer" href="#portfolio">Portfolio</a>
            <a className="cursor-pointer" href="#blog">Blog</a>
            <a className="cursor-pointer" href="#contact">Contact</a>
            </NavItem>
          
        </animated.div>
    )
}
