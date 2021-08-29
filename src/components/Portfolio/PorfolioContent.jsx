import React from "react";

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
  direccion ='flex-row',
  color= 'bg-purple-700'
}) {
  return (
    <>
      <div className={`w-full h-screen  flex ${direccion}  items-center   font-mono justify-center space-x-4`}>
        <div className={`${color} w-1/3  p-4 space-y-3 bg-opacity-20   backdrop-filter backdrop-blur overflow-hidden  shadow-lg rounded-xl`}>
          <h1 className="font-bold text-3xl">{title}</h1>
          <p className="text-justify">{description}</p>
          <ul className="list-disc flex flex-col text-sm px-7">
            <li>{bullet1}</li>
            <li>{bullet2}</li>
            <li>{bullet3}</li>
          </ul>
          <div className="w-full flex justify-evenly ">
            <a href={github}>Github</a>
            <a href={demo}>Demo</a>
            <a href={live}>Live</a>
          </div>
        </div>
       
          <img src={image} alt={image} className="w-2/5   rounded-xl shadow-lg"/>
    
      </div>
    </>
  );
}
