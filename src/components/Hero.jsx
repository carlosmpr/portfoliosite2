import React from 'react'
import { useSpring, animated , useTrail } from 'react-spring'
import terminal from '../assets/icons/coding.svg'
export default function Hero() {
    const props = useSpring({ to: { opacity: 1, }, from: { opacity: 0 },  delay: 500 })
    const [trail] = useTrail(1, () => ({ to: { opacity: 1, rotate:-15 }, from: { opacity: 1 }}))
  
    return (
        <>
        <animated.div className="w-screen h-screen flex flex-col items-center justify-center font-mono" style={props}>
            
            <h1 className="text-8xl font-bold">Carlos Polanco</h1>
            <h2  className="text-5xl">Software Developer</h2>
           
           {trail.map(styles => <animated.img style={styles} src={terminal} className="w-48"/>)}
     
        </animated.div>
    
</>
    )
}
