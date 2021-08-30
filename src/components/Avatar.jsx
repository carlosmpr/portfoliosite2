import React from "react";
import { useSpring, animated , useTrail } from 'react-spring'
export default function Avatar({image="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}) {
 
  const props = useSpring({ to: { x: 0, }, from: { x: 1000 },  delay: 800 })
return (

      <animated.img
        className="inline-block w-40 md:w-48  rounded-full ring-2 ring-white"
        src={image}
        alt=""
        style={props}
      />
    

  );
}