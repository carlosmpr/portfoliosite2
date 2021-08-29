import React from "react";
import { useSpring, animated, useTrail } from "react-spring";
export default function PorfolioContent({
  title,
  description,
  bullet1,
  bullet2,
  bullet3,
  github,
  demo,
  live,
  image,
  direccion =' flex-col-reverse md:flex-row',
  color= 'bg-purple-700',
  disable = false
}) {

  const props = useSpring({
    to: { x: 0 },
    from: { x: -500 },
    delay: 500,
  });
  return (
    <>
      <animated.div className={`w-full  flex ${direccion}  items-center   font-mono justify-center space-x-4 gap-y-12`} style={props}>
        <div className={`${color} w-5/6 md:w-1/3   p-4 space-y-3 bg-opacity-20   backdrop-filter backdrop-blur overflow-hidden  shadow-lg rounded-xl`}>
          <h1 className="font-bold text-xl md:text-3xl">{title}</h1>
          <p className="text-justify text-sm md:text-base">{description}</p>
          <ul className="list-disc flex flex-col text-xs md:text-sm px-7">
            <li>{bullet1}</li>
            <li>{bullet2}</li>
            <li>{bullet3}</li>
          </ul>
          <div className="w-full flex justify-evenly ">
            <a target="_blank" href={github} className={`p-3 ${disable.github ? "bg-gray-700 cursor-not-allowed":" bg-indigo-700  cursor-pointer"} rounded-xl bg-opacity-20`}>Github</a>
            <a target="_blank" href={demo} className={`p-3 ${disable.demo ? "bg-gray-700 cursor-not-allowed":" bg-red-700  cursor-pointer"} rounded-xl bg-opacity-20`}>Demo</a>
            <a target="_blank" href={live} className={`p-3 ${disable.live ? "bg-gray-700 cursor-not-allowed":" bg-yellow-700  cursor-pointer"} rounded-xl bg-opacity-20`}>Live</a>
          </div>
        </div>
       
          <img src={image} alt={image} className="w-5/6 md:w-2/5   rounded-xl shadow-lg"/>
    
      </animated.div>
    </>
  );
}
