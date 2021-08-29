import React from 'react'
import { useSpring, animated } from 'react-spring'
import NavItem from './Navbar/NavItem'
export default function Footer() {
    const props = useSpring({ to: { opacity: 1, }, from: { opacity: 0 },  delay: 800 })


    return (
        <animated.div className="w-screen h-14 bg-black bg-opacity-10 mt-20 flex shadow-md items-center justify-evenly rounded-t-3xl font-bold uppercase text-md" style={props}>
           <NavItem >
            <p>Blogs</p>
            <a href="https://cmpr.medium.com/what-are-browser-cookies-59ba1bb26447" target="_blank">What are browser Cookies?</a>
            <a href="https://cmpr.medium.com/ruby-shorthands-101-6913efa8c572" target="_blank">Ruby Shorthands 101</a>
            <a href="https://cmpr.medium.com/the-7-hooks-of-react-f1d9c1f2a1c3" target="_blank">The Magnificent 7 Hooks of React</a>
            <a href="https://cmpr.medium.com/work-in-parallel-1b900dde0492" target="_blank">Work in parallel</a>
            </NavItem>
          
        </animated.div>
    )
}
