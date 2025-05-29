import { ClassNames } from '@emotion/react';
import React, { useState } from 'react'
import styled from "styled-components";
import Cybercon from "../images/cyberevent.png"
import TinkeringEp2 from "../images/tinkering101ep2.png"
import TinkeringEp1 from "../images/tinkering101ep1.png"
import TinkerersNight from "../images/tinkerersnight.png"
import tn from "../images/tinkerersnight2024.png"
import orientation from "../images/orientation.jpg"
import micromouse from "../images/micromouse.png"
import treasure from "../images/treasure.jpg"
import keynote from "../images/keynote.jpg"
import workshop from "../images/workshop.jpg"
import thrust from "../images/thrust.jpg"
import WordAnimation from "../components/homeanimate";
import { motion } from "framer-motion";
const Events = () => {
  const words = ["Think", "Tinker", "Transform"];
  const interval = 200;
  const typingDelay = 2000;
  const erasingDelay = 100;

  const divStyle = {
    backgroundImage: `url(${Cybercon})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  const tnImg = {
    backgroundImage: `url(${tn})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  const workshopImg = {
    backgroundImage: `url(${workshop})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  const thrustImg = {
    backgroundImage: `url(${thrust})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  const keyImg = {
    backgroundImage: `url(${keynote})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  const thImage = {
    backgroundImage: `url(${treasure})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  const micromouseImg = {
    backgroundImage: `url(${micromouse})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  const orImage = {
    backgroundImage: `url(${orientation})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  const EP2Image = {
    backgroundImage: `url(${TinkeringEp2})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  const EP1Image = {
    backgroundImage: `url(${TinkeringEp1})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  const TNightIMG = {
    backgroundImage: `url(${TinkerersNight})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius: '67.5px'
  }
  return (
    <EventWrapper>
      <motion.div whileHover={{ scale: 1.5 }} className="circle1" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle2" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle3" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle4" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle5" />
      <div className="circle6" />
      <div className='circle7' />
      <div className='circle8' />
      <div className='circle9' />
      <div className='circle10' />
      <div className='circle11' />
      <div className='circle12' />
      <div className='circle13' />
      <div className='circle14' />
      <div className='circle15' />
      <div className='circle16' />
      <div className='circle17' />
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h2 className='text-white hero-heading'>Events</h2>
          <h3 className='hero-tag'>Tinkerers’ Lab IITH</h3>
          <h4 className="text-white hero-bottom">  <WordAnimation
            words={words}
            interval={interval}
            typingDelay={typingDelay}
            erasingDelay={erasingDelay}
          /></h4>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/Event.svg" alt="image" className='hero-img' />
          </picture>
        </div>
      </div>

      <div className="flex-container">

        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={thrustImg}>
              <div className='Content'>
                <p>Thrust, the flagship event organized by Tinkerers’ Lab, took place over three exciting days from March 1st to 3rd, 2024. The event was brimming with activities, creating a dynamic and engaging atmosphere for all participants.</p>
              </div>
            </div>
            <div className="Right-Img">
              <div className="image-name">Thrust 2024</div>
              <div className="decoration"></div>
            </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={workshopImg}>
              <div className='Content'>
                <p>Tinkerers’ Lab hosted workshops and bootcamps covering more than 10 essential topics across various disciplines. Each session, supported by Tinkerers’ Lab, attracted an average audience of over 200 participants.</p>
              </div>
            </div>
            <div className="Left-Img">
              <div className="image-name">Workshops</div>
              <div className="decoration"></div>
            </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={tnImg}>
              <div className='Content'>
                <p>Tinkering Night is the annual signature event of Tinkerers’ Lab, where students gather in the lab from approximately 10 PM to 6 AM to work on a project of their choice, striving to complete it successfully by morning.</p>
              </div>
            </div>
            <div className="Right-Img">
              <div className="image-name">Tinkerers' Night 2024</div>
              <div className="decoration"></div>
            </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={keyImg}>
              <div className='Content'>
                <p>During the keynote talk, students gained valuable insights into industry requirements and current technologies in use. Bosch initiated negotiations with Tinkerers’ Lab (TL) for several industry-based projects, indicating potential collaborations ahead.</p>
              </div>
            </div>
            <div className="Left-Img">
              <div className="image-name">Thrust-Keynote Talk</div>
              <div className="decoration"></div>
            </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={thImage}>
              <div className='Content'>
                <p>The nighttime treasure hunt captivated students as they navigated through clues to uncover hidden prizes, significantly elevating enthusiasm and participation. Featuring 10 competitive teams, each consisting of 4-5 members, the event amplified excitement and awareness about Thrust among students.</p>
              </div>
            </div>
            <div className="Right-Img">
              <div className="image-name">Treasure Hunt</div>
              <div className="decoration"></div>
            </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={micromouseImg}>
              <div className='Content'>
                <p>As part of the inter-hostel general championship at IIT Hyderabad, Tinkerers’ Lab volunteered to conduct the Micromouse competition with a high level of professionalism. They led the development of multiple micromouse bots in collaboration with the student community.</p>
              </div>
            </div>
            <div className="Left-Img">
              <div className="image-name">Micromouse</div>
              <div className="decoration"></div>
            </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={orImage}>
              <div className='Content'>
                <p>For the Orientation event, Tinkerers’ Lab welcomed new students with an engaging introduction to its facilities and resources. The event provided an overview of various projects and activities, encouraging students to explore their creativity and technical skills. With hands-on demonstrations and interactive sessions, Tinkerers’ Lab successfully inspired enthusiasm and participation among the newcomers.</p>
              </div>
            </div>
            <div className="Right-Img">
              <div className="image-name">Orientation-2023</div>
              <div className="decoration"></div>
            </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={divStyle}>
              <div className='Content'>
                <p>For the Cybercon event, Tinkerers’ Lab, in collaboration with the Cyber Security Club Kludge, hosted an engaging cyber conclave. The event featured expert talks, hands-on workshops, and interactive sessions focused on the latest trends and challenges in cybersecurity. Participants gained valuable knowledge and skills, while the collaborative effort successfully fostered a deeper interest and understanding of cybersecurity among students.</p>
              </div>
            </div>
            <div className="Left-Img">
              <div className="image-name">CyberCon-2023</div>
              <div className="decoration"></div>
            </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={EP2Image}>
              <div className='Content'>
                <p>For the Tinkering Episodes, Tinkerers’ Lab conducted a series of interactive sessions designed to inspire creativity and innovation. Each episode featured expert-led discussions, hands-on activities, and collaborative projects, covering a wide range of topics. These sessions provided students with practical skills and insights, fostering a vibrant learning environment and encouraging continuous exploration and tinkering.</p>
              </div>
            </div>
            <div className='Right-Img'>
              <div className="image-name-2">Tinkering-101-Episode-02</div>
              <div className="decoration-2"></div>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={EP1Image}>
              <div className='Content'>
                <p>For the Tinkering Episodes, Tinkerers’ Lab conducted a series of interactive sessions designed to inspire creativity and innovation. Each episode featured expert-led discussions, hands-on activities, and collaborative projects, covering a wide range of topics. These sessions provided students with practical skills and insights, fostering a vibrant learning environment and encouraging continuous exploration and tinkering.</p>
              </div>
            </div>
            <div className="Left-Img">
              <div className="image-name-3">Tinkering-101-Episode-01</div>
              <div className="decoration-3"></div>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="image">
            <div className='Effect' style={TNightIMG}>
              <div className='Content'>
                <p>For Tinkerers’ Night, Tinkerers’ Lab hosted an immersive overnight event where students gathered from 10 PM to 6 AM to work on projects of their choice. The event featured collaborative problem-solving, expert guidance, and a dynamic atmosphere, allowing participants to bring their ideas to life. Tinkerers’ Night successfully fostered creativity, teamwork, and innovation, making it a memorable and impactful experience for all involved.</p>
              </div>
            </div>
            <div className='Right-Img'>
              <div className="image-name-4">Tinkerers-Night</div>
              <div className="decoration-4"></div>
            </div>
          </div>
        </div>
      </div>
    </EventWrapper>
  )
}

export default Events;

const EventWrapper = styled.section`
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
`;