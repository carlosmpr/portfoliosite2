import React from 'react'

export default function Card({text, w="w-3/5" ,h="h-1/5"}) {
    return (
        <div className={`${w} ${h} rounded-xl  bg-indigo-700 bg-opacity-10   backdrop-filter backdrop-blur overflow-hidden  shadow-lg`}>
            <div className=" w-full h-full bg-white bg-opacity-70  p-9">
              {text}
            </div>
        </div>
       
    )
}