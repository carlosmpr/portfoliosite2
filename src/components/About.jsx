
import React from "react";
import Avatar from "./Avatar";
import Card from "./Card/Card";
import Social from "./Social";
import { useInView } from "react-intersection-observer";
export default function About() {
  let { ref, inView, entry,  } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });


  const me = [{text: "Hi, I'm Carlos Polanco.Full stack developer across multiple platforms📱💻, cloud architecture, and designing/testing/maintenance of web applications." , avatar:true} , { text:
    "🎓4+ years of IT experience🎓"
  },
{text:  "💪🤝 Strong collaboration and problem-solving skills, a focus on innovation and creativity for accomplishing robust projects. Passionate about learning new things and staying current with the latest in technology."},
{text:"My Skills are in Python, React, TypeScript, NodeJS, Ruby, Rails, Redux, Flutter, Ionic, NextJS, React-Native, SQL, VueJS, GraphQL, NoSQL, Git, Bash Script, Electron, AWS, Docker, PostgreSQL, Active Record, Heroku, Figma, Firebase, PWA"}
]
  return (
    <div className="w-screen  flex flex-col items-center  font-mono space-y-6  mt-52" id="about">
      <h1 className="font-bold text-4xl" ref={ref}>About ME</h1>


      {inView ? <>
        <div className="w-full overflow:hidden space-y-6">
         {me.map(data => {
           return (
            <div className="w-full  justify-center flex flex-col-reverse md:flex-row items-center p-9 md:p-0">
             <Card {...data}/>
             {data.avatar ? <Avatar /> :null}
             </div>
           )
         })}
      
      </div>
      <Social />
      </>:null
      }
    
    </div>
  );
}
