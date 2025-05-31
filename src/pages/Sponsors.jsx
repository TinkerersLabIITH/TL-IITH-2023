import React from "react";
import WordAnimation from "../components/homeanimate";
import styled from "styled-components";
import { motion } from "framer-motion";

const words = ["Think", "Tinker", "Transform"];
const mainSponsor = {category: "Title Sponsor", logo:"/sponsors/image 64.png", name:"KC overseas" };
const sponsors = [
  { category: "Co-Title Sponsors", logo: "/sponsors/Group 249.png", name: "Unistring Tech Solutions" },
  { category: "Co-Title Sponsors", logo: "/sponsors/Group 253.png", name: "Institution's Innovation Council" },
  { category: "Gen AI Partner", logo: "/sponsors/Group 248.png", name: "Pathway" },
  { category: "Gold Sponsor", logo: "/sponsors/Bosch_symbol_logo_black_red 3.png", name: "Bosch" },
  { category: "Silver Sponsor", logo: "/sponsors/Logo 1.png", name: "Contentstack" },
  { category: "Silver Sponsor", logo: "/sponsors/Group 317.png", name: "NMDC" },
  { category: "AutoExpo Partner", logo: "/sponsors/image 64 (1).png", name: "Servo" },
  { category: "Learning Partners", logo: "/sponsors/image 64 (2).png", name: "QuillBot" },
  { category: "Learning Partners", logo: "/sponsors/Symbolab logo 2.png", name: "Symbolab" },
  { category: "Event Partners", logo: "/sponsors/image 65.png", name: "Cubelelo" },
  { category: "Event Partners", logo: "/sponsors/Silent Logo White 1.png", name: "Silent Owl" },
  { category: "Event Partners", logo: "/sponsors/WhatsApp Image 2025-03-18 at 21.40.48_be2ef94d 1.png", name: "RoboWars" },
  { category: "Media Partner", logo: "/sponsors/Group 253 (1).png", name: "BIG TV India" },
];
const endrows = [
  { category: "Audio Partner", logo: "/sponsors/WhatsApp Image 2025-03-18 at 21.34.20_abf7ce6b 2.png", name: "HAMMER" },
  { category: "Travel Partner", logo: "/sponsors/Group 250.png", name: "EaseMyTrip" },
  { category: "Gaming Partner", logo: "/sponsors/WhatsApp Image 2025-03-19 at 21.17.11_fcc4da9a 1.png", name:"SharePal.in"},
  { category: "Platform Partner", logo: "/sponsors/Group 308.png", name:"Unstop"}
];

const groupedSponsors = sponsors.reduce((acc, sponsor) => {
  if (!acc[sponsor.category]) {
    acc[sponsor.category] = [];
  }
  acc[sponsor.category].push(sponsor);
  return acc;
}, {});

const interval = 200; // Delay between each letter
const typingDelay = 2000; // Delay before erasing starts
const erasingDelay = 100; // Delay between each erased letter

const Inventory = () => {
  return (
    <InventoryWrapper>
      
      <motion.div whileHover={{ scale: 1.5 }} className="circle1" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle2" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle3" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle4" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle5" />
      <div className="container">
        <div className="row">
          <div className="col-xl" id="left">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 1 }}
              className="text-white hero-heading"
            >
              Sponsors
            </motion.div>
            <h3 className="hero-tag">Tinkerers' Lab IITH</h3>
            <h4 className="text-white hero-bottom">
              <WordAnimation
                words={words}
                interval={interval}
                typingDelay={typingDelay}
                erasingDelay={erasingDelay}
              />
            </h4>
          </div>
          <div className="col-xl" id="right">
            <picture>
              <motion.img
                initial={{ y: "20%", opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src="./images/Sponsorship.svg"
                alt="image"
                className="hero-img"
              />
            </picture>
          </div>
        </div>
        
        <div className="whole-sponsor">
          <div className="light left-light-1"></div>
          <div className="light left-light-2"></div>
          <div className="light left-light-3"></div>
          <div className="light right-light-1"></div>
          <div className="light right-light-2"></div>
          <div className="light right-light-3"></div>

        <div className="sponsor-title mb-[3rem]">{mainSponsor.category}</div>
        {mainSponsor && (
          <div className="main-sponsor">
            <div className="main-sponsor-card">
              <img
                className="main-sponsor-logo"
                src={mainSponsor.logo}
              />
            </div>
          </div>
        )}


        {Object.keys(groupedSponsors).map((category, index) => (
          category !== "Title Sponsor" && (
            <div key={index} className="sponsor-category">
              <h4 className="category-title">{category}</h4>
              <div className="sponsorlist">
                {groupedSponsors[category].map((sponsor, idx) => (
                  <div className="sponsor-card" key={idx}>
                    <img
                      className="sponsor-logo"
                      src={sponsor.logo}
                    />
                    </div>
                ))}
              </div>
            </div>
          )
        ))}

        <div className="sponsor-row">
          <div className="sponsor-container">
            <h4 className="sponsor-title">{endrows[0].category}</h4>
            <div className="sponsor-card">
              <img className="sponsor-logo" src={endrows[0].logo}/>
            </div>
          </div>

          <div className="sponsor-container">
            <h4 className="sponsor-title">{endrows[1].category}</h4>
            <div className="sponsor-card">
              <img className="sponsor-logo" src={endrows[1].logo}/>
            </div>
          </div>
        </div>

        <div className="sponsor-row">
          <div className="sponsor-container">
            <h4 className="sponsor-title">{endrows[2].category}</h4>
            <div className="sponsor-card">
              <img className="sponsor-logo" src={endrows[2].logo}/>
            </div>
          </div>

          <div className="sponsor-container">
            <h4 className="sponsor-title">{endrows[3].category}</h4>
            <div className="sponsor-card">
              <img className="sponsor-logo" src={endrows[3].logo}/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </InventoryWrapper>
  );
};

