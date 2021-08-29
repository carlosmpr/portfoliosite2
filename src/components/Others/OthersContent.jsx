import React from 'react'
import { useSpring, animated , useTrail } from 'react-spring'
export default function OthersContent({title, description, github}) {
    const props = useSpring({ to: { opacity: 1, }, from: { opacity: 0 },  delay: 900 })
    return (
       
        <animated.div className="md:w-1/3 flex flex-col items-center p-9 space-y-2" style={props}>
            <img src="https://awv3node-homepage.surge.sh/build/assets/bash.svg" />
            <p className="font-bold text-2xl">{title}</p>
            <p className="text-center">{description}</p>
            <a href={github} target="_blank" className="p-3 bg-indigo-700 rounded-xl bg-opacity-20">Github</a>
     </animated.div>
    )
}
