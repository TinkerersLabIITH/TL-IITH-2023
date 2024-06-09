import{s as c,r as a,j as e,N as j,I as S,m as t,g as w,S as L,a as P,X as D,H as O,R as F,b as y,c as M,d as W}from"./vendor-9d049aad.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))x(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&x(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function x(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const Y=()=>{const[i,d]=a.useState(!1),r=()=>{d(!i)};return e.jsx("div",{className:"nav-container",children:e.jsxs(G,{children:[e.jsx(U,{children:e.jsx("img",{src:"./images/TL_Logo.svg",alt:""})}),e.jsxs($,{onClick:r,className:i?"active":"",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx(K,{showMenu:i,className:i?"active":"",children:e.jsxs(V,{children:[e.jsx(N,{children:e.jsx(j,{onClick:r,to:"/",children:"Home"})}),e.jsx(N,{children:e.jsx(j,{onClick:r,to:"/team",children:"Team"})}),e.jsx(N,{children:e.jsx(j,{onClick:r,to:"/events",children:"Events"})}),e.jsx(N,{children:e.jsx(j,{onClick:r,to:"/inventory",children:"Inventory"})}),e.jsx(N,{children:e.jsx(j,{onClick:r,to:"/projects",children:"Projects"})}),e.jsx(N,{children:e.jsx(j,{onClick:r,to:"/contacts",children:"Contacts"})})]})})]})})},G=c.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`,U=c.div`
  font-weight: bold;
  font-size: 24px;
  padding-left: 5rem;
  @media (max-width: 600px) {
    padding-left: 0.75rem;
  }
`,$=c.div`
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
`,K=c.div`
  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 1rem;
    transform: ${({showMenu:i})=>i?"translateY(0%)":"translateY(-100%)"};
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
`,V=c.ul`
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
`,N=c.li`
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
      // color: ${({theme:i})=>i.colors.nav_color};
      color: #6c10c6;
      scale: 1.2;
    }
    // color: #484848;
    color: #fff;
  }
