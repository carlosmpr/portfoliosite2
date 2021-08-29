import React from 'react'

export default function Social() {
    return (
        <div className="w-screen  flex flex-col gap-y-3 md:flex-row justify-evenly items-center  font-mono ">
            <a target="_blank" href="https://github.com/carlosmpr" className="bg-indigo-700 bg-opacity-20 cursor-pointer  backdrop-filter backdrop-blur overflow-hidden  shadow-lg p-4 rounded-xl">Github</a>
            <a target="_blank" href="https://www.linkedin.com/in/carlosmpr/" className="bg-blue-700 bg-opacity-25  cursor-pointer  backdrop-filter backdrop-blur overflow-hidden  shadow-lg p-4 rounded-xl">Linkedin</a>
            <a target="_blank" href="https://cmpr.medium.com/" className="bg-black bg-opacity-25  cursor-pointer  backdrop-filter backdrop-blur overflow-hidden  shadow-lg p-4 rounded-xl">Mediun</a>
            <a target="_blank" href="https://drive.google.com/file/d/1o9TU7y4O_u3UElBMDfSMPjGDHDYYsO53/view?usp=sharing " className="bg-red-700 bg-opacity-25 cursor-pointer   backdrop-filter backdrop-blur overflow-hidden  shadow-lg p-4 rounded-xl">Resume</a>
            
        </div>
    )
}
