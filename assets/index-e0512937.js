import{s as d,r as n,j as e,N as f,C as L,m as i,g as y,S as P,a as F,X as D,H as M,R as O,b,c as W,d as B}from"./vendor-b277aeb1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))h(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&h(m)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const G=()=>{const[t,o]=n.useState(!1),a=()=>{o(!t)};return e.jsx("div",{className:"nav-container",children:e.jsxs(U,{children:[e.jsx(J,{children:e.jsx("img",{src:"./images/TL_Logo.svg",alt:""})}),e.jsxs(V,{onClick:a,className:t?"active":"",children:[e.jsx("div",{className:"bg-white"}),e.jsx("div",{className:"bg-white"}),e.jsx("div",{className:"bg-white"})]}),e.jsx(X,{showMenu:t,className:t?"bg-black active":"",children:e.jsxs(Y,{children:[e.jsx(N,{children:e.jsx(f,{onClick:a,to:"/",children:"HOME"})}),e.jsx(N,{children:e.jsx(f,{onClick:a,to:"/team",children:"TEAM"})}),e.jsx(N,{children:e.jsx(f,{onClick:a,to:"/events",children:"EVENTS"})}),e.jsx(N,{children:e.jsx(f,{onClick:a,to:"/inventory",children:"INVENTORY"})}),e.jsx(N,{children:e.jsx(f,{onClick:a,to:"/projects",children:"PROJECTS"})}),e.jsx(N,{children:e.jsx(f,{onClick:a,to:"/contacts",children:"CONTACT US"})})]})})]})})},U=d.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`,J=d.div`
  font-weight: bold;
  font-size: 24px;
  padding-left: 5rem;
  @media (max-width: 600px) {
    padding-left: 0.75rem;
  }
