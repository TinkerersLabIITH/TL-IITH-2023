import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";


const Page1 = ({ handleCardClick }) => {
  return (
    <ProjectWrapper>
      <div className="flex flex-row justify-between px-[5%] w-full">
        <img src="./images/teachnook-logo.svg" alt="logo" />
        <img src="./images/workshops-img.svg" alt="logo" />
      </div>

      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={1}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont" onClick={() => handleCardClick(1)}>
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Computer Science</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Explore the field of Computer Science with programming, artificial intelligence, data science, and cybersecurity. Learn to develop software applications, AI models, and secure digital systems for various industries.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Programming</li>
                    <li>Artificial Intelligence</li>
                    <li>Data Science</li>
                    <li>Cybersecurity</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-4 col-md-6" key={2}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont" onClick={() => handleCardClick(2)}>
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Electronics & Communication</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Gain expertise in embedded systems, IoT, robotics, and wireless communication. Learn how to design intelligent electronic devices, automation systems, and smart networks for modern applications.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Embedded Systems</li>
                    <li>IoT</li>
                    <li>Robotics</li>
                    <li>Wireless Communication</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6" key={3}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont" onClick={() => handleCardClick(3)}>
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Mechanical Engineering</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Discover mechanical design, thermodynamics, and automotive technologies. Develop skills in product design, manufacturing processes, and energy-efficient systems for various engineering applications.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Mechanical Design</li>
                    <li>Thermodynamics</li>
                    <li>Automotive Technologies</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont" onClick={() => handleCardClick(4)}>
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Civil Engineering</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn the fundamentals of structural engineering, construction management, and urban infrastructure. Work on sustainable building designs, smart city projects, and large-scale civil structures.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Structural Engineering</li>
                    <li>Construction Management</li>
                    <li>Urban Infrastructure</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6" key={5}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont" onClick={() => handleCardClick(5)}>
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Management and<br />Business</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Explore Digital Marketing, Finance, HR Management, and Entrepreneurship. Learn branding, risk analysis, HR analytics, and leadership. Gain hands-on experience in SEO, investment management, and corporate HR.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Digital Marketing</li>
                    <li>Finance</li>
                    <li>HR Management</li>
                    <li>Entrepreneurship</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </ProjectWrapper>
  );
};

