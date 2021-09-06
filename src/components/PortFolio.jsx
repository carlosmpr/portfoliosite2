import React from "react";
import PorfolioContent from "./Portfolio/PorfolioContent";
import backpack from "../assets/images/backpack.png";
import menu from "../assets/images/menu.svg";
import breed from "../assets/images/breed.svg";
import { useInView  } from "react-intersection-observer";

export default function PortFolio() {
 
  let { ref, inView, entry,  } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });





  const projects = [
    {
      title: "Backpack",
      description:
        "App that allows users to plan activities in different locations around the world. Invite friends to your activities, see other users’ reviews, like and leave a comment, and real-time chat.",
      bullet1:
        "Utilized JSON web token and local storage to store encrypted user information client-side.",
      bullet2:
        "Designed with Tailwind CSS, making the styling process quicker.",
      bullet3:
        " Developed with React /Redux the front-end and with Rails/active record/PostgreSQL the back-end.",
      github: "https://github.com/carlosmpr/backpack-frontend",
      demo: "https://drive.google.com/file/d/12WxbUYng2qlprC_6h5jA0UKr8p7Omit0/view?usp=sharing",
      live: "",
      image: backpack,
      disable: {
        live: true,
      },
    },
    {
      title: "Menukome",
      description:
        "Intelligent menu for restaurants that highlight main dishes; easy to use and update and show recommendations for customers of drinks and side plates to accompany the main dish.",
      bullet1:
        "Created with Ionic Framework to look and feel like a native IOS app and Android App.",
      bullet2:
        "Integrated with Firebase Fire Store to store database information.",
      bullet3:
        "Delivered using Amazon CloudFront for fast content delivery and cache capability.",
      github: "https://github.com/carlosmpr/menukome2",
      demo: "",
      live: "https://menukomedemomenu.s3.amazonaws.com/index.html",
      image: menu,
      direccion: " flex-col-reverse md:flex-row-reverse",

      color: "bg-red-700",
      disable: {
        demo: true,
      },
    },
    {
      title: "Pedigree Breeding",
      description:
        "Mobile app for Android and IOS that allows dog owners to search and find friends for their dogs.",
      bullet1:
        "Developed using Flutter that uses the same code base for iOS and Android apps.",
      bullet2:
        "Managed user authentication with Amazon Cognito and DynamoDB for data storage.",
      bullet3:
        "Implemented serverless architecture with AWS Lambda for app functionality and API Gateway to communicate the app and Lambda functions.",
      github: "https://github.com/carlosmpr/PedigreeBreading",
      demo: "https://drive.google.com/file/d/1bFkHk1V7YAUP_Hze919DKErq3Ez81x1c/view?usp=sharing",
      live: "",
      image: breed,
      disable: {
        live: true,
      },

      color: "bg-yellow-700",
    },
  ];
  return (
    <div
      className="w-screen  flex flex-col items-center  font-mono space-y-32 "
      ref={ref}
      id="portfolio"
    >
      <div ref={ref}>
        <h1 className="font-bold text-4xl">PortFolio</h1>
      </div>
      {inView ? projects.map((data) => {
      console.log(entry)
      return(
      <PorfolioContent {...data} />)}) : null}
    </div>
  );
}