`,V=d.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1200px) {
    position: fixed;
    top: 4rem;
    right: 2rem;
    display: flex;
    z-index: 15;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin-bottom: 5px;
    transition: transform 0.3s, background-color 0.3s;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &.active {
    div:first-child {
      transform: translateY(8px) rotate(45deg);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:last-child {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`,X=d.div`
  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    padding: 1rem;
    transform: ${({showMenu:t})=>t?"translateY(0%)":"translateY(-100%)"};
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
`,Y=d.ul`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem;
  }
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`,N=d.li`
  a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 20px;
    display: flex;
    align-items: center;

    transition: color 0.3s;
    padding: 2vw;

    &:hover,
    &:active {
      // color: ${({theme:t})=>t.colors.nav_color};
      color: #6c10c6;
      scale: 1.2;
    }
    // color: #484848;
    color: #fff;
  }
`,C=({words:t,interval:o,typingDelay:a,erasingDelay:h})=>{const[s,r]=n.useState(0),[m,u]=n.useState(""),[w,g]=n.useState(!0);return n.useEffect(()=>{let p;if(w){const x=t[s],j=x.length;p=setInterval(()=>{u(v=>v.length===j?(g(!1),v):x.slice(0,v.length+1))},o)}else p=setInterval(()=>{u(x=>x.length===0?(g(!0),r(j=>(j+1)%t.length),""):x.slice(0,x.length-1))},h);return()=>clearInterval(p)},[s,t,o,a,h,w]),e.jsx("span",{children:m})};d.section`
  .contimg {
    margin-top: 25rem;
    text-align: center;
    justify-content: center;
    margin-bottom: 10rem;
    width: 100%;
  }

  .imggal {
    width: 70%;
    margin: 0 auto;

    @media (max-width: 900px) {
      width: 90%;
      margin: 0 auto;
    }
  }

  .image-gallery-slide .image-gallery-image {
    border-radius: 60px;
  }
`;const K="/assets/thrust2-e88b7b53.jpg",$="/assets/thrust-d25b0c78.jpg",_="/assets/thrust3-ef23575c.jpg",Z="/assets/workshop-c5dbb7e2.jpg",Q="/assets/tinkerersnight2024-c4aa0901.png";function q(){return e.jsx("div",{className:"h-[20rem] sm:h-[25rem] xl:h-[50rem] 2xl:h-[60rem] 3xl:h-[60rem]",children:e.jsxs(L,{slideInterval:2e3,children:[e.jsx("img",{src:$,alt:"..."}),e.jsx("img",{src:K,alt:"..."}),e.jsx("img",{src:Q,alt:"..."}),e.jsx("img",{src:_,alt:"..."}),e.jsx("img",{src:Z,alt:"..."})]})})}const ee=()=>e.jsxs(ie,{children:[e.jsx(i.div,{whileHover:{scale:1.5},className:"circle2"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle3"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"flex flex-col col-xl",id:"left",children:[e.jsx(i.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"hero-heading",children:"Tinkerers' Laboratory"}),e.jsx("div",{className:"hero-tag",children:"IIT Hyderabad"}),e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx(f,{to:"/contacts",children:e.jsx(i.button,{whileHover:{scale:1.2},whileTap:{scale:.8},className:"reachus",children:"Reach Us"})}),e.jsx("a",{href:"https://tlid.vercel.app",target:"_blank",children:e.jsx(i.button,{whileHover:{scale:1.2},whileTap:{scale:.8},className:"reachus",children:"Access Lab"})})]})]}),e.jsx("div",{className:"col-xl",id:"right",children:e.jsx("div",{className:"section-hero-image",children:e.jsx("picture",{children:e.jsx(i.img,{initial:{y:"20%",opacity:0,scale:.8},animate:{y:0,opacity:1,scale:1},transition:{duration:1},className:"pic1",src:"./images/Home.svg",alt:"image"})})})})]}),e.jsx("div",{className:"row",id:"aims",children:e.jsxs("div",{className:"col-lg-12",children:[e.jsx("div",{className:"ouraim",style:{color:"#fff"},children:"Our Aim"}),e.jsx("div",{className:"seperator"}),e.jsx("div",{className:"desp1",style:{color:"#fff"},children:"Here, at Tinkerers' Lab, our aim is to provide you a working space with vast ranges of tools in order to bring out the inner tinkerer in you"})]})}),e.jsxs("div",{className:"row",id:"aims2",children:[e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs(i.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#272338"},children:e.jsx("img",{src:"./images/aim1.svg",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#fff"},children:"Availability"}),e.jsx("div",{className:"line"}),e.jsx("div",{className:"desp2",style:{color:"#fff"},children:"We know that best ideas don't come in working hours only, given that, Tinkerers' lab is open 24/7 for students to tinker at their convenience"})]})]})}),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs(i.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#272338"},children:e.jsx("img",{src:"./images/aim2.svg",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#fff"},children:"Resources"}),e.jsx("div",{className:"line"}),e.jsx("div",{className:"desp2",style:{color:"#fff"},children:"We have a wide range of resources ,from the commonplace Raspberry Pis and Arduinos to CNCs and 3D Printers."})]})]})}),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsxs(i.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#272338"},children:e.jsx("img",{src:"./images/aim3.svg",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#fff"},children:"TL Talks"}),e.jsx("div",{className:"line"}),e.jsx("div",{className:"desp2",style:{color:"#fff"},children:"TL will host talks and sessions with innovators and entrepreneurs to boost the interest in new fields and push boundaries."})]})]}),e.jsx("div",{className:"hidden sm:block md:block xl:block hand",children:e.jsx("img",{src:"./images/hand.svg",alt:"hand"})})]})]})]}),e.jsx("div",{className:"flex flex-row justify-center my-10 sm:my-[15rem] md:my-[20rem] lg:my-[20rem]",children:e.jsxs("div",{className:"flex flex-col gap-[2rem] w-[65%]",children:[e.jsx("div",{className:"text-white text-[3rem] sm:text-[2rem] md:text-[3rem] lg:text-[5rem] text-center font-semibold",children:"UPCOMING WORKSHOPS"}),e.jsxs("div",{className:"flex flex-row items-center justify-evenly h-auto w-full cursor-pointer",children:[e.jsx(f,{to:"/workshops",children:e.jsx("img",{src:"./images/teachnook-logo.svg",alt:"workshops",className:"w-[18rem] h-[24rem] p-4 border-2"})}),e.jsx("div",{children:e.jsx("a",{href:"https://technocon.org/workshops/iit-hyderabad/",target:"_blank",children:e.jsx("img",{src:"./images/technocon.jpg",className:"w-[36rem] h-[22rem]",alt:"workshop-technocon"})})})]}),e.jsx("div",{className:"text-white text-[3rem] sm:text-[2rem] md:text-[3rem] lg:text-[5rem] text-center font-semibold mt-6",children:"HIGHLIGHTS"}),e.jsx(q,{})]})})]}),ie=d.section`
  .col-lg-4,
  .col-md-6 {
    padding-top: 20px;
  }
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  .hand {
    position: absolute;
    z-index: 3;
    right: 5vw;
    margin-bottom: 5vw;
  }
  .separator {
    border: 3px solid rgba(0, 0, 0, 0.1);
  }
  .desp2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    padding: 0rem 5vw;
    margin-bottom: 15vh;
  }

  #aims2,
  #aims {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    position: relative;
  }
  .line {
    margin: 2.5rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .heading {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;

    color: #6c10c6;
    padding-top: 4rem;
  }
  .content {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 39px;
    margin-top: -3.5rem;
    z-index: 1;
    height: 38rem;
  }
  .box {
    background: #eddaff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 95px;
    height: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .desp1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    margin: 3rem;
    margin-top: 20px;
  }
  .ouraim {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;

    color: #000000;
    padding-top: 7vh;
  }
  .reachus {
    margin-top: 3rem;
    width: 220px;
    height: 10vh;
    a {
      color: #fff;
    }

    background: #6c10c6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 46px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    align-items: center;
    text-align: center;

    color: #ffffff;
  }

  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }
  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }
  .col-xl-6 {
    text-align: center;
  }
  .col-xl {
    color: #fff;
    text-align: center;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }
  .pic1 {
    animation-name: rotation1;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 8s;
    animation-delay: 1s;
    // animation: rotation1 8s infinite linear;
  }
  @keyframes rotation1 {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(25deg);
    }
    25% {
      transform: rotate(-25deg);
    }
    25% {
      transform: rotate(-25deg);
    }
    25% {
      transform: rotate(25deg);
    }
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 624px; */
  }

  picture {
    text-align: center;
  }
  @media (min-width: 768px) {
    .desp2 {
      padding: 0rem 5vw;
    }
  }
  @media (max-width: 1200px) {
    .reachus {
      font-weight: 700;
      font-size: 24px;
      width: 75vw;
    }
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .desp2 {
      padding: 0rem 5vw;
    }
    .container {
      justify-content: center;
      width: 100vw;
    }
    .pic1 {
      display: none;
    }

    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`,te=["Think","Tinker","Transform"],se=200,ne=2e3,ae=100,re=()=>e.jsxs(oe,{children:[e.jsx("div",{className:"circle1"}),e.jsx("div",{className:"circle2"}),e.jsx("div",{className:"circle3"}),e.jsx("div",{className:"circle4"}),e.jsx("div",{className:"circle5"}),e.jsxs("div",{className:"container grid grid-two-column",id:"container",children:[e.jsxs("div",{className:"section-hero-data",children:[e.jsx("h2",{className:"text-white hero-heading",children:"Our Team"}),e.jsx("h3",{className:"hero-tag",children:"Tinkerers' Lab IITH"}),e.jsx("div",{className:"text-white hero-bottom",children:e.jsx(C,{words:te,interval:se,typingDelay:ne,erasingDelay:ae})})]}),e.jsx("div",{className:"section-hero-image",children:e.jsx("picture",{children:e.jsx("img",{src:"./images/Team.svg",alt:"image",className:"hero-img"})})})]}),e.jsxs("div",{className:"convener",children:[e.jsx("div",{className:"text-white position",children:"CONVENER"}),e.jsx("picture",{children:e.jsx("img",{src:"./images/arsh.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem]",children:"ARSH ARORA"})]}),e.jsx("div",{className:"circle8"}),e.jsx("div",{className:"circle9"}),e.jsxs("div",{className:"secretaries",children:[e.jsx("div",{className:"text-white position",children:"HEADS"}),e.jsxs("div",{className:"flex flex-row gap-10 img-secs",children:[e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/ayush.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Aayush Adlakha"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"TECHNICAL AFFAIRS"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/prabhat.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Prabhat Kumar"}),e.jsxs("div",{className:"text-white text-[2rem] text-center text-wrap",children:["MANAGEMENT",e.jsx("br",{})," AFFAIRS AND PRO"]})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/aditya.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Aditya Garg"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"MACHINE LEARNING"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/himanshu.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Himanshu S."}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"SOFTWARE DEVELOPMENT"})]})]}),e.jsxs("div",{className:"flex flex-row gap-10 img-secs",children:[e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/shriram.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Shriram Hari"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"MECHATRONICS"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/nisarg.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Nisarg Dodia"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"DESIGN"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/thameem.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Thameem Rasheed"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"DESIGN"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/sarthak.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Sarthak Singhal"}),e.jsxs("div",{className:"text-white text-[2rem] text-center",children:["CORPORATE",e.jsx("br",{})," NETWORKING & GROWTH"]})]})]}),e.jsxs("div",{className:"flex flex-row gap-10 img-secs",children:[e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/anuj.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Anuj Agarwal"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"OPERATIONS"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/varun.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Varun Srivastava"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"OPERATIONS"})]})]})]}),e.jsx("div",{className:"circle6"}),e.jsx("div",{className:"circle7"}),e.jsxs("div",{className:"cores",children:[e.jsx("div",{className:"text-white cores-position",children:"CORES"}),e.jsxs("div",{className:"cores-section",children:[e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:"SOFTWARE"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"ANEESH K"}),e.jsx("li",{children:"PRANJAL PRAJAPATI"}),e.jsx("li",{children:"KARAN GUPTA"}),e.jsx("li",{children:"AMOGH BINDAL"}),e.jsx("li",{children:"UTKARSH POL"}),e.jsx("li",{children:"PARTH DAWAR"}),e.jsx("li",{children:"BHUMIN HIRAPARA"}),e.jsx("li",{children:"JAAGRIT SINGLA"})]})]}),e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:" MACHINE LEARNING"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"SARAN KONALA"}),e.jsx("li",{children:"AAYUSH GUPTA"}),e.jsx("li",{children:"VARAD N. MALLURWAR"}),e.jsx("li",{children:"ADITYA VARUN V"}),e.jsx("li",{children:"KAUSHAL MORANKAR"}),e.jsx("li",{children:"SHRAVAN BADGUJAR"}),e.jsx("li",{children:"ATHARVA KULKARNI"}),e.jsx("li",{children:"ADAMYA VERMA"}),e.jsx("li",{children:"HARSH SINGH"})]})]}),e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:" MECHATRONICS"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"SONIT PATIL"}),e.jsx("li",{children:"ABHIJIT KASHYAP"}),e.jsx("li",{children:"JAIDEEP NIRMAL"}),e.jsx("li",{children:"PRAJWAL M"}),e.jsx("li",{children:"SRI HARINI"}),e.jsx("li",{children:"SARANG GUND"}),e.jsx("li",{children:"TAHA MOHINUDDIN"}),e.jsx("li",{children:"ABHIJIT RAJ"})]})]})]}),e.jsxs("div",{className:"cores-section",children:[e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:" DESIGN"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"PARVATHY SUJITH"}),e.jsx("li",{children:"K.J. SHREEVEL"}),e.jsx("li",{children:"PRANAV KUCHECHAR"}),e.jsx("li",{children:"BHUMI BAGDIYA"}),e.jsx("li",{children:"TANVI RASHMI VINEETH"}),e.jsx("li",{children:"SMARON BOURAH"}),e.jsx("li",{children:"ARMAN MAHAYAN"}),e.jsx("li",{children:"SAI CHARAN GAJULA"}),e.jsx("li",{children:"ANUP CHAVAN"})]})]}),e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:"EVENTS & PRO"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"RISHABH PILLAI"}),e.jsx("li",{children:"SHIVA SAI PAGILLA"}),e.jsx("li",{children:"ANANYA DUTPAL"}),e.jsx("li",{children:"HARSHIT DAHERIYA"}),e.jsx("li",{children:"UJJWAL KALRA"}),e.jsx("li",{children:"ABHEY GARG"}),e.jsx("li",{children:"PRAJWAL BHANSE"})]})]}),e.jsxs("div",{className:"core",children:[e.jsxs("div",{className:"text-white position",children:[" CORPORATE",e.jsx("br",{}),"NETWORKING & GROWTH"]}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"ANUSHKA AGARWAL"}),e.jsx("li",{children:"AADITYA LAD"}),e.jsx("li",{children:"ANKUR KALYAN"}),e.jsx("li",{children:"SARVESH GOYAL"}),e.jsx("li",{children:"ATHARVA LOHARE"}),e.jsx("li",{children:"SHUBHAM DADHICH"}),e.jsx("li",{children:"LABDHI ANAND"}),e.jsx("li",{children:"HANZALA AKHTER"})]})]})]}),e.jsx("div",{className:"cores-section",children:e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:" OPERATIONS"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"SHUBHAM NARE"}),e.jsx("li",{children:"AAKARSH VARSHNEY"}),e.jsx("li",{children:"NAVIN JOSHI"}),e.jsx("li",{children:"JATIN JAIN"}),e.jsx("li",{children:"PRANAY REDDY RAGI"}),e.jsx("li",{children:"OJAS KURUNDKAR"}),e.jsx("li",{children:"RAMUNI LALITH VISHNU"}),e.jsx("li",{children:"ARYAN GANDHI"}),e.jsx("li",{children:"ARYAN AGARWAL"})]})]})})]})]}),oe=d.section`
  padding: 9rem 0;
  .circle1{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }
  .circle2{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }
  .circle3{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }
  .circle4{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }
  .circle5{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }
  .section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
    margin-top:250px;
    margin-left: 15rem;
  }
  .hero-heading{
    position: absolute;
    // width: 431px; 
    // height: 170px;
    left: 15rem;
    top: 310px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
     line-height: 85px;
  }
  .hero-tag{
    position: absolute;
    width: 1008px;
    height: 580px;
    left: 15rem;
    top: 406px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }
  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }
  picture{
    text-align: end;
  }
  .hero-img{
    width: 100%;
  }
  .convener{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin-top:180px;
    .position{
      padding: 2rem 0;
      color: #000;
      text-align: center;
      font-size: 3rem;
      font-family: Inter;
      font-weight: 700;
      // animation: fadeIn 5s;
      
      -webkit-animation: slide-top 1s ease-in reverse ;
      animation: slide-top 1s ease-in reverse ;
      
    }
    img{
      width: 262.292px;
      height: 280px;
    }
  }
  .secretaries{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    margin:30px;
    
    .position{
      padding: 7rem 0;
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
      // animation: fadeIn 8s;
      -webkit-animation: slide-top 2s ease-in reverse ;
      animation: slide-top 2s ease-in reverse ;
      
    }
    .img-secs{
      display: flex;
      flex-direction: row;
      margin-bottom:40px;
      justify-content: center;
      animation: fadeIn ease 5s;
      -webkit-animation: fadeIn ease 5s;
      -moz-animation: fadeIn ease 5s;
      -o-animation: fadeIn ease 5s;
      -ms-animation: fadeIn ease 5s;
      
    }
  }
  .cores{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    margin:30px;
    
    .cores-position{
    
    -webkit-animation: slide-top 3s ease-in reverse ;
    animation: slide-top 3s ease-in reverse ;
    //  animation: fadeIn 10s;
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
    }
    .cores-section{
      width: 100%;
      display: flex;
      justify-content: space-around;
      .core{
        
        width: 323px;
        height: 500px;
        left: 479px;
        top: 2487px;
        margin-bottom:200px;
        .position{
          width:auto;
          margin-left:0px;  
          padding: 2rem 0;
          color: #000;
          text-align: center;
          font-size: 35px;
          font-family: Inter;
          font-weight: 700;  
          margin-top:40px;
          -webkit-animation: slide-top 4s ease-in reverse ;
          animation: slide-top 4s ease-in reverse ;
         
        }
  
        .name-cores{
          font-family: Inter;
          font-size:25px;
          color: #6C10C6;
          text-align: center;
          -webkit-animation: slide-top 4s ease-in reverse ;
          animation: slide-top 4s ease-in reverse ;
         
        }
      }
      
    
    } 
  }
 @-webkit-keyframes slide-top {
   0% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
   }
   100% {
     -webkit-transform: translateY(-100px);
             transform: translateY(-100px);
   }
 }
 @keyframes slide-top {
   0% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
   }
   100% {
     -webkit-transform: translateY(-100px);
             transform: translateY(-100px);
   }
 }
 @keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
 
  .circle6{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 10rem;
    top: 190rem;
  }
  .circle7{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 15rem;
    top: 195rem;
  }
  .circle8{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 200rem;
    top: 90rem;
  }
  .circle9{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 195rem;
    top: 100rem;
  }