const Page2 = () => {
  return (
    <ProjectWrapper>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 1 }}
        className="hero-heading"
      >
        Computer Science
      </motion.div>
      <div className="hero-tag">Tinkerers' Lab</div>

      <div className="row" id="aims">
        <div className="col-lg-12">
          <div className="seperator"></div>
          <div className="desp1" style={{ color: "#fff" }}>
            Covers cutting-edge technologies like Machine Learning, Data Science, AI, Web Development, Cybersecurity, and Cloud Computing. Learn to build intelligent systems, secure networks, scalable applications, and data-driven solutions. Hands-on training with Python, JavaScript, TensorFlow, AWS, and ethical hacking tools, ensuring real-world expertise. The curriculum includes 10 minor assignments and 1 major assignment, providing practical exposure to industry-relevant challenges. Applications range from software development to AI-powered automation and cybersecurity defense.
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Machine Learning</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn Supervised & Unsupervised Learning, Regression, Clustering, and Recommender Systems. Work on real-world datasets using Python, Scikit-learn, and TensorFlow. Applications: AI assistants, fraud detection, healthcare analytics.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Introduction to Machine Learning</li>
                    <li>Supervised & Unsupervised Learning</li>
                    <li>Regression & Classification Algorithms</li>
                    <li>Clustering & Recommender Systems</li>
                    <li>Neural Networks & Deep Learning</li>
                    <li>Model Training & Evaluation</li>
                    <li>Tools: Scikit-learn, Tensor Flow</li>
                    <li>Real-world Applications & Projects</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Data Science</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Covers statistics, MySQL, NumPy, Pandas, and Python for data analysis. Learn EDA (Exploratory Data Analysis), Machine Learning basics, and Data Visualization. Applications: Business analytics, finance, healthcare, marketing insights.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Introduction to Data Science</li>
                    <li>Statistics for Data Science</li>
                    <li>MySQL for Data Management</li>
                    <li>Python Libraries – NumPy & Pandas</li>
                    <li>Exploratory Data Analysis (EDA)</li>
                    <li>Data Visualization Techniques</li>
                    <li>Machine Learning Basics</li>
                    <li>Business Analytics & Case Studies</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Artificial Intelligence</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn Neural Networks, NLP (Natural Language Processing), and Computer Vision. Work on Chatbots, Speech Recognition, and AI-powered automation. Applications: Self-driving cars, AI recommendations, virtual assistants.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Fundamentals of AI</li>
                    <li>Neural Networks & Deep Learning</li>
                    <li>NLP (Natural Language Processing)</li>
                    <li>Computer Vision & Image Processing</li>
                    <li>AI in Robotics & Automation</li>
                    <li>AI Ethics & Bias Handling</li>
                    <li>Hands-on AI Projects</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Web Development</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Covers HTML, CSS, JavaScript, React.js, and backend development with Node.js & MongoDB. Learn to build dynamic, responsive web applications. Applications: E-commerce platforms, blogs, SaaS products, and dashboards.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Introduction to Web Technologies</li>
                    <li>HTML, CSS, JavaScript Basics</li>
                    <li>Advanced JavaScript & Frameworks (React.js)</li>
                    <li>Backend Development (Node.js, Express.js)</li>
                    <li>Database Management (MongoDB)</li>
                    <li>API Development & Integration</li>
                    <li>Web Security Best Practices</li>
                    <li>Full-Stack Development Projects</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>



      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Cyber Security</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn ethical hacking, penetration testing, cryptography, and malware analysis. Gain hands-on skills in vulnerability testing, security audits, and compliance frameworks. Applications: Network security, threat detection, cybersecurity consulting.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Introduction to Cyber Security</li>
                    <li>Ethical Hacking & Penetration Testing</li>
                    <li>Network Security & Firewalls</li>
                    <li>Cryptography & Data Protection</li>
                    <li>Malware Analysis & Threat Detection</li>
                    <li>Cyber Security Frameworks & Compliance</li>
                    <li>Hands-on Security Audits</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Cloud Computing</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Covers AWS, Google Cloud, Azure, Kubernetes, and DevOps. Learn serverless computing, containerization, and cloud security. Applications: Scalable infrastructure, cloud-based app deployment, enterprise solutions.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Cloud Fundamentals & Architecture</li>
                    <li>AWS, Google Cloud, Azure Overview</li>
                    <li>Kubernetes & Containerization</li>
                    <li>DevOps & CI/CD Pipelines</li>
                    <li>Cloud Security & Risk Management</li>
                    <li>Serverless Computing & Microservices</li>
                    <li>Real-world Cloud Deployments</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>


      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>App Development</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn iOS (Swift), Android (Kotlin), and cross-platform development (Flutter/React Native). Build user-friendly mobile applications with API integration and UI/UX best practices. Applications: E-commerce, mobile banking, fitness tracking apps.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Mobile App Development Fundamentals</li>
                    <li>iOS Development (Swift)</li>
                    <li>Android Development (Kotlin)</li>
                    <li>Cross-Platform Development (Flutter, React Native)</li>
                    <li>UI/UX Design Principles</li>
                    <li>API Integration & Backend Connectivity</li>
                    <li>Deployment & App Store Optimization</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>AR/VR</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Covers Unity, Unreal Engine, 3D modeling, and spatial computing. Learn to create immersive gaming, education, and medical applications. Applications: Virtual training, 3D simulations, metaverse solutions.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Introduction to AR/VR</li>
                    <li>Unity & Unreal Engine Basics</li>
                    <li>3D Modeling & Rendering</li>
                    <li>Spatial Computing & Interaction</li>
                    <li>AR/VR Game & Simulation Development</li>
                    <li>Industry-Specific Applications</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );

};

