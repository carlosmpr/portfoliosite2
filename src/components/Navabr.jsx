import React from 'react'
import { useSpring, animated } from 'react-spring'
import NavItem from './Navbar/NavItem'
export default function Navabr() {
    const props = useSpring({ to: { opacity: 1, }, from: { opacity: 0 },  delay: 800 })


    return (
        <animated.div className="w-screen h-14 flex shadow-md items-center justify-evenly rounded-b-3xl font-bold uppercase text-md" style={props}>
           <NavItem >
            <p>Carlos</p>
            <p>About</p>
            <p>Portfolio</p>
            <p>Blog</p>
            <p>Contact</p>
            </NavItem>
          
        </animated.div>
    )
}
