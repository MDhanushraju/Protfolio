import React, { useState } from 'react';
import './About.css';
import profilePhoto from '../assets/IMG-20240927-WA0025.jpg';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <>
      <div className="about-container" id="about">
        <div className="photo-section">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
        </div>
        <div className="content-section about">
          <h1>About Me</h1>
          <p>
            I'm a front-end developer eager to build intuitive and visually appealing web experiences using React.js, JavaScript, HTML, and CSS.
            I enjoy tackling coding challenges, experimenting with new technologies, and regularly push myself to publish projects and learn from real-world feedback...
          </p>
          <div className="tab-title">
            <p className={`tab-links${activeTab === "skills" ? " active-link" : ""}`} onClick={() => setActiveTab("skills")}>Skills</p>
            <p className={`tab-links${activeTab === "education" ? " active-link" : ""}`} onClick={() => setActiveTab("education")}>Education</p>
            {/* <p className={`tab-links${activeTab === "projects" ? " active-link" : ""}`} onClick={() => setActiveTab("projects")}>Projects</p> */}
          </div>
          {activeTab === "skills" && 
            <div className="tab-contents skills">
              <ul>
                <li><span>Languages & Frameworks: </span><br />HTML5, CSS3, JavaScript (ES6), React.js, Bootstrap</li>
          <li><span>Libraries & Tools:</span><br />Git, GitHub, Redux (familiar),Webpack/Vite (familiar).</li>
             <li><span>Core Competencies:</span><br /> Responsive Design, Accessibility, API Integration (REST), DOM Manipulation,
Debugging, Cross-Browser Optimization</li>
<li><span>Workflows: </span><br /> Agile, Scrum, Version Control, Collaboration</li>
              </ul>

            </div>}
          {activeTab === "education" && 
            <div className="tab-contents education">
              <ul>
                <li><span>Bachelor of Engineering (Electronics and Communication Engineering) :-</span><br />Saveetha Engineering College
                <br />
                  CGPA: 7.5/10
                </li>
                <li><span>Higher Secondary Education :-</span><br />Sri Chaitanya Junior College<br />
                  Percentage: 71.4%</li>
                <li><span>Secondary School Education :-</span><br />Bashyam High School<br />
                  CGPA: 8.7/10</li>

               
              </ul>
            </div>}
          {/* {activeTab === "projects" && 
            <div className="tab-contents projects">
              <ul>
                <li><span>Portfolio Website</span><br />React, CSS, responsive design</li>
               
              </ul>
            </div>} */}
        </div>
      </div>
    </>
  );
}