@media (max-width: 1200px) {
       #container{
        text-align: center;
       }
      .section-hero-image{
        display:none;
      }
      .section-hero-data{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2vh;
      height: max-content;
      width: 95vw;
      margin-top: -15vh;
      

      }

      .hero-heading {
        // top:180px;
        margin-top:70px;

        // font-weight: 800;
        // font-size: 50px;
        // left:50px;
        // text-align: center;

        display: flex;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        width: auto;
        height: auto;
        font-size: 5.5rem;
        position: unset;
      }

      
      .hero-tag {
        margin-top:0px;
        
        // font-weight: 500;
        // font-size: 30px;
        // left:30px;
        // width:auto;
        // height:auto;
        // text-align:center;
        font-family: 'Inter';
        font-style: normal;
        width: auto;
        height: auto;
        position: unset;
        font-size: 4rem;
        line-height: 4rem;
      }

      .hero-bottom {
        // font-size:30px;
        // margin-top:1px;
        margin-left:30px;
        margin-top:0px;
        text-align: center; 

        font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 39px;
    width: auto;
    height: auto;
    position: unset;
        
      }
      
      .circle1 {
        display: none;
      }
  
      .circle2 {
        display: none;
      }
  
      .circle3 {
        display: none;
      }
  
      .circle4 {
        display: none;
      }
      .circle5 {
        display: none;
      }
      .circle6 {
        display: none;
      }
      .circle7 {
        display: none;
      }
      .circle8 {
        display: none;
      }
      .circle9 {
        display: none;
      }
      .hero-img{
        display: none;
      }
      
      .secretaries{
        
        .img-secs{
          display:flex;
          flex-wrap: wrap;
          align-content: center;
          gap: 3rem;
        }
      }
      .cores{
        
        
        .cores-section{
          display:flex;
          flex-wrap: wrap;
          
          .core{
            margin-bottom:0px;
            height:fit-content;
            
            .position{
              text-align: center;
              font-size:30px;
              margin-left:0px;
            }
            
            .name-cores{
              font-size:20px;
              text-align: center;
              padding-left:0rem;
              
            }
          }
        }
      }
  }
