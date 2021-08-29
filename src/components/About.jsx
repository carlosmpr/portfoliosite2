
import React from "react";
import Avatar from "./Avatar";
import Card from "./Card/Card";
import Social from "./Social";
export default function About() {

  const me = [{text: "Hi, I'm Carlos Polanco.Full stack developer across multiple platforms📱💻, cloud architecture, and designing/testing/maintenance of web applications." , avatar:true} , { text:
    "🎓4+ years of IT experience🎓"
  },
{text:  "💪🤝 Strong collaboration and problem-solving skills, a focus on innovation and creativity for accomplishing robust projects. Passionate about learning new things and staying current with the latest in technology."},
{text:"My Skills are in Python, React, TypeScript, NodeJS, Ruby, Rails, Redux, Flutter, Ionic, NextJS, React-Native, SQL, VueJS, GraphQL, NoSQL, Git, Bash Script, Electron, AWS, Docker, PostgreSQL, Active Record, Heroku, Figma, Firebase, PWA"}
]
  return (
    <div className="w-screen  flex flex-col items-center  font-mono space-y-6  mt-52">
      <h1 className="font-bold text-4xl">About ME</h1>
      <div className="w-full overflow:hidden space-y-6">
         {me.map(data => {
           return (
            <div className="w-full  justify-center flex items-center ">
             <Card {...data}/>
             {data.avatar ? <Avatar /> :null}
             </div>
           )
         })}
      
      </div>
      <Social />
    </div>
  );
}
