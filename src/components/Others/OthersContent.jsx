import React from 'react'
export default function OthersContent({title, description, github}) {
    return (
       
        <div className="w-1/3 flex flex-col items-center p-9 space-y-2">
            <img src="https://awv3node-homepage.surge.sh/build/assets/bash.svg" />
            <p className="font-bold text-2xl">{title}</p>
            <p className="text-center">{description}</p>
            <a href={github} target="_blank" className="p-3 bg-indigo-700 rounded-xl bg-opacity-20">Github</a>
        </div>
    )
}
