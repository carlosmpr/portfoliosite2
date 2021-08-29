import React from "react";
import OthersContent from "./Others/OthersContent";
export default function Others() {
  const others = [
    {
      title: "JBOOK",
      description:
        "Jupyter style notebook for javascriptwith in-browser bundling capabilities build using: TypesScrit,ESBUILD.",
      github: "https://github.com/carlosmpr/jbook",
    },

    {
        title: "EMAILY",
        description:
          "Eamily is an app to collect customer feedback, sending email blast with SendGrid API and managing payments with the stripe API.",
        github: "https://github.com/carlosmpr/emaily",
      },


      {
        title: "STREAMER",
        description:
          "Node server for streamer using node rtsp-stream packages and express that allows to stream from obs to the website.",
        github: "https://github.com/carlosmpr/streamer",
      },
  ];
  return (
    <div className="w-screen  flex flex-col items-center  font-mono space-y-6 mt-52">
      <h1 className="font-bold text-4xl">Other Projects</h1>
      <div className="w-full flex justify-evenly items-center flex-wrap">
        {others.map((data) => (
          <OthersContent {...data} />
        ))}
      </div>
    </div>
  );
}