export default Inventory;

const InventoryWrapper = styled.section`
  padding: 9rem 0;
  overflow: hidden;
  .whole-sponsor {
    position: relative;
  }
    .light {
    position: absolute;
    width: 800px;
    height: 1100px;
    z-index: 0;
    pointer-events: none;
  }

  .left-light-1 {
    left: 0;
    top: 10%;
    background: radial-gradient(
      circle at left center,
      rgba(114, 20, 207, 0.3),
      transparent 60%
    );
  }

  .left-light-2 {
    left: 0;
    top: 40%;
    background: radial-gradient(
      circle at left center,
      rgba(114, 20, 207, 0.3),
      transparent 60%
    );
  }

  .left-light-3 {
    left: 0;
    top: 70%;
    background: radial-gradient(
      circle at left center,
      rgba(114, 20, 207, 0.3),
      transparent 60%
    );
  }

  .right-light-1 {
    right: 0;
    top: 10%;
    background: radial-gradient(
      circle at right center,
      rgba(114, 17, 210, 0.3),
      transparent 60%
    );
  }

  .right-light-2 {
    right: 0;
    top: 40%;
    background: radial-gradient(
      circle at right center,
      rgba(114, 17, 210, 0.3),
      transparent 60%
    );
  }

  .right-light-3 {
    right: 0;
    top: 70%;
    background: radial-gradient(
      circle at right center,
      rgba(114, 17, 210, 0.3),
      transparent 60%
    );
  }

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
    margin-top: -115px;
    width: 80%;
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
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
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

  .sponsor-title, .category-title {
    font-family: "Inter";
    font-weight: 700;
    color: white;
    text-align: center;
    margin-top: 2.0rem;
    margin-bottom: 2.0rem;
  }

  .sponsor-title {
    font-size: 3.2rem;
  }

  .category-title {
    font-size: 3rem;
  }

  .sponsorlist {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
    margin: 0 auto;
    max-width: 1200px;
  }

  .sponsor-card {
    background: #16213e;
    border-radius: 15px;
    padding: 2rem;
    width: 280px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sponsor-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  .sponsor-logo {
    width: 90%;
    height: 90%;
    object-fit: contain;
    margin-bottom: 1.5rem;
  }

  .main-sponsor {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .main-sponsor-card {
    background:rgb(89, 13, 165);
    border-radius: 20px;
    padding: 3rem;
    width: 400px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 15px 30px rgba(166, 53, 236, 0.3);
    position: relative;
    overflow: hidden;
  }

  .main-sponsor-logo {
    width: 90%;
    height: 90%;
    object-fit: contain;
    margin-bottom: 1.5rem;
    z-index: 1;
  }



  .sponsor-row {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
  }

  .sponsor-container {
    text-align: center;
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  .sponsor {
    background-color: #111827;
    padding: 20px;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    .sponsor-row {
      flex-direction: column;
      align-items: center;
    }

    .sponsor-container {
      max-width: 100%;
      margin: 10px 0;
    }

    .sponsor-card {
      height: 120px;
    }
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

    .sponsor-card {
      width: 220px;
      padding: 1.5rem;
    }

    .main-sponsor-card {
      width: 320px;
      padding: 2rem;
    }
  }

  @media (max-width: 768px) {
    .sponsor-card {
      width: 160px;
      padding: 1rem;
    }

    .sponsor-logo {
      width: 80%;
      height: 80%;
    }

    .main-sponsor-card {
      width: 280px;
      padding: 1.5rem;
    }

    .main-sponsor-logo {
      width: 80%
      height: 80%;
    }
  }
`;