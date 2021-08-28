import React from "react";
import Avatar from "./Avatar";
import Card from "./Card/Card";
export default function About() {
  return (
    <div className="w-screen h-screen flex flex-col items-center  font-mono space-y-6 ">
      <h1 className="font-bold text-4xl">About ME</h1>

      <div className="w-full overflow:hidden space-y-6">
        <div className="w-full  justify-center flex items-center ">
          <Card
            text={
              "Hi, I'm Carlos Polanco.Full stack developer across multiple platforms📱💻, cloud architecture, and designing/testing/maintenance of web applications."
            }
          />
          <Avatar />
        </div>
        <div className="w-full   justify-center  flex items-center">
          <Card
            text={
              "🎓4+ years of IT experience🎓"
            }
          />
        </div>
        <div className="w-full justify-center  flex items-center">
          <Card
            text={
             "💪🤝 Strong collaboration and problem-solving skills, a focus on innovation and creativity for accomplishing robust projects. Passionate about learning new things and staying current with the latest in technology."
            }
          />
        </div>
        <div className="w-full justify-center  flex items-center">
          <Card
            text={
             "My Skills are in Python, React, TypeScript, NodeJS, Ruby, Rails, Redux, Flutter, Ionic, NextJS, React-Native, SQL, VueJS, GraphQL, NoSQL, Git, Bash Script, Electron, AWS, Docker, PostgreSQL, Active Record, Heroku, Figma, Firebase, PWA"
            }
          />
        </div>
      </div>
    </div>
  );
}
