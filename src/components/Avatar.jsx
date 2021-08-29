import React from "react";

export default function Avatar({image="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}) {
  return (

      <img
        className="inline-block  md:w-48  rounded-full ring-2 ring-white"
        src={image}
        alt=""
      />
    

  );
}