const Page3 = () => {
  return (

    <ProjectWrapper>

      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 1 }}
        className="hero-heading"
      >
        Electronics & Communication
      </motion.div>
      <div className="hero-tag">Tinkerers' Lab</div>

      <div className="row" id="aims">
        <div className="col-lg-12">
          <div className="seperator"></div>
          <div className="desp1" style={{ color: "#fff" }}>
            Focuses on Embedded Systems, IoT, Robotics, and HEV. Learn to work with microcontrollers, real-time operating systems, and AI-driven automation. Hands-on experience in designing smart devices, autonomous robots, and high-speed communication networks. The curriculum includes 10 minor assignments and 1 major assignment, ensuring practical application of concepts. Applications include smart cities, industrial automation, and 5G technology.
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Embedded Systems</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn microcontrollers (Arduino, Raspberry Pi), Real-time OS, and Firmware Development. Work on sensor interfacing, hardware programming, and embedded C. Applications: IoT devices, smart appliances, automotive systems.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Introduction to Microcontrollers (Arduino, Raspberry Pi)</li>
                    <li>Real-time Operating Systems (RTOS)</li>
                    <li>Firmware Development & Embedded C</li>
                    <li>Sensor Interfacing & Hardware Programming</li>
                    <li>Communication Protocols (I2C, SPI)</li>
                    <li>Applications in IoT & Automotive Systems</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Internet of Things</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Covers wireless communication protocols (WiFi, ZigBee, MQTT) and cloud integration. Build sensor-based automation systems and smart city applications. Applications: Smart homes, wearables, healthcare monitoring.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Basics of IoT & Connected Devices</li>
                    <li>Wireless Communication Protocols (WiFi, ZigBee, MQTT)</li>
                    <li>IoT Sensors & Actuators</li>
                    <li>Cloud Integration & Data Processing</li>
                    <li>IoT Security & Device Management</li>
                    <li>IoT Applications & Industry Case Studies</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Robotics</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn robot programming, AI integration, motion control, and robotic arms. Work on autonomous robots, drone navigation, and AI-powered bots. Applications: Industrial automation, medical robotics, autonomous vehicles.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Fundamentals of Robotics & Kinematics</li>
                    <li>Motion Control & Robotic Arms</li>
                    <li>AI Integration in Robotics</li>
                    <li>Autonomous Robot Development</li>
                    <li>Drone Navigation & Control Systems</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Hybrid Electric Vehicles</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn EV components, battery management, and power electronics. Work on regenerative braking, energy-efficient models, and green mobility. Applications: Electric cars, hybrid vehicle technology.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Introduction to Electric & Hybrid Vehicles</li>
                    <li>Battery Management Systems (BMS)</li>
                    <li>Power Electronics & Energy Recovery</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>


    </ProjectWrapper>
  );

};

const Page4 = () => {
  return (

    <ProjectWrapper>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 1 }}
        className="hero-heading"
      >
        Mechanical Engineering
      </motion.div>
      <div className="hero-tag">Tinkerers' Lab</div>

      <div className="row" id="aims">
        <div className="col-lg-12">
          <div className="seperator"></div>
          <div className="desp1" style={{ color: "#fff" }}>
            Explores core mechanical concepts like AutoCAD, IC Engine Design, Hybrid Electric Vehicles, and 3D Printing. Gain expertise in industrial design, manufacturing processes, automotive engineering, and sustainable mobility solutions. Hands-on training in simulation, CAD modeling, and vehicle aerodynamics. The curriculum includes 10 minor assignments and 1 major assignment, ensuring practical application of concepts. Applications range from automobile engineering to renewable energy technologies.
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>AutoCAD & 3D Modelling</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn CAD design, 3D rendering, and blueprint drafting. Work with SolidWorks, CATIA, and Revit for industrial design. Applications: Architecture, mechanical product design, structural engineering.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Fundamentals of CAD Design</li>
                    <li>Blueprint Drafting & 3D Rendering</li>
                    <li>Industrial Design Tools (SolidWorks, CATIA)</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Car Designing & IC Engine</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Covers automobile aerodynamics, fuel efficiency, and combustion engine design. Learn engine simulation, automotive materials, and sustainability in transport. Applications: Automobile manufacturing, racing car engineering.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Automotive Aerodynamics & Vehicle Dynamics</li>
                    <li>Combustion Engine Design & Fuel Efficiency</li>
                    <li>Engine Simulation & Material Selection</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>


    </ProjectWrapper>
  );

};

