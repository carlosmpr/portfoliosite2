(this.webpackJsonpcarlosp=this.webpackJsonpcarlosp||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},146:function(e,t){},165:function(e,t){},170:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),n=a(36),i=a.n(n),s=(a(103),a(104),a(27)),o=a(4),l=a(1);function d(e){var t=e.image,a=void 0===t?"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80":t,c=Object(o.useSpring)({to:{x:0},from:{x:1e3},delay:800});return Object(l.jsx)(o.animated.img,{className:"inline-block w-40 md:w-48  rounded-full ring-2 ring-white",src:a,alt:"",style:c})}function b(e){var t=e.text,a=e.w,c=void 0===a?"w-11/12 md:w-3/5":a,r=e.h,n=void 0===r?"h-1/5":r,i=Object(o.useSpring)({to:{x:0},from:{x:1e3},delay:800});return Object(l.jsx)(o.animated.div,{className:"".concat(c," ").concat(n," rounded-xl  bg-indigo-700 bg-opacity-10   backdrop-filter backdrop-blur overflow-hidden  shadow-lg"),style:i,children:Object(l.jsx)("div",{className:" w-full h-full bg-white bg-opacity-70  p-5 md:p-9",children:Object(l.jsx)("p",{children:t})})})}function u(){return Object(l.jsxs)("div",{className:"w-screen  flex flex-col gap-y-3 md:flex-row justify-evenly items-center  font-mono ",children:[Object(l.jsx)("a",{target:"_blank",href:"https://github.com/carlosmpr",className:"bg-indigo-700 bg-opacity-20 cursor-pointer  backdrop-filter backdrop-blur overflow-hidden  shadow-lg p-4 rounded-xl",children:"Github"}),Object(l.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/carlosmpr/",className:"bg-blue-700 bg-opacity-25  cursor-pointer  backdrop-filter backdrop-blur overflow-hidden  shadow-lg p-4 rounded-xl",children:"Linkedin"}),Object(l.jsx)("a",{target:"_blank",href:"https://cmpr.medium.com/",className:"bg-black bg-opacity-25  cursor-pointer  backdrop-filter backdrop-blur overflow-hidden  shadow-lg p-4 rounded-xl",children:"Mediun"}),Object(l.jsx)("a",{target:"_blank",href:"https://drive.google.com/file/d/1o9TU7y4O_u3UElBMDfSMPjGDHDYYsO53/view?usp=sharing ",className:"bg-red-700 bg-opacity-25 cursor-pointer   backdrop-filter backdrop-blur overflow-hidden  shadow-lg p-4 rounded-xl",children:"Resume"})]})}var m=a.p+"static/media/circular.b0ad18ed.png",h=a(26);function p(){var e=Object(h.a)({threshold:0,triggerOnce:!0}),t=e.ref,a=e.inView;e.entry;return Object(l.jsxs)("div",{className:"w-screen  flex flex-col items-center  font-mono space-y-6  mt-52",id:"about",children:[Object(l.jsx)("h1",{className:"font-bold text-4xl",ref:t,children:"About ME"}),a?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"w-full overflow:hidden space-y-6",children:[{text:"Hi, I'm Carlos Polanco.Full stack developer across multiple platforms\ud83d\udcf1\ud83d\udcbb, cloud architecture, and designing/testing/maintenance of web applications.",avatar:!0},{text:"\ud83c\udf934+ years of IT experience\ud83c\udf93"},{text:"\ud83d\udcaa\ud83e\udd1d Strong collaboration and problem-solving skills, a focus on innovation and creativity for accomplishing robust projects. Passionate about learning new things and staying current with the latest in technology."},{text:"My Skills are in Python, React, TypeScript, NodeJS, Ruby, Rails, Redux, Flutter, Ionic, NextJS, React-Native, SQL, VueJS, GraphQL, NoSQL, Git, Bash Script, Electron, AWS, Docker, PostgreSQL, Active Record, Heroku, Figma, Firebase, PWA"}].map((function(e){return Object(l.jsxs)("div",{className:"w-full  justify-center flex flex-col-reverse md:flex-row items-center p-9 md:p-0",children:[Object(l.jsx)(b,Object(s.a)({},e)),e.avatar?Object(l.jsx)(d,{image:m}):null]})}))}),Object(l.jsx)(u,{})]}):null]})}var f=a(14),j=a.n(f),g=a(21),x=a(5),O=a(39),v=a(96),y=a(97),w=a.n(y);function k(){var e=Object(c.useState)(""),t=Object(x.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),i=Object(x.a)(n,2),s=i[0],o=i[1],d=Object(c.useState)(""),b=Object(x.a)(d,2),u=b[0],m=b[1],h=Object(c.useState)(!1),p=Object(x.a)(h,2),f=p[0],y=p[1],k=Object(c.useState)(!1),N=Object(x.a)(k,2),S=N[0],A=N[1],F=function(){var e=Object(g.a)(j.a.mark((function e(){var t,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=O(a),c=O(s),r=O(u),!v.validate(a)||""===u){e.next=15;break}return e.prev=4,e.next=7,w.a.post("https://rk82vfsokc.execute-api.us-east-1.amazonaws.com/dev/mailer",{email:t,name:c,message:r});case 7:A(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),y(!0);case 13:e.next=16;break;case 15:y(!0);case 16:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"w-screen  flex flex-col items-center  font-mono space-y-6  mt-32",id:"contact",children:[Object(l.jsx)("h1",{className:"font-bold text-4xl",children:"Message me"}),S?Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"notification is-success",children:"Message sent successfully!"})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{className:"bg-indigo-700 bg-opacity-5 rounded-xl shadow-md p-4 md:w-2/6 focus:outline-none focus:ring-2 focus:ring-blue-600",type:"text",placeholder:"Email",value:a,name:a,onChange:function(e){y(!1),r(e.target.value)}}),Object(l.jsx)("input",{className:"bg-indigo-700 bg-opacity-5 rounded-xl shadow-md p-4 md:w-2/6 focus:outline-none focus:ring-2 focus:ring-blue-600",type:"text",placeholder:"Name",value:s,name:s,onChange:function(e){y(!1),o(e.target.value)}}),Object(l.jsx)("textarea",{className:"bg-indigo-700 bg-opacity-5 rounded-xl shadow-md p-4 md:w-2/6 focus:outline-none focus:ring-2 focus:ring-blue-600",placeholder:"Message",value:u,name:u,onChange:function(e){m(e.target.value)}}),f?Object(l.jsx)("div",{className:"notification is-danger",children:"Please verify Email and Message!"}):null,Object(l.jsx)("button",{className:"p-4 bg-red-700 bg-opacity-70 text-white  backdrop-filter backdrop-blur overflow-hidden  shadow-lg  rounded-xl",onClick:F,children:"Send Email"})]})]})}var N=a(98),S=a(23),A=function(e){var t=e.children,a=r.a.Children.toArray(t);return Object(S.useTrail)(a.length,{from:{opacity:0,y:-10},to:{opacity:1,y:1},delay:1200}).map((function(e,t){var c=e.height,r=Object(N.a)(e,["height"]);return Object(l.jsx)(S.a.div,{style:r,children:Object(l.jsx)(S.a.div,{style:{height:c},children:a[t]})},t)}))};function F(){var e=Object(o.useSpring)({to:{opacity:1},from:{opacity:0},delay:800});return Object(l.jsxs)(o.animated.div,{className:"w-screen space-y-6 lg:space-y-0 lg:h-14 bg-black bg-opacity-10 mt-20 flex flex-col lg:flex-row shadow-md items-center justify-evenly rounded-t-3xl font-bold uppercase text-md",style:e,id:"blog",children:[Object(l.jsx)("p",{children:"Blogs"}),Object(l.jsx)("a",{href:"https://cmpr.medium.com/what-are-browser-cookies-59ba1bb26447",target:"_blank",children:"What are browser Cookies?"}),Object(l.jsx)("a",{href:"https://cmpr.medium.com/ruby-shorthands-101-6913efa8c572",target:"_blank",children:"Ruby Shorthands 101"}),Object(l.jsx)("a",{href:"https://cmpr.medium.com/the-7-hooks-of-react-f1d9c1f2a1c3",target:"_blank",children:"The Magnificent 7 Hooks of React"}),Object(l.jsx)("a",{href:"https://cmpr.medium.com/work-in-parallel-1b900dde0492",target:"_blank",children:"Work in parallel"})]})}var P=a.p+"static/media/coding.10b517f5.svg";function C(){var e=Object(o.useSpring)({to:{opacity:1},from:{opacity:0},delay:500}),t=Object(o.useTrail)(1,(function(){return{to:{opacity:1,rotate:-15},from:{opacity:1}}})),a=Object(x.a)(t,1)[0];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.animated.div,{className:"w-screen h-screen flex flex-col items-center justify-center font-mono",style:e,children:[Object(l.jsx)("h1",{className:" text-4xl md:text-8xl font-bold",children:"Carlos Polanco"}),Object(l.jsx)("h2",{className:"text-2xl md:text-4xl",children:"Software Developer"}),a.map((function(e){return Object(l.jsx)(o.animated.img,{style:e,src:P,className:"w-48"})}))]})})}function I(){var e=Object(o.useSpring)({to:{opacity:1},from:{opacity:0},delay:800});return Object(l.jsx)(o.animated.div,{className:"w-screen h-14 flex shadow-md items-center justify-evenly rounded-b-3xl font-bold uppercase text-xs md:text-md",style:e,children:Object(l.jsxs)(A,{children:[Object(l.jsx)("a",{className:"cursor-pointer",href:"#about",children:"Carlos"}),Object(l.jsx)("a",{className:"cursor-pointer",href:"#about",children:"About"}),Object(l.jsx)("a",{className:"cursor-pointer",href:"#portfolio",children:"Portfolio"}),Object(l.jsx)("a",{className:"cursor-pointer",href:"#blog",children:"Blog"}),Object(l.jsx)("a",{className:"cursor-pointer",href:"#contact",children:"Contact"})]})})}function M(e){var t=e.title,a=e.description,c=e.github,r=Object(o.useSpring)({to:{opacity:1},from:{opacity:0},delay:900});return Object(l.jsxs)(o.animated.div,{className:"md:w-1/3 flex flex-col items-center p-9 space-y-2",style:r,children:[Object(l.jsx)("img",{src:"https://awv3node-homepage.surge.sh/build/assets/bash.svg"}),Object(l.jsx)("p",{className:"font-bold text-2xl",children:t}),Object(l.jsx)("p",{className:"text-center",children:a}),Object(l.jsx)("a",{href:c,target:"_blank",className:"p-3 bg-indigo-700 rounded-xl bg-opacity-20",children:"Github"})]})}function D(){var e=Object(h.a)({threshold:0,triggerOnce:!0}),t=e.ref,a=e.inView;e.entry;return Object(l.jsxs)("div",{className:"w-screen  flex flex-col items-center  font-mono space-y-6 mt-52",ref:t,children:[Object(l.jsx)("h1",{className:"font-bold text-4xl",ref:t,children:"Other Projects"}),a?Object(l.jsx)("div",{className:"w-full flex flex-col md:flex-row justify-evenly items-center flex-wrap",children:[{title:"JBOOK",description:"Jupyter style notebook for javascriptwith in-browser bundling capabilities build using: TypesScrit,ESBUILD.",github:"https://github.com/carlosmpr/jbook"},{title:"EMAILY",description:"Eamily is an app to collect customer feedback, sending email blast with SendGrid API and managing payments with the stripe API.",github:"https://github.com/carlosmpr/emaily"},{title:"STREAMER",description:"Node server for streamer using node rtsp-stream packages and express that allows to stream from obs to the website.",github:"https://github.com/carlosmpr/streamer"}].map((function(e){return Object(l.jsx)(M,Object(s.a)({},e))}))}):null]})}function R(e){var t=e.title,a=e.description,c=e.bullet1,r=e.bullet2,n=e.bullet3,i=e.github,s=e.demo,d=e.live,b=e.image,u=e.direccion,m=void 0===u?" flex-col-reverse md:flex-row":u,h=e.color,p=void 0===h?"bg-purple-700":h,f=e.disable,j=void 0!==f&&f,g=Object(o.useSpring)({to:{x:0},from:{x:-500},delay:500});return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.animated.div,{className:"w-full  flex ".concat(m,"  items-center   font-mono justify-center space-x-4 gap-y-12"),style:g,children:[Object(l.jsxs)("div",{className:"".concat(p," w-5/6 md:w-1/3   p-4 space-y-3 bg-opacity-20   backdrop-filter backdrop-blur overflow-hidden  shadow-lg rounded-xl"),children:[Object(l.jsx)("h1",{className:"font-bold text-xl md:text-3xl",children:t}),Object(l.jsx)("p",{className:"text-justify text-sm md:text-base",children:a}),Object(l.jsxs)("ul",{className:"list-disc flex flex-col text-xs md:text-sm px-7",children:[Object(l.jsx)("li",{children:c}),Object(l.jsx)("li",{children:r}),Object(l.jsx)("li",{children:n})]}),Object(l.jsxs)("div",{className:"w-full flex justify-evenly ",children:[Object(l.jsx)("a",{target:"_blank",href:i,className:"p-3 ".concat(j.github?"bg-gray-700 cursor-not-allowed":" bg-indigo-700  cursor-pointer"," rounded-xl bg-opacity-20"),children:"Github"}),Object(l.jsx)("a",{target:"_blank",href:s,className:"p-3 ".concat(j.demo?"bg-gray-700 cursor-not-allowed":" bg-red-700  cursor-pointer"," rounded-xl bg-opacity-20"),children:"Demo"}),Object(l.jsx)("a",{target:"_blank",href:d,className:"p-3 ".concat(j.live?"bg-gray-700 cursor-not-allowed":" bg-yellow-700  cursor-pointer"," rounded-xl bg-opacity-20"),children:"Live"})]})]}),Object(l.jsx)("img",{src:b,alt:b,className:"w-5/6 md:w-2/5   rounded-xl shadow-lg"})]})})}var E=a.p+"static/media/backpack.d5fcb64e.png",L=a.p+"static/media/menu.af6fbde6.svg",_=a.p+"static/media/breed.447d51f3.svg";function B(){var e=Object(h.a)({threshold:0,triggerOnce:!0}),t=e.ref,a=e.inView,c=e.entry,r=[{title:"Backpack",description:"App that allows users to plan activities in different locations around the world. Invite friends to your activities, see other users\u2019 reviews, like and leave a comment, and real-time chat.",bullet1:"Utilized JSON web token and local storage to store encrypted user information client-side.",bullet2:"Designed with Tailwind CSS, making the styling process quicker.",bullet3:" Developed with React /Redux the front-end and with Rails/active record/PostgreSQL the back-end.",github:"https://github.com/carlosmpr/backpack-frontend",demo:"",live:"",image:E,disable:{live:!0,demo:!0}},{title:"Menukome",description:"Intelligent menu for restaurants that highlight main dishes; easy to use and update and show recommendations for customers of drinks and side plates to accompany the main dish.",bullet1:"Created with Ionic Framework to look and feel like a native IOS app and Android App.",bullet2:"Integrated with Firebase Fire Store to store database information.",bullet3:"Delivered using Amazon CloudFront for fast content delivery and cache capability.",github:"",demo:"",live:"https://menukomedemomenu.s3.amazonaws.com/index.html",image:L,direccion:" flex-col-reverse md:flex-row-reverse",color:"bg-red-700",disable:{github:!0,demo:!0}},{title:"Pedigree Breeding",description:"Mobile app for Android and IOS that allows dog owners to search and find friends for their dogs.",bullet1:"Developed using Flutter that uses the same code base for iOS and Android apps.",bullet2:"Managed user authentication with Amazon Cognito and DynamoDB for data storage.",bullet3:"Implemented serverless architecture with AWS Lambda for app functionality and API Gateway to communicate the app and Lambda functions.",github:"",demo:"",live:"",image:_,disable:{github:!0,demo:!0,live:!0},color:"bg-yellow-700"}];return Object(l.jsxs)("div",{className:"w-screen  flex flex-col items-center  font-mono space-y-32 ",ref:t,id:"portfolio",children:[Object(l.jsx)("div",{ref:t,children:Object(l.jsx)("h1",{className:"font-bold text-4xl",children:"PortFolio"})}),a?r.map((function(e){return console.log(c),Object(l.jsx)(R,Object(s.a)({},e))})):null]})}var T=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(I,{}),Object(l.jsx)(C,{}),Object(l.jsx)(B,{count:0}),Object(l.jsx)(D,{}),Object(l.jsx)(p,{}),Object(l.jsx)(k,{}),Object(l.jsx)(F,{})]})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,171)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),r(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),J()},48:function(e,t){},49:function(e,t){},84:function(e,t){},90:function(e,t){}},[[170,1,2]]]);
//# sourceMappingURL=main.781573a7.chunk.js.map