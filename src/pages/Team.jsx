import React from 'react'
import styled from "styled-components";
import WordAnimation from "../components/homeanimate";

const words = ["Think", "Tinker", "Transform"];
const interval = 200; // Delay between each letter
const typingDelay = 2000; // Delay before erasing starts
const erasingDelay = 100; // Delay between each erased letter


const Team = () => {
  return (
    <TeamWrapper>
      <div className='circle1' />
      <div className='circle2' />
      <div className='circle3' />
      <div className='circle4' />
      <div className='circle5' />
      <div className="container grid grid-two-column" id="container">
        <div className="section-hero-data">
          <h2 className='hero-heading'>Our Team</h2>
          <h3 className='hero-tag'>Tinkerers' Lab IITH</h3>
           <div className="hero-bottom">
              <WordAnimation
                words={words}
                interval={interval}
                typingDelay={typingDelay}
                erasingDelay={erasingDelay}
              />
            </div> 
        
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/Team.svg" alt="image" className='hero-img' />
          </picture>
        </div>
      </div>
      <div className="convener">
      <div className="position">Convener</div>
        <picture>
          <img src="./images/arsh.png" alt="pic" />
        </picture>
      </div>
      <div className='circle8' />
      <div className='circle9' />
      
      <div className="secretaries">
        <div className="position">Secretaries</div>
        <div className='img-secs'>
        <picture><img src="./images/aditya.png" alt="pic" /></picture>
        <picture><img src="./images/prabhat.png" alt="pic" /></picture>
        <picture><img src="./images/himanshu.png" alt="pic" /></picture>
        <picture><img src="./images/aayush.png" alt="pic" /></picture>
        </div>
        <div className="img-secs">
        <picture><img src="./images/shreeram.png" alt="pic" /></picture>
        <picture><img src="./images/nisarg.png" alt="pic" /></picture>
        <picture><img src="./images/thameem.png" alt="pic" /></picture>
        <picture><img src="./images/sarthak.png" alt="pic" /></picture>
        </div>
        <div className="img-secs">
        <picture><img src="./images/anuj.png" alt="pic" /></picture>
        <picture><img src="./images/varun.png" alt="pic" /></picture>
        </div>
      </div>
      <div className='circle6' />
      <div className='circle7' />
      
      <div className="cores">
        <div className="cores-position">Cores</div>
        <div className="cores-section">
            <div className="core"> 
            <div className="position">SOFTWARE</div>
            <ul className="name-cores">
              <li>ANEESH K</li>
              <li>PRANJAL PRAJAPATI</li>
              <li>KARAN GUPTA</li>
              <li>AMOGH BINDAL</li>
              <li>UTKARSH POL</li>
              <li>PARTH DAWAR</li>
              <li>BHUMIN HIRAPARA</li>
              <li>JAAGRIT SINGLA</li>
            </ul>
            </div>
            <div className="core"> 
            <div className="position"> MACHINE LEARNING</div>
            <ul className="name-cores">
              <li>SARAN KONALA</li>
              <li>AAYUSH GUPTA</li>
              <li>VARAD N. MALLURWAR</li>
              <li>ADITYA VARUN V</li>
              <li>KAUSHAL MORANKAR</li>
              <li>SHRAVAN BADGUJAR</li>
              <li>ATHARVA KULKARNI</li>
              <li>ADAMYA VERMA</li>
              <li>HARSH SINGH</li>
            </ul>
            </div>
            <div className="core"> 
            <div className="position"> MECHATRONICS</div>
            <ul className="name-cores">
              <li>SONIT PATIL</li>
              <li>ABHIJIT KASHYAP</li>
              <li>JAIDEEP NIRMAL</li>
              <li>PRAJWAL M</li>
              <li>SRI HARINI</li>
              <li>SARANG GUND</li>
              <li>TAHA MOHINUDDIN</li>
              <li>ABHIJIT RAJ</li>
            </ul>
           
            </div>
        </div>
        <div className="cores-section">
        <div className="core"> 
            <div className="position"> DESIGN</div>
            <ul className="name-cores">
              <li>PARVATHY SUJITH</li>
              <li>K.J. SHREEVEL</li>
              <li>PRANAV KUCHECHAR</li>
              <li>BHUMI BAGDIYA</li>
              <li>TANVI RASHMI VINEETH</li>
              <li>SMARON BOURAH</li>
              <li>ARMAN MAHAYAN</li>
              <li>SAI CHARAN GAJULA</li>
              <li>ANUP CHAVAN</li>
              </ul>
           
            </div>
        <div className="core"> 
            <div className="position">EVENTS & PRO</div>
            <ul className="name-cores">
              <li>RISHABH PILLAI</li>
              <li>SHIVA SAI PAGILLA</li>
              <li>ANANYA DUTPAL</li>
              <li>HARSHIT DAHERIYA</li>
              <li>UJJWAL KALRA</li>
              <li>ABHEY GARG</li>
              <li>PRAJWAL BHANSE</li>
            </ul>
            </div>
            <div className="core"> 
            <div className="position"> CORPORATE<br>NETWORKING & GROWTH</div>
            <ul className="name-cores">
              <li>ANUSHKA AGARWAL</li>
              <li>AADITYA LAD</li>
              <li>ANKUR KALYAN</li>
              <li>SARVESH GOYAL</li>
              <li>ATHARVA LOHARE</li>
              <li>SHUBHAM DADHICH</li>
              <li>LABDHI ANAND</li>
              <li>HANZALA AKHTER</li>
              </ul>
           
            </div>


          <div className="cores-section">
            <div className="core"> 
            <div className="position"> OPERATIONS</div>
            <ul className="name-cores">
              <li>SHUBHAM NARE</li>
              <li>AAKARSH VARSHNEY</li>
              <li>NAVIN JOSHI</li>
              <li>JATIN JAIN</li>
              <li>PRANAY REDDY RAGI</li>
              <li>OJAS KURUNDKAR</li>
              <li>RAMUNI LALITH VISHNU</li>
              <li>ARYAN GANDHI</li>
              <li>ARYAN AGARWAL</li>
            </ul>
            </div>
            </div>
        </div>
         
        
      </div>
    </TeamWrapper>
  )
}

export default Team;

const TeamWrapper = styled.section`
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
      font-size: 48px;
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
`;