`,I=({words:i,interval:d,typingDelay:r,erasingDelay:x})=>{const[s,n]=a.useState(0),[h,f]=a.useState(""),[v,g]=a.useState(!0);return a.useEffect(()=>{let p;if(v){const m=i[s],u=m.length;p=setInterval(()=>{f(b=>b.length===u?(g(!1),b):m.slice(0,b.length+1))},d)}else p=setInterval(()=>{f(m=>m.length===0?(g(!0),n(u=>(u+1)%i.length),""):m.slice(0,m.length-1))},x);return()=>clearInterval(p)},[s,i,d,r,x,v]),e.jsx("span",{children:h})},B=[{original:"./imagescroll/Imagescroll1.png",thumbnail:"./imagescroll/Imagescroll1.png"},{original:"./imagescroll/imagescroll3.png",thumbnail:"./imagescroll/imagescroll3.png"},{original:"./imagescroll/imagescroll4.png",thumbnail:"./imagescroll/imagescroll4.png"},{original:"./imagescroll/imagescroll1.jpg",thumbnail:"./imagescroll/imagescroll1.jpg"},{original:"./imagescroll/imagescroll6.png",thumbnail:"./imagescroll/imagescroll6.png"},{original:"./imagescroll/imagescroll2.png",thumbnail:"./imagescroll/imagescroll2.png"}];function J(){return e.jsx(X,{children:e.jsx("div",{className:"contimg",children:e.jsx("div",{className:"imggal",children:e.jsx(S,{showNav:!0,showPlayButton:!1,showFullscreenButton:!1,showThumbnails:!1,items:B})})})})}const X=c.section`
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
`,_=()=>e.jsxs(Z,{children:[e.jsx(t.div,{whileHover:{scale:1.5},className:"circle2"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle3"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-xl",id:"left",children:[e.jsx(t.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"hero-heading",children:"Tinkerers' Laboratory"}),e.jsx("div",{className:"hero-tag",children:"IIT Hyderabad"}),e.jsx(t.button,{whileHover:{scale:1.2},whileTap:{scale:.8},className:"reachus",children:e.jsx(j,{to:"/contacts",children:"Reach Us"})})]}),e.jsx("div",{className:"col-xl",id:"right",children:e.jsx("div",{className:"section-hero-image",children:e.jsx("picture",{children:e.jsx(t.img,{initial:{y:"20%",opacity:0,scale:.8},animate:{y:0,opacity:1,scale:1},transition:{duration:1},className:"pic1",src:"./images/Home.svg",alt:"image"})})})})]}),e.jsx("div",{className:"row",id:"aims",children:e.jsxs("div",{className:"col-lg-12",children:[e.jsx("div",{className:"ouraim",style:{color:"#fff"},children:"Our Aim"}),e.jsx("div",{className:"seperator"}),e.jsx("div",{className:"desp1",style:{color:"#fff"},children:"Here, at Tinkerers' Lab, our aim is to provide you a working space with vast ranges of tools in order to bring out the inner tinkerer in you"})]})}),e.jsxs("div",{className:"row",id:"aims2",children:[e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs(t.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#272338"},children:e.jsx("img",{src:"./images/aim1.svg",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#fff"},children:"Availability"}),e.jsx("div",{className:"line"}),e.jsx("div",{className:"desp2",style:{color:"#fff"},children:"We know that best ideas don't come in working hours only, given that, Tinkerers' lab is open 24/7 for students to tinker at their convenience"})]})]})}),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs(t.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#232126"},children:e.jsx("img",{src:"./images/aim2.svg",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#fff"},children:"Resources"}),e.jsx("div",{className:"line"}),e.jsx("div",{className:"desp2",style:{color:"#fff"},children:"We have a wide range of resources ,from the commonplace Raspberry Pis and Arduinos to CNCs and 3D Printers."})]})]})}),e.jsxs("div",{className:"col-lg-4 col-md-6",children:[e.jsxs(t.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#232126"},children:e.jsx("img",{src:"./images/aim3.svg",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"heading",style:{color:"#fff"},children:"TL Talks"}),e.jsx("div",{className:"line"}),e.jsx("div",{className:"desp2",style:{color:"#fff"},children:"TL will host talks and sessions with innovators and entrepreneurs to boost the interest in new fields and push boundaries."})]})]}),e.jsx("div",{className:"hand",children:e.jsx("img",{src:"./images/hand.svg",alt:"hand"})})]})]})]}),e.jsx(J,{})]}),Z=c.section`
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
`,q=["Think","Tinker","Transform"],Q=200,ee=2e3,ie=100,te=()=>e.jsxs(se,{children:[e.jsx("div",{className:"circle1"}),e.jsx("div",{className:"circle2"}),e.jsx("div",{className:"circle3"}),e.jsx("div",{className:"circle4"}),e.jsx("div",{className:"circle5"}),e.jsxs("div",{className:"container grid grid-two-column",id:"container",children:[e.jsxs("div",{className:"section-hero-data",children:[e.jsx("h2",{className:"text-white hero-heading",children:"Our Team"}),e.jsx("h3",{className:"hero-tag",children:"Tinkerers' Lab IITH"}),e.jsx("div",{className:"text-white hero-bottom",children:e.jsx(I,{words:q,interval:Q,typingDelay:ee,erasingDelay:ie})})]}),e.jsx("div",{className:"section-hero-image",children:e.jsx("picture",{children:e.jsx("img",{src:"./images/Team.svg",alt:"image",className:"hero-img"})})})]}),e.jsxs("div",{className:"convener",children:[e.jsx("div",{className:"text-white position",children:"CONVENER"}),e.jsx("picture",{children:e.jsx("img",{src:"./images/arsh.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem]",children:"ARSH ARORA"})]}),e.jsx("div",{className:"circle8"}),e.jsx("div",{className:"circle9"}),e.jsxs("div",{className:"secretaries",children:[e.jsx("div",{className:"text-white position",children:"HEADS"}),e.jsxs("div",{className:"flex flex-row gap-10 img-secs",children:[e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/aditya.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Aditya Garg"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"MACHINE LEARNING"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/prabhat.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Prabhat Kumar"}),e.jsxs("div",{className:"text-white text-[2rem] text-center text-wrap",children:["MANAGEMENT",e.jsx("br",{})," AFFAIRS AND PRO"]})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/himanshu.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Himanshu S."}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"SOFTWARE DEVELOPMENT"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/ayush.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Aayush Adlakha"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"TECHNICAL AFFAIRS"})]})]}),e.jsxs("div",{className:"flex flex-row gap-10 img-secs",children:[e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/shriram.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Shriram Hari"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"MECHATRONICS"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/nisarg.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Nisarg Dodia"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"DESIGN"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/thameem.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Thameem Rasheed"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"DESIGN"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/sarthak.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Sarthak Singhal"}),e.jsxs("div",{className:"text-white text-[2rem] text-center",children:["CORPORATE",e.jsx("br",{})," NETWORKING & GROWTH"]})]})]}),e.jsxs("div",{className:"flex flex-row gap-10 img-secs",children:[e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/anuj.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Anuj Agarwal"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"OPERATIONS"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("picture",{children:e.jsx("img",{src:"./images/varun.svg",alt:"pic"})}),e.jsx("div",{className:"text-white text-[3rem] text-center",children:"Varun Srivastava"}),e.jsx("div",{className:"text-white text-[2rem] text-center",children:"OPERATIONS"})]})]})]}),e.jsx("div",{className:"circle6"}),e.jsx("div",{className:"circle7"}),e.jsxs("div",{className:"cores",children:[e.jsx("div",{className:"text-white cores-position",children:"CORES"}),e.jsxs("div",{className:"cores-section",children:[e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:"SOFTWARE"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"ANEESH K"}),e.jsx("li",{children:"PRANJAL PRAJAPATI"}),e.jsx("li",{children:"KARAN GUPTA"}),e.jsx("li",{children:"AMOGH BINDAL"}),e.jsx("li",{children:"UTKARSH POL"}),e.jsx("li",{children:"PARTH DAWAR"}),e.jsx("li",{children:"BHUMIN HIRAPARA"}),e.jsx("li",{children:"JAAGRIT SINGLA"})]})]}),e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:" MACHINE LEARNING"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"SARAN KONALA"}),e.jsx("li",{children:"AAYUSH GUPTA"}),e.jsx("li",{children:"VARAD N. MALLURWAR"}),e.jsx("li",{children:"ADITYA VARUN V"}),e.jsx("li",{children:"KAUSHAL MORANKAR"}),e.jsx("li",{children:"SHRAVAN BADGUJAR"}),e.jsx("li",{children:"ATHARVA KULKARNI"}),e.jsx("li",{children:"ADAMYA VERMA"}),e.jsx("li",{children:"HARSH SINGH"})]})]}),e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:" MECHATRONICS"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"SONIT PATIL"}),e.jsx("li",{children:"ABHIJIT KASHYAP"}),e.jsx("li",{children:"JAIDEEP NIRMAL"}),e.jsx("li",{children:"PRAJWAL M"}),e.jsx("li",{children:"SRI HARINI"}),e.jsx("li",{children:"SARANG GUND"}),e.jsx("li",{children:"TAHA MOHINUDDIN"}),e.jsx("li",{children:"ABHIJIT RAJ"})]})]})]}),e.jsxs("div",{className:"cores-section",children:[e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:" DESIGN"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"PARVATHY SUJITH"}),e.jsx("li",{children:"K.J. SHREEVEL"}),e.jsx("li",{children:"PRANAV KUCHECHAR"}),e.jsx("li",{children:"BHUMI BAGDIYA"}),e.jsx("li",{children:"TANVI RASHMI VINEETH"}),e.jsx("li",{children:"SMARON BOURAH"}),e.jsx("li",{children:"ARMAN MAHAYAN"}),e.jsx("li",{children:"SAI CHARAN GAJULA"}),e.jsx("li",{children:"ANUP CHAVAN"})]})]}),e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:"EVENTS & PRO"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"RISHABH PILLAI"}),e.jsx("li",{children:"SHIVA SAI PAGILLA"}),e.jsx("li",{children:"ANANYA DUTPAL"}),e.jsx("li",{children:"HARSHIT DAHERIYA"}),e.jsx("li",{children:"UJJWAL KALRA"}),e.jsx("li",{children:"ABHEY GARG"}),e.jsx("li",{children:"PRAJWAL BHANSE"})]})]}),e.jsxs("div",{className:"core",children:[e.jsxs("div",{className:"text-white position",children:[" CORPORATE",e.jsx("br",{}),"NETWORKING & GROWTH"]}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"ANUSHKA AGARWAL"}),e.jsx("li",{children:"AADITYA LAD"}),e.jsx("li",{children:"ANKUR KALYAN"}),e.jsx("li",{children:"SARVESH GOYAL"}),e.jsx("li",{children:"ATHARVA LOHARE"}),e.jsx("li",{children:"SHUBHAM DADHICH"}),e.jsx("li",{children:"LABDHI ANAND"}),e.jsx("li",{children:"HANZALA AKHTER"})]})]})]}),e.jsx("div",{className:"cores-section",children:e.jsxs("div",{className:"core",children:[e.jsx("div",{className:"text-white position",children:" OPERATIONS"}),e.jsxs("ul",{className:"text-white name-cores",children:[e.jsx("li",{children:"SHUBHAM NARE"}),e.jsx("li",{children:"AAKARSH VARSHNEY"}),e.jsx("li",{children:"NAVIN JOSHI"}),e.jsx("li",{children:"JATIN JAIN"}),e.jsx("li",{children:"PRANAY REDDY RAGI"}),e.jsx("li",{children:"OJAS KURUNDKAR"}),e.jsx("li",{children:"RAMUNI LALITH VISHNU"}),e.jsx("li",{children:"ARYAN GANDHI"}),e.jsx("li",{children:"ARYAN AGARWAL"})]})]})})]})]}),se=c.section`
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
`,ne="/assets/cyberevent-a83abfc2.png",ae="/assets/tinkering101ep2-af648a49.png",re="/assets/tinkering101ep1-6774b441.png",oe="/assets/tinkerersnight-7a7d2eb8.png",le="/assets/tinkerersnight2024-c4aa0901.png",ce="/assets/orientation-25d75c5e.jpg",de="/assets/micromouse-62f7404c.png",he="/assets/treasure-4e1c9c54.jpg",me="/assets/keynote-7c372305.jpg",xe="/assets/workshop-b8d591cc.jpg",ge="/assets/thrust-ff25c4ce.jpg",pe=()=>{const i=["Think","Tinker","Transform"],s={backgroundImage:`url(${ne})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},n={backgroundImage:`url(${le})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},h={backgroundImage:`url(${xe})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},f={backgroundImage:`url(${ge})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},v={backgroundImage:`url(${me})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},g={backgroundImage:`url(${he})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},p={backgroundImage:`url(${de})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},m={backgroundImage:`url(${ce})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},u={backgroundImage:`url(${ae})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},b={backgroundImage:`url(${re})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},A={backgroundImage:`url(${oe})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"};return e.jsxs(fe,{children:[e.jsx(t.div,{whileHover:{scale:1.5},className:"circle1"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle2"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle3"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle4"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle5"}),e.jsx("div",{className:"circle6"}),e.jsx("div",{className:"circle7"}),e.jsx("div",{className:"circle8"}),e.jsx("div",{className:"circle9"}),e.jsx("div",{className:"circle10"}),e.jsx("div",{className:"circle11"}),e.jsx("div",{className:"circle12"}),e.jsx("div",{className:"circle13"}),e.jsx("div",{className:"circle14"}),e.jsx("div",{className:"circle15"}),e.jsx("div",{className:"circle16"}),e.jsx("div",{className:"circle17"}),e.jsxs("div",{className:"container grid grid-two-column",children:[e.jsxs("div",{className:"section-hero-data",children:[e.jsx("h2",{className:"text-white hero-heading",children:"Events"}),e.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),e.jsxs("h4",{className:"text-white hero-bottom",children:["  ",e.jsx(I,{words:i,interval:200,typingDelay:2e3,erasingDelay:100})]})]}),e.jsx("div",{className:"section-hero-image",children:e.jsx("picture",{children:e.jsx("img",{src:"./images/Event.svg",alt:"image",className:"hero-img"})})})]}),e.jsxs("div",{className:"flex-container",children:[e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:f,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name",children:"Thrust 2024"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:h,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),e.jsxs("div",{className:"Left-Img",children:[e.jsx("div",{className:"image-name",children:"Workshops"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:n,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name",children:"Tinkerers' Night"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:v,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),e.jsxs("div",{className:"Left-Img",children:[e.jsx("div",{className:"image-name",children:"Thrust- Keynote Talk"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:g,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name",children:"Treasure Hunt"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:p,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),e.jsxs("div",{className:"Left-Img",children:[e.jsx("div",{className:"image-name",children:"Micromouse"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:m,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name",children:"Orientation-2023"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:s,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),e.jsxs("div",{className:"Left-Img",children:[e.jsx("div",{className:"image-name",children:"CyberCon-2023"}),e.jsx("div",{className:"decoration"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:u,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name-2",children:"Tinkering-101-Episode-02"}),e.jsx("div",{className:"decoration-2"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:b,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),e.jsxs("div",{className:"Left-Img",children:[e.jsx("div",{className:"image-name-3",children:"Tinkering-101-Episode-01"}),e.jsx("div",{className:"decoration-3"})]})]})}),e.jsx("div",{className:"flex-item",children:e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"Effect",style:A,children:e.jsx("div",{className:"Content",children:e.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors."})})}),e.jsxs("div",{className:"Right-Img",children:[e.jsx("div",{className:"image-name-4",children:"Tinkerers-Night"}),e.jsx("div",{className:"decoration-4"})]})]})})]})]})},fe=c.section`
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
`,ue=["Think","Tinker","Transform"],be=200,we=2e3,je=100,ve=()=>e.jsxs(ye,{children:[e.jsx(t.div,{whileHover:{scale:1.5},className:"circle1"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle2"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle3"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle4"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle5"}),e.jsxs("div",{whileHover:{scale:1.5},className:"container",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-xl",id:"left",children:[e.jsx(t.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"text-white hero-heading",children:"Inventory"}),e.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),e.jsx("h4",{className:"text-white hero-bottom",children:e.jsx(I,{words:ue,interval:be,typingDelay:we,erasingDelay:je})})]}),e.jsx("div",{className:"col-xl",id:"right",children:e.jsx("picture",{children:e.jsx(t.img,{initial:{y:"20%",opacity:0,scale:.8},animate:{y:0,opacity:1,scale:1},transition:{duration:1},src:"./images/Inventory.svg",alt:"image",className:"hero-img"})})})]}),e.jsxs("div",{className:"wip",children:[e.jsx("h2",{className:"text-white",children:"Work in Progress"}),e.jsx("picture",{children:e.jsx("img",{src:"./images/wip1.png",alt:"image",className:"hero-img"})})]})]})]}),ye=c.section`
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
`,Ne=["Think","Tinker","Transform"],Ae=200,Ie=2e3,ke=100,Re=()=>e.jsxs(Ce,{children:[e.jsx(t.div,{whileHover:{scale:1.5},className:"circle1"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle2"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle3"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle4"}),e.jsx(t.div,{whileHover:{scale:1.5},className:"circle5"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-xl",id:"left",children:[e.jsx(t.div,{initial:{opacity:0,y:"50%"},animate:{opacity:1,y:0,transition:{duration:.5}},transition:{duration:1},className:"text-white hero-heading",children:"Projects"}),e.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),e.jsx("h4",{className:"text-white hero-bottom",children:e.jsx(I,{words:Ne,interval:Ae,typingDelay:Ie,erasingDelay:ke})})]}),e.jsx("div",{className:"col-xl",id:"right",children:e.jsx("picture",{children:e.jsx(t.img,{initial:{y:"20%",opacity:0,scale:.8},animate:{y:0,opacity:1,scale:1},transition:{duration:1},src:"./images/Project1.svg",alt:"image",className:"hero-img"})})})]}),e.jsxs("div",{className:"row",id:"collab-form",children:[e.jsx("h3",{style:{fontWeight:500,color:"black"},children:"Projects Available"}),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs(t.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#232126"},children:e.jsx("img",{src:"./images/mlp.png",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"text-white heading",children:"ML Project"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"text-white desp2",children:[e.jsx("div",{children:"Click on the Below Link to apply for a Machine Learning Project"}),e.jsx(t.div,{whileHover:{scale:1.2},whileTap:{scale:.8},children:e.jsx(t.a,{style:{fontSize:"22px",fontWeight:550,color:"#6c10c6"},href:"",children:"Apply"})})]})]})]})}),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs(t.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#232126"},children:e.jsx("img",{src:"./images/swp.png",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"text-white heading",children:"Software Project"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"text-white desp2",children:[e.jsx("div",{children:"Click on the Below Link to apply for a Software Project"}),e.jsx(t.div,{whileHover:{scale:1.2},whileTap:{scale:.8},children:e.jsx(t.a,{style:{fontSize:"22px",fontWeight:550,color:"#6c10c6"},href:"",children:"Apply"})})]})]})]})}),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs(t.div,{whileHover:{scale:1.1},className:"cont",children:[e.jsx("div",{className:"box",style:{backgroundColor:"#232126"},children:e.jsx("img",{src:"./images/otp.png",alt:"Aim1"})}),e.jsxs("div",{className:"content",style:{backgroundColor:"#232126"},children:[e.jsx("div",{className:"text-white heading",children:"Others"}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"text-white desp2",children:[e.jsxs("div",{children:[" ","Click on the Below Link to apply for Other type of Projects"]}),e.jsx(t.div,{whileHover:{scale:1.2},whileTap:{scale:.8},children:e.jsx(t.a,{style:{fontSize:"22px",fontWeight:550,color:"#6c10c6"},href:"",children:"Apply"})})]})]})]})})]}),e.jsx("h3",{style:{fontSize:"30px",fontWeight:500,paddingTop:"70px",color:"black"},children:"If you have any innovative ideas and want to combine with TL, please fill the below form"}),e.jsx(t.button,{whileHover:{scale:1.2},whileTap:{scale:.8},className:"btn",children:"Apply"})]})]}),Ce=c.section`
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
`,Te=["Think","Tinker","Transform"],ze=200,He=2e3,Ee=100,Se=()=>{const[i,d]=a.useState({name:"",email:"",message:"",send:!1}),[r,x]=a.useState({name:!1,email:!1,message:!1,send:!1}),[s,n]=a.useState(!1);function h(o){const{name:l,value:C}=o.target;d(E=>({...E,[l]:C}))}const f=a.useRef(null);function v(o){const l=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;o.preventDefault(),x({name:!i.name,email:!(i.email&&l.test(i.email)),message:!i.message,send:!!(i.name&&i.email&&l.test(i.email)&&i.message)}),i.name&&i.email&&l.test(i.email)&&i.message&&n(!0),setInterval(()=>{g.length<5?p(g+"."):p(".")},1e3),i.name&&i.email&&l.test(i.email)&&i.message&&fetch("https://script.google.com/macros/s/AKfycbweHBn46bB_ikYWUgVWtfV1S-IAB3bxLCA5eV0zHFKaDArWNECVvsr05AESUfj8A-St/exec",{method:"POST",body:new FormData(f.current)}).then(C=>n(!1),d({name:"",email:"",message:"",send:!0}),setTimeout(()=>{d({name:"",email:"",message:"",send:!1})},8e3)).catch(C=>console.log(C))}const[g,p]=a.useState("."),m=e.jsx("div",{className:"section-message-submit",children:e.jsx("button",{children:"Submit"})}),u=e.jsx("div",{className:"section-message-submitting",children:e.jsxs("button",{disabled:!0,children:["Submitting",g]})}),b=e.jsxs("div",{className:"send-confirm",children:[e.jsx("p",{children:"Thanks for filling the form"}),e.jsx("p",{children:"We will reach out to you soon!"})]}),[A,z]=a.useState(T());function T(){return{width:window.innerWidth,height:window.innerHeight}}a.useEffect(()=>{const o=()=>{z(T())};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[A]),w.registerPlugin(L);const k=a.useRef(null),R=a.useRef(null),H=a.useRef(null);return A.width>=1200?a.useEffect(()=>{const o=k.current;w.fromTo(o,{autoAlpha:0,translateX:"10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:o,start:"50px 45%",end:"+=1290"}});const l=R.current;w.fromTo(l,{autoAlpha:0,translateX:"-10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:l,start:"50px 45%",end:"+=1250"}})},[]):A.width<=770?a.useEffect(()=>{const o=k.current;w.fromTo(o,{autoAlpha:0,translateX:"10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:o,start:"-55% 50%",end:"+=1280"}});const l=R.current;w.fromTo(l,{autoAlpha:0,translateX:"-10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:l,start:"-65% 50%",end:"+=1250"}})},[]):a.useEffect(()=>{const o=k.current;w.fromTo(o,{autoAlpha:0,translateX:"10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:o,start:"-60% 50%",end:"+=1320"}});const l=R.current;w.fromTo(l,{autoAlpha:0,translateX:"-10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:l,start:"-60% 50%",end:"+=1300"}})},[]),e.jsxs(Le,{className:"bg-white",children:[e.jsx("div",{className:"ellipse1"}),e.jsx("div",{className:"ellipse2"}),e.jsx("div",{className:"circle1"}),e.jsx("div",{className:"circle2"}),e.jsx("div",{className:"circle3"}),e.jsx("div",{className:"circle4"}),e.jsx("div",{className:"circle5"}),e.jsxs("div",{className:"container grid grid-two-column",children:[e.jsxs("div",{className:"section-hero-data",children:[e.jsx("h2",{className:"hero-heading",children:"Contact us!"}),e.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),e.jsx("div",{className:"hero-bottom",children:e.jsx(I,{words:Te,interval:ze,typingDelay:He,erasingDelay:Ee})})]}),e.jsx("div",{className:"section-hero-image",children:e.jsx("picture",{children:e.jsx("img",{src:"./images/Contacts.svg",alt:"image",className:"hero-img",ref:H})})})]}),e.jsxs("div",{className:"section-map-message",children:[e.jsx("div",{className:"section-map",ref:R,children:e.jsx("div",{className:"map-iframe",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.1025061004142!2d78.12566068992736!3d17.597490805694715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf706d15f396d%3A0xd8767eda72322c70!2sTinkerers'%20Laboratory%20IITH!5e0!3m2!1sen!2sin!4v1688018342297!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})})}),e.jsxs("div",{className:"section-message",ref:k,children:[e.jsx("h4",{children:"Message Us"}),e.jsxs("form",{className:"section-message-box",onSubmit:v,noValidate:!0,ref:f,children:[e.jsxs("div",{className:"section-message-box-wraps",children:[e.jsx("label",{htmlFor:"message-name",children:"Name"}),e.jsx("input",{type:"text",placeholder:"Enter here",id:"message-name",name:"name",value:i.name,onChange:h})]}),r.name&&e.jsx("div",{className:"message-warning",children:"Enter your name"}),e.jsxs("div",{className:"section-message-box-wraps",children:[e.jsx("label",{htmlFor:"message-email",children:"Mail ID"}),e.jsx("input",{type:"email",placeholder:"Enter here",id:"message-email",name:"email",value:i.email,onChange:h}),r.email&&e.jsx("div",{className:"message-warning",children:"Enter your email"})]}),e.jsxs("div",{className:"section-message-box-wraps",children:[e.jsx("label",{htmlFor:"message-message",children:"Enter your Message"}),e.jsx("textarea",{placeholder:"Enter here",id:"message-message",name:"message",value:i.message,onChange:h}),r.message&&e.jsx("div",{className:"message-warning",children:"Enter your message"})]}),s?u:m,i.send&&b]})]})]})]})},Le=c.section`
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
`,Pe=()=>e.jsx(De,{children:e.jsxs("footer",{className:"bg-[#211F24]",children:[e.jsxs("div",{className:"w-screen flex flex-row justify-between px-[8rem]",children:[e.jsxs("div",{className:"flex flex-col w-[40rem]",children:[e.jsx("div",{className:"text-[#C890FF] font-bold text-[3rem]",children:"Tinkerers' Laboratory"}),e.jsxs("div",{className:"text-white text-[1.5rem]",children:["Beside Aryabatta Hostel,",e.jsx("br",{}),"Indian Institute of Technology Hyderabad,",e.jsx("br",{}),"Kandi, Sangareddy,",e.jsx("br",{}),"Telangana, India"]})]}),e.jsxs("div",{className:"flex flex-col w-[30rem] gap-8",children:[e.jsxs("div",{className:"flex flex-row justify-between h-[2rem]",children:[e.jsx("img",{src:"./images/Instagram.svg"}),e.jsx("img",{src:"./images/Facebook.svg"}),e.jsx("img",{src:"./images/LinkedIn.svg"}),e.jsx("img",{src:"./images/Discord.svg"}),e.jsx("img",{src:"./images/Twitter.svg"})]}),e.jsxs("div",{className:"flex flex-row gap-8",children:[e.jsx("img",{src:"./images/mail.svg",alt:""}),e.jsx("div",{className:"text-white text-[1.5rem] underline underline-offset-4",children:"ce22btech11040@iith.ac.in"})]}),e.jsxs("div",{className:"flex flex-row gap-8",children:[e.jsx("img",{src:"./images/mail.svg",alt:""}),e.jsx("div",{className:"text-white text-[1.5rem] underline underline-offset-4",children:"tl@campus.iith.ac.in"})]}),e.jsxs("div",{className:"flex flex-row gap-8",children:[e.jsx("img",{src:"./images/call.svg",alt:""}),e.jsx("div",{className:"text-white text-[1.5rem] underline underline-offset-4",children:"+91 95410 23301"})]})]})]}),e.jsx("div",{className:"copyright text-[#C890FF]",children:"© 2023-2024 All rights reserved | IIT Hyderabad"})]})}),De=c.footer`
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
`,Oe=P`
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
    color:${({theme:i})=>i.colors.heading};
    font-size: 8rem;
    font-weight: 700;
}
h2{
    color:${({theme:i})=>i.colors.heading};
    font-size: 8rem;
    font-weight: 700;
}
h3{
    color:${({theme:i})=>i.colors.text_heading};
    font-size: 4rem;
    font-weight: 700;
}
h4{
    color:${({theme:i})=>i.colors.heading};
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

`;const Fe=()=>{const i={colors:{heading:"#001824",text_heading:"#6C10C6",nav_color:"#484848",white:"#fff",gradient:"radial-gradient(40.83% 40.83% at 50% 50%, rgba(108, 16, 198, 0.5) 0%, rgba(186, 104, 200, 0) 100%) ",media:{mobile:"768px",tab:"1127px"}}};return e.jsxs(D,{theme:i,children:[e.jsx(Oe,{}),e.jsxs(O,{children:[e.jsx(Y,{}),e.jsxs(F,{children:[e.jsx(y,{path:"",element:e.jsx(_,{})}),e.jsx(y,{path:"team",element:e.jsx(te,{})}),e.jsx(y,{path:"events",element:e.jsx(pe,{})}),e.jsx(y,{path:"inventory",element:e.jsx(ve,{})}),e.jsx(y,{path:"projects",element:e.jsx(Re,{})}),e.jsx(y,{path:"contacts",element:e.jsx(Se,{})})]}),e.jsx(Pe,{})]})]})};M.createRoot(document.getElementById("root")).render(e.jsx(W.StrictMode,{children:e.jsx(Fe,{})}));