`,le="/assets/cyberevent-a83abfc2.png",ce="/assets/tinkering101ep2-af648a49.png",de="/assets/tinkering101ep1-6774b441.png",me="/assets/tinkerersnight-7a7d2eb8.png",he="/assets/tinkerersnight2024-c4aa0901.png",xe="/assets/orientation-25d75c5e.jpg",ge="/assets/micromouse-62f7404c.png",pe="/assets/treasure-4e1c9c54.jpg",fe="/assets/keynote-7c372305.jpg",ue="/assets/workshop-b8d591cc.jpg",je="/assets/thrust-ff25c4ce.jpg",ve=()=>{const t=["Think","Tinker","Transform"],s={backgroundImage:`url(${le})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},r={backgroundImage:`url(${he})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},m={backgroundImage:`url(${ue})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},u={backgroundImage:`url(${je})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},w={backgroundImage:`url(${fe})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},g={backgroundImage:`url(${pe})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},p={backgroundImage:`url(${ge})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},x={backgroundImage:`url(${xe})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},j={backgroundImage:`url(${ce})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},v={backgroundImage:`url(${de})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},A={backgroundImage:`url(${me})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"};return e.jsxs(ye,{children:[e.jsx(i.div,{whileHover:{scale:1.5},className:"circle1"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle2"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle3"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle4"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle5"}),e.jsx("div",{className:"circle6"}),e.jsx("div",{className:"circle7"}),e.jsx("div",{className:"circle8"}),e.jsx("div",{className:"circle9"}),e.jsx("div",{className:"circle10"}),e.jsx("div",{className:"circle11"}),e.jsx("div",{className:"circle12"}),e.jsx("div",{className:"circle13"}),e.jsx("div",{className:"circle14"}),e.jsx("div",{className:"circle15"}),e.jsx("div",{className:"circle16"}),e.jsx("div",{className:"circle17"}),e.jsxs("div",{className:"container grid grid-two-column",children:[e.jsxs("div",{className:"section-hero-data",children:[e.jsx("h2",{className:"text-white hero-heading",children:"Events"}),e.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),e.jsxs("h4",{className:"text-white hero-bottom",children:["  ",e.jsx(C,{words:t,interval:200,typingDelay:2e3,erasingDelay:100})]})]}),e.jsx("div",{className:"section-hero-image",children:e.jsx("picture",{children:e.jsx("img",{src:"./images/Event.svg",alt:"image",className:"hero-img"})})})]}),e.jsxs("div",{className:"flex-container",children:[e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:u,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"Thrust, the flagship event organized by Tinkerers’ Lab, took place over three exciting days from March 1st to 3rd, 2024. The event was brimming with activities, creating a dynamic and engaging atmosphere for all participants."})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name",children:"Thrust 2024"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:m,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"Tinkerers’ Lab hosted workshops and bootcamps covering more than 10 essential topics across various disciplines. Each session, supported by Tinkerers’ Lab, attracted an average audience of over 200 participants."})})}),e.jsxs("div",{className:"Left-Img",children:[e.jsx("div",{className:"image-name",children:"Workshops"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:r,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"Tinkering Night is the annual signature event of Tinkerers’ Lab, where students gather in the lab from approximately 10 PM to 6 AM to work on a project of their choice, striving to complete it successfully by morning."})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name",children:"Tinkerers' Night 2024"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:w,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"During the keynote talk, students gained valuable insights into industry requirements and current technologies in use. Bosch initiated negotiations with Tinkerers’ Lab (TL) for several industry-based projects, indicating potential collaborations ahead."})})}),e.jsxs("div",{className:"Left-Img",children:[e.jsx("div",{className:"image-name",children:"Thrust-Keynote Talk"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:g,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"The nighttime treasure hunt captivated students as they navigated through clues to uncover hidden prizes, significantly elevating enthusiasm and participation. Featuring 10 competitive teams, each consisting of 4-5 members, the event amplified excitement and awareness about Thrust among students."})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name",children:"Treasure Hunt"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:p,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"As part of the inter-hostel general championship at IIT Hyderabad, Tinkerers’ Lab volunteered to conduct the Micromouse competition with a high level of professionalism. They led the development of multiple micromouse bots in collaboration with the student community."})})}),e.jsxs("div",{className:"Left-Img",children:[e.jsx("div",{className:"image-name",children:"Micromouse"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:x,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"For the Orientation event, Tinkerers’ Lab welcomed new students with an engaging introduction to its facilities and resources. The event provided an overview of various projects and activities, encouraging students to explore their creativity and technical skills. With hands-on demonstrations and interactive sessions, Tinkerers’ Lab successfully inspired enthusiasm and participation among the newcomers."})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name",children:"Orientation-2023"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:s,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"For the Cybercon event, Tinkerers’ Lab, in collaboration with the Cyber Security Club Kludge, hosted an engaging cyber conclave. The event featured expert talks, hands-on workshops, and interactive sessions focused on the latest trends and challenges in cybersecurity. Participants gained valuable knowledge and skills, while the collaborative effort successfully fostered a deeper interest and understanding of cybersecurity among students."})})}),e.jsxs("div",{className:"Left-Img",children:[e.jsx("div",{className:"image-name",children:"CyberCon-2023"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:j,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"For the Tinkering Episodes, Tinkerers’ Lab conducted a series of interactive sessions designed to inspire creativity and innovation. Each episode featured expert-led discussions, hands-on activities, and collaborative projects, covering a wide range of topics. These sessions provided students with practical skills and insights, fostering a vibrant learning environment and encouraging continuous exploration and tinkering."})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name-2",children:"Tinkering-101-Episode-02"}),e.jsx("div",{className:"decoration-2"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:v,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"For the Tinkering Episodes, Tinkerers’ Lab conducted a series of interactive sessions designed to inspire creativity and innovation. Each episode featured expert-led discussions, hands-on activities, and collaborative projects, covering a wide range of topics. These sessions provided students with practical skills and insights, fostering a vibrant learning environment and encouraging continuous exploration and tinkering."})})}),e.jsxs("div",{className:"Left-Img",children:[e.jsx("div",{className:"image-name-3",children:"Tinkering-101-Episode-01"}),e.jsx("div",{className:"decoration-3"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:A,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"For Tinkerers’ Night, Tinkerers’ Lab hosted an immersive overnight event where students gathered from 10 PM to 6 AM to work on projects of their choice. The event featured collaborative problem-solving, expert guidance, and a dynamic atmosphere, allowing participants to bring their ideas to life. Tinkerers’ Night successfully fostered creativity, teamwork, and innovation, making it a memorable and impactful experience for all involved."})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name-4",children:"Tinkerers-Night"}),e.jsx("div",{className:"decoration-4"})]})]})})]})]})},ye=d.section`
  padding: 9rem 0;

  .circle1{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }
 
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:1%;
    gap:25%;
  }

  .flex-item {
    padding: 10px;
    text-align: center;
    align-items: center;
    width:75%;
    animation: fade-in 2.5s ease-in;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .Right-Img {
    position: relative;
    display: inline-block;
    align-items: center;
    left:50%;
     
    
  }
  .Left-Img{
    position: relative;
    display: inline-block;
    align-items: center;
    right:50%;
  }

  .image-name {
    align-items:center;
    position: relative;
    width: 100%;
    height: 135px;
    bottom:6vh;
    z-index: 1;
    background: #8C3FD7;
    border-radius: 67.5px;
    aspect-ratio: 4.78;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 58px;
    color: #FFFFFF;
    padding-top: 35px;
    padding-left: 20%;
    text-align: left;
    margin-bottom: 20px;
  }
  .image-name-2 {
    align-items:center;
    position: relative;
    width: 120%;
    height: 135px;
    bottom:60px;
    z-index: 1;
    background: #8C3FD7;
    border-radius: 67.5px;
    aspect-ratio: 4.78;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #FFFFFF;
    padding-top: 5%;
    padding-right:8%;
    text-align: left;
    margin-bottom: 20px;
    right:18%;
    padding-left:3%;
  }
  .image-name-3{
  align-items:center;
  position: relative;
  width: 120%;
  height: 135px;
  bottom:20px;
  z-index: 1;
  background: #8C3FD7;
  border-radius: 67.5px;
  aspect-ratio: 4.78;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
  padding-top: 6%;
  padding-left:15%;
  text-align: left;
  margin-bottom: 20px;
  left:6%;
  }
  .image-name-4 {
  align-items:center;
  position: relative;
  width: 100%;
  height: 135px;
  bottom:20px;
  z-index: 1;
  background: #8C3FD7;
  border-radius: 67.5px;
  aspect-ratio: 4.78;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
  padding-top: 6%;
  padding-left:20%;
  text-align: left;
  margin-bottom: 20px;
  right:2%;
  }
  .decoration {
    width: 110%;
    height: 100%;
    background: #6C10C6;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    border-radius: 79.5px;
    aspect-ratio: 3.96;
    position:absolute;
    bottom:30%;
    right:6%;
  }
  .decoration-2 {
  width: 110%;
  height: 159px;
  background: #6C10C6;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 79.5px;
  aspect-ratio: 3.96;
  position:absolute;
  bottom:35%;
  right:4%;
  }
  .decoration-3{
    width: 120%;
  height: 100%;
  background: #6C10C6;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 79.5px;
  aspect-ratio: 3.96;
  position:absolute;
  bottom:10%;
  left:2%;
  }
  .decoration-4{
    width: 110%;
    height: 100%;
  background: #6C10C6;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 79.5px;
  aspect-ratio: 3.96;
  position:absolute;
  bottom:15px;
  }
  @media (max-width: 1200px) {
    .flex-container {
      padding: 0%;
      gap: 25px;;
    }
  
    .flex-item {
      width: 100%;
      left:20%;
    }
  
    .Right-Img,
    .Left-Img {
      left: auto;
      right: auto;
    }
  
    .image-name{
      font-size: 32px;
      padding-top: 4%;
      padding-left:25%;
      width:110%;
      height:100px;
      top:2px;
      left:-5%;
    }
   
    .image-name-3{
      font-size: 32px;
      padding-top: 4.5%;
      padding-left:14%;
      width:110%;
      left:-4%;
      height:100px;
      top:2px;
    }
    .image-name-4 {
      font-size: 32px;
      padding-top: 4.5%;
      padding-left:25%;
      width:110%;
      left:-4%;
      height:100px;
      top:2px;
    }
    .image-name-2{
      font-size: 30px;
      padding-top: 4%;
      padding-left:15%;
      width:110%;
      left:-4%;
      top:2px;
      height:100px;
    }
    .decoration{
      width:110%;
      height:100px;
      top:7%;
      left:-4%;
    }
    .decoration-2{
      width:110%;
      height:100px;
      top:7%;
      left:-4%;
    }
    .decoration-3{
      width:110%;
      height:100px;
      top:7%;
      left:-4%;
    }
    .decoration-4{
      width:110%;
      height:100px;
      top:7%;
      left:-4%;
    } 

  }
  @media (max-width: 767px){
    .image-name{
      font-size: 5vw;
      padding-top: 0%;
      padding-left:6%;
      width:45vw;
      height:7vh;
      top:-1.5vh;
      left:0%;
    }
    .image-name-2,
    .image-name-3{
      font-size: 3.5vw;
      width:53vw;
      padding-left:5%;
      left:4%;
      top:-1.5vh;
      height:7vh;
      padding-top: 0%;
    }
    .image-name-4 {
      font-size: 5vw;
      padding-top: 0%;
      padding-left:6%;
      width:45vw;
      height:7vh;
      top:-1.5vh;
      left:10%;
    }

    .decoration,
    .decoration-2,
    .decoration-3,
    .decoration-4
    {
      display:none;
    }
  }

  
  .section-hero-image{
    animation: fade-i 2s ease;
  }
  @keyframes fade-i {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  
  .circle2{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }

  .section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-heading{
    position: absolute;
    /* width: 431px; */
    /* height: 170px; */
    left: 15rem;
    top: 310px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    /* line-height: 85px; */
  }

  .hero-tag{
    position: absolute;
    width: 1008px;
    height: 580px;
    left: 15rem;
    top: 406px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom{
    position:  absolute;
    width: 1008px;
    height: 525px;
    left: 15rem;
    top: 485px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
  }
  @media (max-width: 1200px) {
    .section-hero-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2vh;
      height: max-content;
      width: 95vw;
      margin-top: -15vh;
    }

    .hero-heading {
      display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    width: auto;
    height: auto;
    font-size: 8.5rem;
    position: unset;
}

    .hero-tag {
    font-family: 'Inter';
    font-style: normal;
    width: auto;
    height: auto;
    position: unset;
    font-size: 3rem;
    line-height: 4rem;
    }

    .hero-bottom {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 39px;
    width: auto;
    height: auto;
    position: unset;

    } 

    .section-hero-image {
      display: none;
    }
    .section-hero-data {
        height: 80vh;
    }

    .circle1, .circle2, .circle3, .circle4, .circle5 {
      display: none;
    }
  }

  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }
  @media (max-width: 1000px) {
    .section-hero-image {
      display: none;
    }
  }

  .hero-img{
    width: 100%;
  }
 
  .circle6{
    position: absolute;
    width: 20px;
    height: 20px;
    left: 53px;
    top: 941px;
    border-radius: 50%;
    background: #6C10C6;
    }
    
.circle7{
 position: absolute;
width: 12px;
height: 12px;
left: 561px;
top: 1612px;
background: #6C10C6;
border-radius:50%;
}
.circle8{

position: absolute;
width: 20px;
height: 20px;
left: 494px;
top: 1649px;
border-radius:50%;
background: #6C10C6;

}
.circle9{
  

position: absolute;
width: 20px;
height: 20px;
left: 63px;
top: 1873px;
border-radius:50%;
background: #6C10C6;

}
.circle10{
 

position: absolute;
width: 12px;
height: 12px;
left: 499px;
top: 2544px;
border-radius:50%;
background: #6C10C6;

}
.circle11{
position: absolute;
width: 20px;
height: 20px;
left: 561px;
top: 2591px;
border-radius:50%;
background: #6C10C6;

}
.circle12{

position: absolute;
width: 20px;
height: 20px;
left: 53px;
top: 2829px;
border-radius:50%;
background: #6C10C6;

}
.circle13{
 

position: absolute;
width: 12px;
height: 12px;
left: 507px;
top: 3480px;

background: #6C10C6;
border-radius:50%;
}
.circle14{
position: absolute;
width: 12px;
height: 12px;
left: 707px;
top: 3180px;

background: #6C10C6;
border-radius:50%;
}
.circle15{
position: absolute;
width: 20px;
height: 20px;
left: 103px;
top: 3825px;

background: #6C10C6;
border-radius:50%;
}
.circle16{

  position: absolute;
  width: 12px;
  height: 12px;
  left: 499px;
  top: 3996px;
  border-radius:50%;
  background: #6C10C6;
  
}
.circle17{

position: absolute;
width: 20px;
height: 20px;
left: 561px;
top: 4043px;
border-radius:50%;
background: #6C10C6;

}
.Effect {
  transform: translate3d(0, 0, 0);
  position: relative;
 width: 72%; 
  aspect-ratio: 1.72;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;
  z-index:0.5;
}
.Effect:before,
.Effect:after {
  transform: translate3d(0, 0, 0);
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // border-radius:67.5px;
}
.Effect:after {
  background: transparentize(#031625, 0.15);
  opacity: 1;
  transition: opacity 0.5s ease;
}
.Effect:before {
  background: rgba(104, 50, 172, 0.6); 
  z-index: 1;
  opacity: 0;
  transform: translate3d(0, 10, 0) translateY(100%);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.Effect:hover {
  width: 72.5%;
}
.Effect:hover:after {
  opacity: 0;
}

.Effect:hover:before {
  opacity: 1;
  transform: translate3d(0, 0, 0) translateY(0);
  transition: opacity 1s ease, transform 1s ease 0.25s;
}
.Effect:hover .Content {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.75s ease 0.5s;
}
.Effect:hover .Effect {
  filter: grayscale(0);
}
.Content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 10;
  text-align: center;
  margin: 0 1.618em;
  top: 40%; 
  opacity: 0;
  color: white; 
  font-size: 20px;
}
@media (max-width: 1000px) {
  .circle6,
  .circle7,
  .circle8,
  .circle9,
  .circle10,
  .circle11,
  .circle12,
  .circle13,
  .circle14,
  .circle15,
  .circle16,
  .circle17
  {
    display: none;
  }
}
`,be=["Think","Tinker","Transform"],we=200,Ne=2e3,ke=100,Ae=()=>e.jsxs(Ce,{children:[e.jsx(i.div,{whileHover:{scale:1.5},className:"circle1"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle2"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle3"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle4"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle5"}),e.jsxs("div",{whileHover:{scale:1.5},className:"container",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-xl",id:"left",children:[e.jsx(i.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"text-white hero-heading",children:"Inventory"}),e.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),e.jsx("h4",{className:"text-white hero-bottom",children:e.jsx(C,{words:be,interval:we,typingDelay:Ne,erasingDelay:ke})})]}),e.jsx("div",{className:"col-xl",id:"right",children:e.jsx("picture",{children:e.jsx(i.img,{initial:{y:"20%",opacity:0,scale:.8},animate:{y:0,opacity:1,scale:1},transition:{duration:1},src:"./images/Inventory.svg",alt:"image",className:"hero-img"})})})]}),e.jsxs("div",{className:"wip",children:[e.jsx("h2",{className:"text-white",children:"Work in Progress"}),e.jsx("picture",{children:e.jsx("img",{src:"./images/wip1.png",alt:"image",className:"hero-img"})})]})]})]}),Ce=d.section`
  padding: 9rem 0;
  .col-xl {
    text-align: center;
  }
  .wip {
    padding-top: 9rem;
  }
  .wip .hero-img {
    width: 10rem;
    animation: rotation 10s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 41rem;
    top: 67rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 38rem;
    top: 18rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container {
    justify-content: center;
    text-align: center;
    width: 100vw;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture {
    text-align: end;
  }

  .hero-img {
    width: 100%;
  }
  @media (max-width: 1200px) {
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .container {
      justify-content: center;
      text-align: center;
      width: 100vw;
    }

    .wip h2 {
      font-size: 4rem;
      padding-bottom: 5rem;
    }
    .pic1 {
      display: none;
    }
    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`,Ie=["Think","Tinker","Transform"],Te=200,Se=2e3,ze=100,Re=()=>e.jsxs(Ee,{children:[e.jsx(i.div,{whileHover:{scale:1.5},className:"circle1"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle2"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle3"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle4"}),e.jsx(i.div,{whileHover:{scale:1.5},className:"circle5"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-xl",id:"left",children:[e.jsx(i.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"text-white hero-heading",children:"Projects"}),e.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),e.jsx("h4",{className:"text-white hero-bottom",children:e.jsx(C,{words:Ie,interval:Te,typingDelay:Se,erasingDelay:ze})})]}),e.jsx("div",{className:"col-xl",id:"right",children:e.jsx("picture",{children:e.jsx(i.img,{initial:{y:"20%",opacity:0,scale:.8},animate:{y:0,opacity:1,scale:1},transition:{duration:1},src:"./images/Project1.svg",alt:"image",className:"hero-img"})})})]}),e.jsxs("div",{className:"row",id:"collab-form",children:[e.jsx("div",{className:"text-white text-[3rem] mb-[3rem]",children:"Updated list of projects for 2023-24 is coming soon"}),e.jsx("h3",{style:{fontWeight:500,color:"white"},children:"Projects Available"}),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs(i.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#272338"},children:e.jsx("img",{src:"./images/mlp.svg",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"text-white heading",children:"ML Project"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"text-white desp2",children:[e.jsx("div",{children:"Click on the Below Link to apply for a Machine Learning Project"}),e.jsx(i.div,{whileHover:{scale:1.2},whileTap:{scale:.8},children:e.jsx(i.a,{style:{fontSize:"22px",fontWeight:550,color:"#6c10c6"},href:"",children:"Apply"})})]})]})]})}),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs(i.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#272338"},children:e.jsx("img",{src:"./images/swp.svg",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"text-white heading",children:"Software Project"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"text-white desp2",children:[e.jsx("div",{children:"Click on the Below Link to apply for a Software Project"}),e.jsx(i.div,{whileHover:{scale:1.2},whileTap:{scale:.8},children:e.jsx(i.a,{style:{fontSize:"22px",fontWeight:550,color:"#6c10c6"},href:"",children:"Apply"})})]})]})]})}),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs(i.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#272338"},children:e.jsx("img",{src:"./images/otp.svg",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"text-white heading",children:"Others"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"text-white desp2",children:[e.jsxs("div",{children:[" ","Click on the Below Link to apply for Other type of Projects"]}),e.jsx(i.div,{whileHover:{scale:1.2},whileTap:{scale:.8},children:e.jsx(i.a,{style:{fontSize:"22px",fontWeight:550,color:"#6c10c6"},href:"",children:"Apply"})})]})]})]})})]}),e.jsx("h3",{style:{fontSize:"30px",fontWeight:500,paddingTop:"70px",color:"black"},children:"If you have any innovative ideas and want to combine with TL, please fill the below form"}),e.jsx(i.button,{whileHover:{scale:1.2},whileTap:{scale:.8},className:"btn",children:"Apply"})]})]}),Ee=d.section`
  padding: 9rem 0;
  .col-lg-4,
  .col-md-6 {
    padding-top: 20px;
  }
  .box {
    background: #eddaff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 95px;
    height: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .heading {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;

    color: #6c10c6;
    padding-top: 4rem;
  }
  .line {
    margin: 2.5rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .desp2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #001824;
    padding: 0rem 5vw;
  }
  a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 15vh;
  }
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  #collab-form {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    position: relative;
  }

  .content {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 39px;
    margin-top: -3.5rem;
    z-index: 1;
    padding-bottom: 30px;
  }
  .col-xl {
    text-align: center;
  }
  .btn {
    margin-top: 50px;
    width: 200px;
    height: 7vh;
    a {
      color: #fff;
    }
    background: #6c10c6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 46px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 41rem;
    top: 67rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 38rem;
    top: 18rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container {
    justify-content: center;
    text-align: center;
    width: 100vw;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture {
    text-align: end;
  }

  .hero-img {
    width: 70%;
  }
  @media (max-width: 1200px) {
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .container {
      justify-content: center;
      text-align: center;
      width: 100vw;
    }
    .wip h2 {
      font-size: 4rem;
      padding-bottom: 5rem;
    }
    .pic1 {
      display: none;
    }
    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`,He=["Think","Tinker","Transform"],Le=200,Pe=2e3,Fe=100,De=()=>{const[t,o]=n.useState({name:"",email:"",message:"",send:!1}),[a,h]=n.useState({name:!1,email:!1,message:!1,send:!1}),[s,r]=n.useState(!1);function m(l){const{name:c,value:S}=l.target;o(H=>({...H,[c]:S}))}const u=n.useRef(null);function w(l){const c=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;l.preventDefault(),h({name:!t.name,email:!(t.email&&c.test(t.email)),message:!t.message,send:!!(t.name&&t.email&&c.test(t.email)&&t.message)}),t.name&&t.email&&c.test(t.email)&&t.message&&r(!0),setInterval(()=>{g.length<5?p(g+"."):p(".")},1e3),t.name&&t.email&&c.test(t.email)&&t.message&&fetch("https://script.google.com/macros/s/AKfycbweHBn46bB_ikYWUgVWtfV1S-IAB3bxLCA5eV0zHFKaDArWNECVvsr05AESUfj8A-St/exec",{method:"POST",body:new FormData(u.current)}).then(S=>r(!1),o({name:"",email:"",message:"",send:!0}),setTimeout(()=>{o({name:"",email:"",message:"",send:!1})},8e3)).catch(S=>console.log(S))}const[g,p]=n.useState("."),x=e.jsx("div",{className:"section-message-submit",children:e.jsx("button",{children:"Submit"})}),j=e.jsx("div",{className:"section-message-submitting",children:e.jsxs("button",{disabled:!0,children:["Submitting",g]})}),v=e.jsxs("div",{className:"send-confirm",children:[e.jsx("p",{children:"Thanks for filling the form"}),e.jsx("p",{children:"We will reach out to you soon!"})]}),[A,R]=n.useState(z());function z(){return{width:window.innerWidth,height:window.innerHeight}}n.useEffect(()=>{const l=()=>{R(z())};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[A]),y.registerPlugin(P);const I=n.useRef(null),T=n.useRef(null),E=n.useRef(null);return A.width>=1200?n.useEffect(()=>{const l=I.current;y.fromTo(l,{autoAlpha:0,translateX:"10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:l,start:"50px 45%",end:"+=1290"}});const c=T.current;y.fromTo(c,{autoAlpha:0,translateX:"-10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:c,start:"50px 45%",end:"+=1250"}})},[]):A.width<=770?n.useEffect(()=>{const l=I.current;y.fromTo(l,{autoAlpha:0,translateX:"10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:l,start:"-55% 50%",end:"+=1280"}});const c=T.current;y.fromTo(c,{autoAlpha:0,translateX:"-10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:c,start:"-65% 50%",end:"+=1250"}})},[]):n.useEffect(()=>{const l=I.current;y.fromTo(l,{autoAlpha:0,translateX:"10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:l,start:"-60% 50%",end:"+=1320"}});const c=T.current;y.fromTo(c,{autoAlpha:0,translateX:"-10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:c,start:"-60% 50%",end:"+=1300"}})},[]),e.jsxs(Me,{className:"bg-white",children:[e.jsx("div",{className:"ellipse1"}),e.jsx("div",{className:"ellipse2"}),e.jsx("div",{className:"circle1"}),e.jsx("div",{className:"circle2"}),e.jsx("div",{className:"circle3"}),e.jsx("div",{className:"circle4"}),e.jsx("div",{className:"circle5"}),e.jsxs("div",{className:"container grid grid-two-column",children:[e.jsxs("div",{className:"section-hero-data",children:[e.jsx("h2",{className:"hero-heading",children:"Contact us!"}),e.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),e.jsx("div",{className:"hero-bottom",children:e.jsx(C,{words:He,interval:Le,typingDelay:Pe,erasingDelay:Fe})})]}),e.jsx("div",{className:"section-hero-image",children:e.jsx("picture",{children:e.jsx("img",{src:"./images/Contacts.svg",alt:"image",className:"hero-img",ref:E})})})]}),e.jsxs("div",{className:"section-map-message",children:[e.jsx("div",{className:"section-map",ref:T,children:e.jsx("div",{className:"map-iframe",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.1025061004142!2d78.12566068992736!3d17.597490805694715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf706d15f396d%3A0xd8767eda72322c70!2sTinkerers'%20Laboratory%20IITH!5e0!3m2!1sen!2sin!4v1688018342297!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})})}),e.jsxs("div",{className:"section-message",ref:I,children:[e.jsx("h4",{children:"Message Us"}),e.jsxs("form",{className:"section-message-box",onSubmit:w,noValidate:!0,ref:u,children:[e.jsxs("div",{className:"section-message-box-wraps",children:[e.jsx("label",{htmlFor:"message-name",children:"Name"}),e.jsx("input",{type:"text",placeholder:"Enter here",id:"message-name",name:"name",value:t.name,onChange:m})]}),a.name&&e.jsx("div",{className:"message-warning",children:"Enter your name"}),e.jsxs("div",{className:"section-message-box-wraps",children:[e.jsx("label",{htmlFor:"message-email",children:"Mail ID"}),e.jsx("input",{type:"email",placeholder:"Enter here",id:"message-email",name:"email",value:t.email,onChange:m}),a.email&&e.jsx("div",{className:"message-warning",children:"Enter your email"})]}),e.jsxs("div",{className:"section-message-box-wraps",children:[e.jsx("label",{htmlFor:"message-message",children:"Enter your Message"}),e.jsx("textarea",{placeholder:"Enter here",id:"message-message",name:"message",value:t.message,onChange:m}),a.message&&e.jsx("div",{className:"message-warning",children:"Enter your message"})]}),s?j:x,t.send&&v]})]})]})]})},Me=d.section`
  padding: 9rem 0;

  .ellipse2 {
    position: absolute;
    width: 681px;
    height: 669px;
    left: 0;
    top: -441px;
    z-index: -1;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(0, 224, 255, 0.5) 0%,
        rgba(51, 182, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .ellipse1 {
    position: absolute;
    width: 808px;

    @media (max-width: 1200px) {
      width: 700px;
    }
    height: 794px;
    left: -363px;
    top: -349px;
    z-index: -1;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(108, 16, 198, 0.5) 0%,
        rgba(186, 104, 200, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .circle1{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }

  .hero-heading{
    position: absolute;
    /* width: 431px; */
    /* height: 170px; */
    left: 15rem;
    top: 310px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 8rem;
    /* line-height: 85px; */
  }

  .hero-tag{
    position: absolute;
    width: 1008px;
    height: 580px;
    left: 15rem;
    top: 406px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 5rem;
    line-height: 7rem;
  }

  .hero-bottom{
    position: absolute;
    width: 1008px;
    height: 525px;
    left: 32rem;
    top: 485px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 39px;
  }

  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture{
    text-align: end;
  }

  .hero-img{
    width: 100%;
  }

  picture {
    animation: leftright 6s infinite linear;
  }

  @keyframes leftright {
    0%,
    100% {
      transform: translateX(3%);
    }
    50% {
      transform: translateX(1%);
    }
  }

  .section-map-message {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vw;
    height: 105vh;
  }
  .section-map {
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin-left: -7vw;
    margin-top: 12vh;
  }

  .section-message {
    height: 80vh;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-message-box {
    width: 40vw;
    max-width: 49rem;
    height: max-content;
    border-radius: 68px;
    background: #FFF;
    box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    padding: 4rem 4rem;
    margin-top: 1.5rem;

  }

  .section-message h4 {
    color: #6C10C6;
    font-size: 4rem;
    font-family: Inter;
  }

  .section-message-box label {
    font-size: 1.65rem;
    font-weight: 700;
    font-family: Inter;
    margin-top: 1rem;
    margin-left: 0.3rem;
  }

  .section-message-box-wraps {
    display: flex;
    flex-direction: column;
  }

  #message-name, #message-email {
    width: 100%;
    height: 4.6rem;
    border-radius: 16px;
    background: #F3F3F3;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10) inset;
    color: #757575;
    font-size: 1.55rem;
    line-height: 5.3125rem;
    padding:  0.65rem 1.5rem;
    border: none;
    outline: none;
    font-family: Inter;
    margin-top: 0.2rem;
  }

  #message-message {
    width: 100%;
    height: 16rem;
    border-radius: 16px;
    background: #F3F3F3;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10) inset;
    color: #757575;
    font-size: 1.55rem;
    resize: none;
    padding:  0.9rem 1.6rem;
    border: none;
    outline:none;
    font-family: Inter;
    margin-top: 0.1rem;
  }

  .section-message-submit button {
    margin-top: 1.5rem;
    width: 100%;
    height: 5.5rem;
    background: #6C10C6;
    color: #FFF;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 16px;
    line-height: 5.3125rem;
    font-family: Inter;
    border: none;
    transition: 1s;
  } 

  .section-message-submitting button {
    margin-top: 1.5rem;
    width: 100%;
    height: 5.5rem;
    background: #6C10C6;
    color: #FFF;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 16px;
    line-height: 5.3125rem;
    font-family: Inter;
    border: none;
    transition: 1s;
    opacity: 0.8;
  }

  .map-iframe {
    z-index: 999;
    margin-left: 10rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset;
    width: 35vw;
    height: 65vh;
    min-width: 300px;
    min-height: 410px;
    max-width: 500px;
    max-height: 700px;
  }

  .message-warning {
    color: red;
    margin: 0;
    margin-left: 0.5rem;
    margin-bottom: -0.7rem;
    font-size: 1.15rem;
  }

  .send-confirm {
    color: #4CAF50;
    font-size: 1.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    visibility: hidden;
    animation-name:confirm;
    animation-duration: 8s;
    transition: 2s;
    margin-bottom: -6rem;
  }

  .send-confirm p{
    margin: 0;
    
  }
  @keyframes confirm {
  0% {
    visibility:hidden;
    opacity:0;
    margin-bottom: -6rem;
  }
  50% {
    visibility:visible;
    margin-bottom: 0;
    opacity:1;
  }
  100% {
    visibility:hidden;
    margin-bottom: -6rem;
    opacity: 0;
  }
}

  @media (max-width: 1400px){
    .circle4,.circle5 {
      visibility: hidden;
    }
  }
  @media (max-width: 1200px) {
    .section-hero-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2vh;
      height: max-content;
      width: 95vw;
      margin-top: -15vh;
    }

    .hero-heading {
      display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    width: auto;
    height: auto;
    font-size: 7rem;
    position: unset;
}

    .hero-tag {
    font-family: 'Inter';
    font-style: normal;
    width: auto;
    height: auto;
    position: unset;
    font-size: 3.8rem;
    line-height: 4rem;
    }

    .hero-bottom {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 3.4rem;
    line-height: 39px;
    width: auto;
    height: 1rem;
    position: unset;

    } 

    .section-hero-image {
      display: none;
    }
    .section-hero-data {
        height: 80vh;
    }

    .circle1, .circle2, .circle3, .circle4, .circle5 {
      display: none;
    }

    .section-map-message {
      height: 100vh;
    }
    .section-map {
      margin: 23vh 0 0 0;
    }

    .section-message {
      margin: 0;
      margin-top: 10vh;
      width: 100%;
    }

    .section-message-box {
      width: 100%;
    }
  }

    @media (max-width:768px){

      .section-map-message {
        display: flex;
        flex-direction: column;
        height: 180vh;
        padding: 0;
        margin-top: 8vh;
      }

      .map-iframe {
        width: 80vw;
        margin-left: -3vw;
      }

      .section-message {
        width: 84vw;
        order:1;
      }
      .section-message-box {
        width: 100%;
        /* padding:3.5rem 3rem;
        border-radius: 6rem; */
      }
      .section-map {
        width: 100%;
        order:2;
      }
      .ellipse1, .ellipse2 {
        display:none;
      }
    }

    @media (max-height: 600px) {
      .section-map{
        margin-top: 40vh;
      }
    }

    @media (max-width:464px){
      .hero-heading {
        font-size: 5.5rem;
      }

      .hero-tag {
        font-size: 3rem;
      }

      .hero-bottom {
        font-size: 2.5rem;
      }
    }
    @media (max-width:350px){
      .hero-heading {
        font-size: 4.5rem;
      }
      .hero-tag {
        font-size: 2.5rem;
      }

      .hero-bottom {
        font-size: 2rem;
      }
    }
`,Oe=()=>e.jsx(We,{children:e.jsxs("footer",{className:"bg-[#211F24]",children:[e.jsxs("div",{className:"w-screen flex flex-row flex-wrap gap-10 justify-between px-[4rem] sm:px-[8rem] md:px-[8rem] xl:px-[8rem]",children:[e.jsxs("div",{className:"flex flex-col w-[40rem]",children:[e.jsx("div",{className:"text-[#C890FF] font-bold text-[3rem]",children:"Tinkerers' Laboratory"}),e.jsxs("div",{className:"text-white text-[1.5rem]",children:["Beside Aryabatta Hostel,",e.jsx("br",{}),"Indian Institute of Technology Hyderabad,",e.jsx("br",{}),"Kandi, Sangareddy,",e.jsx("br",{}),"Telangana, India"]})]}),e.jsxs("div",{className:"flex flex-col w-[25rem] gap-8",children:[e.jsxs("div",{className:"flex flex-row justify-between h-[2rem]",children:[e.jsx("a",{href:"https://www.instagram.com/tinkererslab_iith/",target:"_blank",className:"cursor-pointer",children:e.jsx("img",{src:"./images/Instagram.svg"})}),e.jsx("a",{href:"https://www.facebook.com/tl.iith/",target:"_balnk",className:"cursor-pointer",children:e.jsx("img",{src:"./images/Facebook.svg"})}),e.jsx("a",{href:"https://www.linkedin.com/company/tinkerers-lab-iith",target:"_blank",className:"cursor-pointer",children:e.jsx("img",{src:"./images/LinkedIn.svg"})})]}),e.jsxs("div",{className:"flex flex-row gap-8",children:[e.jsx("img",{src:"./images/mail.svg",alt:""}),e.jsx("div",{className:"text-white text-[1.5rem] underline underline-offset-4",children:"ce22btech11040@iith.ac.in"})]}),e.jsxs("div",{className:"flex flex-row gap-8",children:[e.jsx("img",{src:"./images/mail.svg",alt:""}),e.jsx("div",{className:"text-white text-[1.5rem] underline underline-offset-4",children:"tl@campus.iith.ac.in"})]}),e.jsxs("div",{className:"flex flex-row gap-8",children:[e.jsx("img",{src:"./images/call.svg",alt:""}),e.jsx("div",{className:"text-white text-[1.5rem] underline underline-offset-4",children:"+91 95410 23301"})]})]})]}),e.jsx("div",{className:"copyright text-[#C890FF]",children:"© 2023-2024 All rights reserved | IIT Hyderabad"})]})}),We=d.footer`
  .top {
    border-top: 1px solid #6c10c6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .subfooter {
    padding-top: 5rem;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .line {
      width: 3px;
      height: 12rem;
      background: #6c10c6;
    }
    img {
      left: 2rem;
      height: 12rem;
      width: 12rem;
    }

    .names {
      padding: 0 2rem;
      color: #6c10c6;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
    }
  }

  .tagline {
    align-items: center;
    justify-content: center;
    color: #6c10c6;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
  }

  footer {
    padding-top: 5rem;
  }

  .copyright {
    padding-top: 5rem;
    padding-bottom: 2rem;
    color: #C890FF;
    font-size: 1.5rem;
    font-family: Inter;
    text-align: center;
  }

  .location {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    margin: 0 6rem;
    text-align: center;
  }

  .handels {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    text-align: center;

    .accounts {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2.5rem;
      gap: 2rem;
    }
  }

  .contacts {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    padding-left: 6.5rem;

    a{
      color: #6c10c6;
    }

    svg {
      font-size: 25px;
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1200px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3.2rem;

      .grid {
      }
    }

    .subfooter {
      img {
        margin-left: 2rem;
        height: 10rem;
        width: 10rem;
      }

      .names {
        font-size: 25px;
      }
    }
    .tagline {
      font-size: 20px;
    }

    .handels {
      .accounts {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2rem;
        gap: 0.1rem;
      }
    }

    .contacts {
      color: #6c10c6;
      font-size: 15px;
      font-family: Inter;
      padding-left: 2rem;
    }
  }
`,Be=({handleCardClick:t})=>e.jsxs(k,{children:[e.jsxs("div",{className:"flex flex-row justify-between px-[5%] w-full",children:[e.jsx("img",{src:"./images/teachnook-logo.svg",alt:"logo"}),e.jsx("img",{src:"./images/workshops-img.svg",alt:"logo"})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsx(i.div,{whileHover:{scale:1.1},className:"cont",onClick:()=>t(1),children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Computer Science"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Explore the field of Computer Science with programming, artificial intelligence, data science, and cybersecurity. Learn to develop software applications, AI models, and secure digital systems for various industries.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Programming"}),e.jsx("li",{children:"Artificial Intelligence"}),e.jsx("li",{children:"Data Science"}),e.jsx("li",{children:"Cybersecurity"})]})]})]})})},1),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsx(i.div,{whileHover:{scale:1.1},className:"cont",onClick:()=>t(2),children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Electronics & Communication"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Gain expertise in embedded systems, IoT, robotics, and wireless communication. Learn how to design intelligent electronic devices, automation systems, and smart networks for modern applications.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Embedded Systems"}),e.jsx("li",{children:"IoT"}),e.jsx("li",{children:"Robotics"}),e.jsx("li",{children:"Wireless Communication"})]})]})]})})},2),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsx(i.div,{whileHover:{scale:1.1},className:"cont",onClick:()=>t(3),children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Mechanical Engineering"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Discover mechanical design, thermodynamics, and automotive technologies. Develop skills in product design, manufacturing processes, and energy-efficient systems for various engineering applications.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Mechanical Design"}),e.jsx("li",{children:"Thermodynamics"}),e.jsx("li",{children:"Automotive Technologies"})]})]})]})})},3)]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsx(i.div,{whileHover:{scale:1.1},className:"cont",onClick:()=>t(4),children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Civil Engineering"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn the fundamentals of structural engineering, construction management, and urban infrastructure. Work on sustainable building designs, smart city projects, and large-scale civil structures.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Structural Engineering"}),e.jsx("li",{children:"Construction Management"}),e.jsx("li",{children:"Urban Infrastructure"})]})]})]})})},4),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsx(i.div,{whileHover:{scale:1.1},className:"cont",onClick:()=>t(5),children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsxs("div",{className:"heading",style:{color:"#C890FF"},children:["Management and",e.jsx("br",{}),"Business"]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Explore Digital Marketing, Finance, HR Management, and Entrepreneurship. Learn branding, risk analysis, HR analytics, and leadership. Gain hands-on experience in SEO, investment management, and corporate HR.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Digital Marketing"}),e.jsx("li",{children:"Finance"}),e.jsx("li",{children:"HR Management"}),e.jsx("li",{children:"Entrepreneurship"})]})]})]})})},5)]})})]}),Ge=()=>e.jsxs(k,{children:[e.jsx(i.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"hero-heading",children:"Computer Science"}),e.jsx("div",{className:"hero-tag",children:"Tinkerers' Lab"}),e.jsx("div",{className:"row",id:"aims",children:e.jsxs("div",{className:"col-lg-12",children:[e.jsx("div",{className:"seperator"}),e.jsx("div",{className:"desp1",style:{color:"#fff"},children:"Covers cutting-edge technologies like Machine Learning, Data Science, AI, Web Development, Cybersecurity, and Cloud Computing. Learn to build intelligent systems, secure networks, scalable applications, and data-driven solutions. Hands-on training with Python, JavaScript, TensorFlow, AWS, and ethical hacking tools, ensuring real-world expertise. The curriculum includes 10 minor assignments and 1 major assignment, providing practical exposure to industry-relevant challenges. Applications range from software development to AI-powered automation and cybersecurity defense."})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Machine Learning"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn Supervised & Unsupervised Learning, Regression, Clustering, and Recommender Systems. Work on real-world datasets using Python, Scikit-learn, and TensorFlow. Applications: AI assistants, fraud detection, healthcare analytics.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Introduction to Machine Learning"}),e.jsx("li",{children:"Supervised & Unsupervised Learning"}),e.jsx("li",{children:"Regression & Classification Algorithms"}),e.jsx("li",{children:"Clustering & Recommender Systems"}),e.jsx("li",{children:"Neural Networks & Deep Learning"}),e.jsx("li",{children:"Model Training & Evaluation"}),e.jsx("li",{children:"Tools: Scikit-learn, Tensor Flow"}),e.jsx("li",{children:"Real-world Applications & Projects"})]})]})]})})]},4),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Data Science"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Covers statistics, MySQL, NumPy, Pandas, and Python for data analysis. Learn EDA (Exploratory Data Analysis), Machine Learning basics, and Data Visualization. Applications: Business analytics, finance, healthcare, marketing insights.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Introduction to Data Science"}),e.jsx("li",{children:"Statistics for Data Science"}),e.jsx("li",{children:"MySQL for Data Management"}),e.jsx("li",{children:"Python Libraries – NumPy & Pandas"}),e.jsx("li",{children:"Exploratory Data Analysis (EDA)"}),e.jsx("li",{children:"Data Visualization Techniques"}),e.jsx("li",{children:"Machine Learning Basics"}),e.jsx("li",{children:"Business Analytics & Case Studies"})]})]})]})})]},4)]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Artificial Intelligence"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn Neural Networks, NLP (Natural Language Processing), and Computer Vision. Work on Chatbots, Speech Recognition, and AI-powered automation. Applications: Self-driving cars, AI recommendations, virtual assistants.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Fundamentals of AI"}),e.jsx("li",{children:"Neural Networks & Deep Learning"}),e.jsx("li",{children:"NLP (Natural Language Processing)"}),e.jsx("li",{children:"Computer Vision & Image Processing"}),e.jsx("li",{children:"AI in Robotics & Automation"}),e.jsx("li",{children:"AI Ethics & Bias Handling"}),e.jsx("li",{children:"Hands-on AI Projects"})]})]})]})})]},4),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Web Development"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Covers HTML, CSS, JavaScript, React.js, and backend development with Node.js & MongoDB. Learn to build dynamic, responsive web applications. Applications: E-commerce platforms, blogs, SaaS products, and dashboards.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Introduction to Web Technologies"}),e.jsx("li",{children:"HTML, CSS, JavaScript Basics"}),e.jsx("li",{children:"Advanced JavaScript & Frameworks (React.js)"}),e.jsx("li",{children:"Backend Development (Node.js, Express.js)"}),e.jsx("li",{children:"Database Management (MongoDB)"}),e.jsx("li",{children:"API Development & Integration"}),e.jsx("li",{children:"Web Security Best Practices"}),e.jsx("li",{children:"Full-Stack Development Projects"})]})]})]})})]},4)]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Cyber Security"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn ethical hacking, penetration testing, cryptography, and malware analysis. Gain hands-on skills in vulnerability testing, security audits, and compliance frameworks. Applications: Network security, threat detection, cybersecurity consulting.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Introduction to Cyber Security"}),e.jsx("li",{children:"Ethical Hacking & Penetration Testing"}),e.jsx("li",{children:"Network Security & Firewalls"}),e.jsx("li",{children:"Cryptography & Data Protection"}),e.jsx("li",{children:"Malware Analysis & Threat Detection"}),e.jsx("li",{children:"Cyber Security Frameworks & Compliance"}),e.jsx("li",{children:"Hands-on Security Audits"})]})]})]})})]},4),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Cloud Computing"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Covers AWS, Google Cloud, Azure, Kubernetes, and DevOps. Learn serverless computing, containerization, and cloud security. Applications: Scalable infrastructure, cloud-based app deployment, enterprise solutions.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Cloud Fundamentals & Architecture"}),e.jsx("li",{children:"AWS, Google Cloud, Azure Overview"}),e.jsx("li",{children:"Kubernetes & Containerization"}),e.jsx("li",{children:"DevOps & CI/CD Pipelines"}),e.jsx("li",{children:"Cloud Security & Risk Management"}),e.jsx("li",{children:"Serverless Computing & Microservices"}),e.jsx("li",{children:"Real-world Cloud Deployments"})]})]})]})})]},4)]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"App Development"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn iOS (Swift), Android (Kotlin), and cross-platform development (Flutter/React Native). Build user-friendly mobile applications with API integration and UI/UX best practices. Applications: E-commerce, mobile banking, fitness tracking apps.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Mobile App Development Fundamentals"}),e.jsx("li",{children:"iOS Development (Swift)"}),e.jsx("li",{children:"Android Development (Kotlin)"}),e.jsx("li",{children:"Cross-Platform Development (Flutter, React Native)"}),e.jsx("li",{children:"UI/UX Design Principles"}),e.jsx("li",{children:"API Integration & Backend Connectivity"}),e.jsx("li",{children:"Deployment & App Store Optimization"})]})]})]})})]},4),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"AR/VR"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Covers Unity, Unreal Engine, 3D modeling, and spatial computing. Learn to create immersive gaming, education, and medical applications. Applications: Virtual training, 3D simulations, metaverse solutions.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Introduction to AR/VR"}),e.jsx("li",{children:"Unity & Unreal Engine Basics"}),e.jsx("li",{children:"3D Modeling & Rendering"}),e.jsx("li",{children:"Spatial Computing & Interaction"}),e.jsx("li",{children:"AR/VR Game & Simulation Development"}),e.jsx("li",{children:"Industry-Specific Applications"})]})]})]})})]},4)]})})]}),Ue=()=>e.jsxs(k,{children:[e.jsx(i.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"hero-heading",children:"Electronics & Communication"}),e.jsx("div",{className:"hero-tag",children:"Tinkerers' Lab"}),e.jsx("div",{className:"row",id:"aims",children:e.jsxs("div",{className:"col-lg-12",children:[e.jsx("div",{className:"seperator"}),e.jsx("div",{className:"desp1",style:{color:"#fff"},children:"Focuses on Embedded Systems, IoT, Robotics, and HEV. Learn to work with microcontrollers, real-time operating systems, and AI-driven automation. Hands-on experience in designing smart devices, autonomous robots, and high-speed communication networks. The curriculum includes 10 minor assignments and 1 major assignment, ensuring practical application of concepts. Applications include smart cities, industrial automation, and 5G technology."})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Embedded Systems"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn microcontrollers (Arduino, Raspberry Pi), Real-time OS, and Firmware Development. Work on sensor interfacing, hardware programming, and embedded C. Applications: IoT devices, smart appliances, automotive systems.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Introduction to Microcontrollers (Arduino, Raspberry Pi)"}),e.jsx("li",{children:"Real-time Operating Systems (RTOS)"}),e.jsx("li",{children:"Firmware Development & Embedded C"}),e.jsx("li",{children:"Sensor Interfacing & Hardware Programming"}),e.jsx("li",{children:"Communication Protocols (I2C, SPI)"}),e.jsx("li",{children:"Applications in IoT & Automotive Systems"})]})]})]})})]},4),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Internet of Things"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Covers wireless communication protocols (WiFi, ZigBee, MQTT) and cloud integration. Build sensor-based automation systems and smart city applications. Applications: Smart homes, wearables, healthcare monitoring.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Basics of IoT & Connected Devices"}),e.jsx("li",{children:"Wireless Communication Protocols (WiFi, ZigBee, MQTT)"}),e.jsx("li",{children:"IoT Sensors & Actuators"}),e.jsx("li",{children:"Cloud Integration & Data Processing"}),e.jsx("li",{children:"IoT Security & Device Management"}),e.jsx("li",{children:"IoT Applications & Industry Case Studies"})]})]})]})})]},4)]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Robotics"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn robot programming, AI integration, motion control, and robotic arms. Work on autonomous robots, drone navigation, and AI-powered bots. Applications: Industrial automation, medical robotics, autonomous vehicles.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Fundamentals of Robotics & Kinematics"}),e.jsx("li",{children:"Motion Control & Robotic Arms"}),e.jsx("li",{children:"AI Integration in Robotics"}),e.jsx("li",{children:"Autonomous Robot Development"}),e.jsx("li",{children:"Drone Navigation & Control Systems"})]})]})]})})]},4),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Hybrid Electric Vehicles"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn EV components, battery management, and power electronics. Work on regenerative braking, energy-efficient models, and green mobility. Applications: Electric cars, hybrid vehicle technology.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Introduction to Electric & Hybrid Vehicles"}),e.jsx("li",{children:"Battery Management Systems (BMS)"}),e.jsx("li",{children:"Power Electronics & Energy Recovery"})]})]})]})})]},4)]})})]}),Je=()=>e.jsxs(k,{children:[e.jsx(i.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"hero-heading",children:"Mechanical Engineering"}),e.jsx("div",{className:"hero-tag",children:"Tinkerers' Lab"}),e.jsx("div",{className:"row",id:"aims",children:e.jsxs("div",{className:"col-lg-12",children:[e.jsx("div",{className:"seperator"}),e.jsx("div",{className:"desp1",style:{color:"#fff"},children:"Explores core mechanical concepts like AutoCAD, IC Engine Design, Hybrid Electric Vehicles, and 3D Printing. Gain expertise in industrial design, manufacturing processes, automotive engineering, and sustainable mobility solutions. Hands-on training in simulation, CAD modeling, and vehicle aerodynamics. The curriculum includes 10 minor assignments and 1 major assignment, ensuring practical application of concepts. Applications range from automobile engineering to renewable energy technologies."})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"AutoCAD & 3D Modelling"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn CAD design, 3D rendering, and blueprint drafting. Work with SolidWorks, CATIA, and Revit for industrial design. Applications: Architecture, mechanical product design, structural engineering.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Fundamentals of CAD Design"}),e.jsx("li",{children:"Blueprint Drafting & 3D Rendering"}),e.jsx("li",{children:"Industrial Design Tools (SolidWorks, CATIA)"})]})]})]})})]},4),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Car Designing & IC Engine"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Covers automobile aerodynamics, fuel efficiency, and combustion engine design. Learn engine simulation, automotive materials, and sustainability in transport. Applications: Automobile manufacturing, racing car engineering.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Automotive Aerodynamics & Vehicle Dynamics"}),e.jsx("li",{children:"Combustion Engine Design & Fuel Efficiency"}),e.jsx("li",{children:"Engine Simulation & Material Selection"})]})]})]})})]},4)]})})]}),Ve=()=>e.jsxs(k,{children:[e.jsx(i.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"hero-heading",children:"Civil Engineering"}),e.jsx("div",{className:"hero-tag",children:"Tinkerers' Lab"}),e.jsx("div",{className:"row",id:"aims",children:e.jsxs("div",{className:"col-lg-12",children:[e.jsx("div",{className:"seperator"}),e.jsx("div",{className:"desp1",style:{color:"#fff"},children:"Covers Construction Planning, Structural Analysis, and Smart City Development. Learn project management, material testing, blueprint drafting, and high-rise structural design. Hands-on experience with AutoCAD, 3D modeling, and sustainable infrastructure solutions. The curriculum includes 10 minor assignments and 1 major assignment, ensuring practical application of concepts. Applications include smart city planning, green architecture, and large-scale construction projects."})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"AutoCAD & 3D Modelling"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn blueprint drafting, 3D visualization, and structural design. Work on industry-standard tools like AutoCAD, Revit, and SketchUp. Applications: Architecture, urban planning, civil engineering.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Building Design & Architectural Planning"}),e.jsx("li",{children:"3D Modeling & Structural Drafting"})]})]})]})})]},4),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Construction Planning & Structural Analysis"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Covers material testing, project management, and reinforced concrete structures. Learn high-rise building designs and stability simulations. Applications: Smart city planning, large-scale infrastructure projects.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Project Management & Planning"}),e.jsx("li",{children:"Reinforced Concrete Structures & Material Testing"}),e.jsx("li",{children:"Structural Stability Simulations"}),e.jsx("li",{children:"Designing and Analysis tools such as Staad Pro"})]})]})]})})]},4)]})})]}),Xe=()=>e.jsxs(k,{children:[e.jsx(i.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"hero-heading",children:"Management & Business"}),e.jsx("div",{className:"hero-tag",children:"Tinkerers' Lab"}),e.jsx("div",{className:"row",id:"aims",children:e.jsxs("div",{className:"col-lg-12",children:[e.jsx("div",{className:"seperator"}),e.jsx("div",{className:"desp1",style:{color:"#fff"},children:"Includes Digital Marketing, Finance, Stock Market, and Human Resource Management. Learn data-driven marketing, social media strategies, financial analysis, and corporate leadership. Hands-on experience with SEO, Google Ads, portfolio management, and talent acquisition. The curriculum includes 10 minor assignments and 1 major assignment, providing practical exposure to real-world business challenges. Applications in business growth, investment banking, HR consulting, and entrepreneurship."})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"row",id:"aims2","justify-content-center":!0,children:[e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Digital Marketing"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn SEO, Google Ads, social media marketing, and content strategy. Hands-on training with Facebook & Instagram Ads, LinkedIn branding, and influencer marketing. Applications: Brand growth, online advertising, lead generation.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"SEO & Content Strategy"}),e.jsx("li",{children:"Google Ads & Paid Campaigns"}),e.jsx("li",{children:"Social Media Marketing (Facebook, Instagram, LinkedIn)"}),e.jsx("li",{children:"Influencer Branding & Affiliate Marketing"})]})]})]})})]},4),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Finance & Stock Market"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Covers investment strategies, stock market analysis, and financial risk management. Learn real-time trading simulations, portfolio management, and crypto investments. Applications: Wealth management, investment banking, fintech.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Investment Strategies & Risk Management"}),e.jsx("li",{children:"Stock Market Analysis & Trading"}),e.jsx("li",{children:" Crypto Investments & Portfolio Management"})]})]})]})})]},4),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsx(i.div,{whileHover:{scale:1.1},className:"cont"}),e.jsx("a",{href:"https://forms.gle/QNyPECMPXzydgTZJ8",target:"_blank",children:e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#C890FF"},children:"Finance & Stock Market"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"desp2",style:{color:"#fff"},children:["Learn talent acquisition, payroll management, HR analytics, and labor laws. Develop skills in employee engagement, leadership development, and corporate training. Applications: HR consulting, corporate recruitment, HR tech startups.",e.jsxs("ul",{className:"font-semibold justify-start list-disc",style:{paddingLeft:"20px",color:"#fff"},children:[e.jsx("li",{children:"Talent Acquisition & HR Analytics"}),e.jsx("li",{children:"Payroll Management & Labor Laws"}),e.jsx("li",{children:"Leadership Development & Corporate Training"})]})]})]})})]},4)]})})]}),Ye=()=>{const[t,o]=n.useState(0),a=s=>{o(s)};console.log(t);const h=()=>{switch(t){case 0:return console.log("Page 1"),e.jsx(Be,{handleCardClick:a});case 1:return e.jsx(Ge,{});case 2:return e.jsx(Ue,{});case 3:return e.jsx(Je,{});case 4:return e.jsx(Ve,{});case 5:return e.jsx(Xe,{});default:return e.jsxs("div",{className:"flex justify-center",children:[e.jsx("h2",{className:"text-white text-center",children:"Page not found! Return to the main page."}),e.jsx("button",{className:"mt-4 bg-blue-500 text-white px-4 py-2 rounded",onClick:()=>o(0),children:"Go Back"})]})}};return e.jsx("div",{children:h()})},k=d.section`
  padding: 9rem 0;
  .col-lg-4,
  .col-md-6 {
    padding-top: 20px;
  }
  .box {
    background: #eddaff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 95px;
    height: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .heading {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;

    color: #6c10c6;
    padding-top: 4rem;
  }
  .line {
    margin: 2.5rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .desp2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: left;
    color: #001824;
    padding: 0rem 5vw;
    justify-content: center;
  }
  a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 15vh;
  }
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .desp1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    margin: 3rem;
    margin-top: 20px;
  }
  #aims2 {
    display: flex;
    justify-content: center; /* Center the items horizontally */
    gap: 2rem; /* Add consistent spacing between items */
    flex-wrap: wrap; /* Allow wrapping for responsive behavior */
    padding: 2rem/* Add padding for consistency */
  }

  .col-lg-4,
  .col-md-6 {
    flex: 1 1 440px; /* Allow items to grow and shrink with a minimum width */
    max-width: 500px; /* Ensure consistent sizing */
    margin: auto; /* Center each item in its parent */
    text-align: center; /* Center-align text */
    padding: 1rem; /* Add padding for consistency */
    padding-top: 50px;
  }

  #collab-form {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    position: relative;
  }

  .content {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 39px;
    margin-top: -3.5rem;
    z-index: 1;
    padding-bottom: 30px;
    cursor: pointer;
  }
  .col-xl {
    text-align: center;
  }
  .btn {
    margin-top: 50px;
    width: 200px;
    height: 7vh;
    a {
      color: #fff;
    }
    background: #6c10c6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 46px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 41rem;
    top: 67rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 38rem;
    top: 18rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container {
    justify-content: center;
    text-align: center;
    width: 100vw;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;
    margin-left: 5vw;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
    color: #eddaff;
  }
  .separator {
    border: 3px solid rgba(0, 0, 0, 0.1);
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    margin left: 5vw;
    margin bottom: 3rem;
    padding : 0 5vw;
    color: #eddaff;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture {
    text-align: end;
  }

  .hero-img {
    width: 70%;
  }
  @media (max-width: 1200px) {
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .container {
      justify-content: center;
      text-align: center;
      width: 100vw;
    }
    .wip h2 {
      font-size: 4rem;
      padding-bottom: 5rem;
    }
    .pic1 {
      display: none;
    }
    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`,Ke=F`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-family: 'Work Sans', sans-serif;
}
html, body {
    background: #000000;
    width: 100%;
    height: 100%;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}
h1{
    color:${({theme:t})=>t.colors.heading};
    font-size: 8rem;
    font-weight: 700;
}
h2{
    color:${({theme:t})=>t.colors.heading};
    font-size: 8rem;
    font-weight: 700;
}
h3{
    color:${({theme:t})=>t.colors.text_heading};
    font-size: 4rem;
    font-weight: 700;
}
h4{
    color:${({theme:t})=>t.colors.heading};
    font-size: 3.2rem;
    font-weight: 700;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}

.container{
    max-width: 190rem;
    margin: 0 auto;
}

.grid{
    display: grid;
    gap: 9rem;
}

.grid-two-column{
    grid-template-columns: repeat(2,1fr);
}

.grid-three-column{
    grid-template-columns: repeat(3,1fr);
}

.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

`;const $e=()=>{const t={colors:{heading:"#001824",text_heading:"#6C10C6",nav_color:"#484848",white:"#fff",gradient:"radial-gradient(40.83% 40.83% at 50% 50%, rgba(108, 16, 198, 0.5) 0%, rgba(186, 104, 200, 0) 100%) ",media:{mobile:"768px",tab:"1127px"}}};return e.jsxs(D,{theme:t,children:[e.jsx(Ke,{}),e.jsxs(M,{children:[e.jsx(G,{}),e.jsxs(O,{children:[e.jsx(b,{path:"",element:e.jsx(ee,{})}),e.jsx(b,{path:"team",element:e.jsx(re,{})}),e.jsx(b,{path:"events",element:e.jsx(ve,{})}),e.jsx(b,{path:"inventory",element:e.jsx(Ae,{})}),e.jsx(b,{path:"projects",element:e.jsx(Re,{})}),e.jsx(b,{path:"contacts",element:e.jsx(De,{})}),e.jsx(b,{path:"workshops",element:e.jsx(Ye,{})})]}),e.jsx(Oe,{})]})]})};W.createRoot(document.getElementById("root")).render(e.jsx(B.StrictMode,{children:e.jsx($e,{})}));
