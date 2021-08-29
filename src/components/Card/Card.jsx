import React from 'react'
import { useSpring, animated , useTrail } from 'react-spring'
export default function Card({text, w="w-11/12 md:w-3/5" ,h="h-1/5"}) {
    const props = useSpring({ to: { x: 0, }, from: { x: 1000 },  delay: 800 })
    return (
        <animated.div className={`${w} ${h} rounded-xl  bg-indigo-700 bg-opacity-10   backdrop-filter backdrop-blur overflow-hidden  shadow-lg`} style={props}>
            <div className=" w-full h-full bg-white bg-opacity-70  p-5 md:p-9">
             <p>{text}</p> 
            </div>
        </animated.div>
       
    )
}