const Page5 = () => {
  return (
    <ProjectWrapper>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 1 }}
        className="hero-heading"
      >
        Civil Engineering
      </motion.div>
      <div className="hero-tag">Tinkerers' Lab</div>

      <div className="row" id="aims">
        <div className="col-lg-12">
          <div className="seperator"></div>
          <div className="desp1" style={{ color: "#fff" }}>
            Covers Construction Planning, Structural Analysis, and Smart City Development. Learn project management, material testing, blueprint drafting, and high-rise structural design. Hands-on experience with AutoCAD, 3D modeling, and sustainable infrastructure solutions. The curriculum includes 10 minor assignments and 1 major assignment, ensuring practical application of concepts. Applications include smart city planning, green architecture, and large-scale construction projects.
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>AutoCAD & 3D Modelling</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn blueprint drafting, 3D visualization, and structural design. Work on industry-standard tools like AutoCAD, Revit, and SketchUp. Applications: Architecture, urban planning, civil engineering.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Building Design & Architectural Planning</li>
                    <li>3D Modeling & Structural Drafting</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Construction Planning & Structural Analysis</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Covers material testing, project management, and reinforced concrete structures. Learn high-rise building designs and stability simulations. Applications: Smart city planning, large-scale infrastructure projects.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Project Management & Planning</li>
                    <li>Reinforced Concrete Structures & Material Testing</li>
                    <li>Structural Stability Simulations</li>
                    <li>Designing and Analysis tools such as Staad Pro</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>


    </ProjectWrapper>
  );

};

const Page6 = () => {
  return (

    <ProjectWrapper>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 1 }}
        className="hero-heading"
      >
        Management & Business
      </motion.div>
      <div className="hero-tag">Tinkerers' Lab</div>

      <div className="row" id="aims">
        <div className="col-lg-12">
          <div className="seperator"></div>
          <div className="desp1" style={{ color: "#fff" }}>
            Includes Digital Marketing, Finance, Stock Market, and Human Resource Management. Learn data-driven marketing, social media strategies, financial analysis, and corporate leadership. Hands-on experience with SEO, Google Ads, portfolio management, and talent acquisition. The curriculum includes 10 minor assignments and 1 major assignment, providing practical exposure to real-world business challenges. Applications in business growth, investment banking, HR consulting, and entrepreneurship.
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="row" id="aims2" justify-content-center>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Digital Marketing</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                  Learn SEO, Google Ads, social media marketing, and content strategy. Hands-on training with Facebook & Instagram Ads, LinkedIn branding, and influencer marketing. Applications: Brand growth, online advertising, lead generation.
                  
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>SEO & Content Strategy</li>
                    <li>Google Ads & Paid Campaigns</li>
                    <li>Social Media Marketing (Facebook, Instagram, LinkedIn)</li>
                    <li>Influencer Branding & Affiliate Marketing</li>

                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Finance & Stock Market</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                Covers investment strategies, stock market analysis, and financial risk management. Learn real-time trading simulations, portfolio management, and crypto investments. Applications: Wealth management, investment banking, fintech.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Investment Strategies & Risk Management</li>
                    <li>Stock Market Analysis & Trading</li>
                    <li> Crypto Investments & Portfolio Management</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6" key={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="cont"></motion.div>
            <a href="https://forms.gle/QNyPECMPXzydgTZJ8" target="_blank">
              <div className="content" style={{ backgroundColor: "#232126" }}>
                <div className="heading" style={{ color: "#C890FF" }}>Finance & Stock Market</div>
                <div className="line"></div>
                <div className="desp2" style={{ color: "#fff" }}>
                Learn talent acquisition, payroll management, HR analytics, and labor laws. Develop skills in employee engagement, leadership development, and corporate training. Applications: HR consulting, corporate recruitment, HR tech startups.
                  <ul className="font-semibold justify-start list-disc" style={{ paddingLeft: "20px", color: "#fff" }}>
                    <li>Talent Acquisition & HR Analytics</li>
                    <li>Payroll Management & Labor Laws</li>
                    <li>Leadership Development & Corporate Training</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

    </ProjectWrapper>
  );

};


const Workshops = () => {

  const [page, setPage] = useState(0);
  const handleCardClick = (id) => {
    setPage(id); // Update the page state based on the card's ID
  };

  console.log(page);

  // Render different components based on the page state
  const renderPage = () => {
    switch (page) {
      case 0:
        console.log("Page 1");
        return <Page1 handleCardClick={handleCardClick} />;
      case 1:
        return <Page2 />;
      case 2:
        return <Page3 />;
      case 3:
        return <Page4 />;
      case 4:
        return <Page5 />;
      case 5:
        return <Page6 />;
      default:
        return (
          <div className="flex justify-center">
            <h2 className="text-white text-center">
              Page not found! Return to the main page.
            </h2>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setPage(0)}
            >
              Go Back
            </button>
          </div>
        );
    }
  };

  return <div>{renderPage()}</div>;
};
export default Workshops;


const ProjectWrapper = styled.section`
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
`;
