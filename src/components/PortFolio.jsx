import React from 'react'
import PorfolioContent from './Portfolio/PorfolioContent'
import backpack from '../assets/images/backpack.png'
import menu from '../assets/images/menu.svg'
import breed from '../assets/images/breed.svg'
export default function PortFolio() {

    const projects = [{
        title:"Backpack",
        description:"App that allows users to plan activities in different locations around the world. Invite friends to your activities, see other users’ reviews, like and leave a comment, and real-time chat.",
        bullet1:"Utilized JSON web token and local storage to store encrypted user information client-side.",
        bullet2:"Designed with Tailwind CSS, making the styling process quicker.",
        bullet3:" Developed with React /Redux the front-end and with Rails/active record/PostgreSQL the back-end.",
        github:'',
        demo:'',
        live:'',
        image:backpack,
    },{
        title:"Menukome",
        description:"Intelligent menu for restaurants that highlight main dishes; easy to use and update and show recommendations for customers of drinks and side plates to accompany the main dish.",
        bullet1:"Created with Ionic Framework to look and feel like a native IOS app and Android App.",
        bullet2:"Integrated with Firebase Fire Store to store database information.",
        bullet3:"Delivered using Amazon CloudFront for fast content delivery and cache capability.",
        github:'',
        demo:'',
        live:'',
        image:menu,
        direccion:"flex-row-reverse",
     
        color:'bg-red-700'
    },
    {
        title:"Pedigree Breeding",
        description:"Mobile app for Android and IOS that allows dog owners to search and find friends for their dogs.",
        bullet1:"Developed using Flutter that uses the same code base for iOS and Android apps.",
        bullet2:"Managed user authentication with Amazon Cognito and DynamoDB for data storage.",
        bullet3:"Implemented serverless architecture with AWS Lambda for app functionality and API Gateway to communicate the app and Lambda functions.",
        github:'',
        demo:'',
        live:'',
        image:breed,
       
       
        color:'bg-yellow-700'
    }]
    return (
        <div className="w-screen  flex flex-col items-center  font-mono  ">
        <h1 className="font-bold text-4xl">PortFolio</h1>
         {projects.map(data => <PorfolioContent {...data} />)}
        </div>
        
    )
}



 