import React, { useEffect, useState } from 'react';
import './Home.css';
import HubSpoke from './Circle';
import profileImg from '../assets/IMG-20240927-WA0025.jpg';

export default function Home(props) {
  const text = "Welcome to my digital space!";
  const words = text.split(' ');
  const [visibleWordCount, setVisibleWordCount] = useState(0);

  useEffect(() => {
    if (visibleWordCount < words.length) {
      const timeout = setTimeout(() => {
        setVisibleWordCount(visibleWordCount + 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [visibleWordCount, words.length]);

  return (
  <>
   <section className="he" id="home" tabIndex={-1} aria-label="Home Section">
  <div className="container split">


    <div className="container one">
    {/* <div
        className="container circle profile-photo"
        style={{
          backgroundImage: `url(${profileImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '4px solid #3b3c49',
          borderRadius: '50%',
          width: '220px',
          height: '220px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.20)',
        }}
        aria-label="Profile photo of Dhanush M"
      ></div> */}
      <h2 className="text animated-letters" aria-label={text.trim()}>
  {words.map((word, index) => (
    <span
      key={index}
      className={`word ${index < visibleWordCount ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.3}s` }}
    >
      {word}
      {index < words.length - 1 && <span>{'\u00A0'}</span>}
    </span>
  ))}
</h2>

      <p className="subtitle">
        I'm Dhanush M—enthusiastic coder, lifelong learner, and frontend developer passionate about crafting seamless web experiences.
      </p>
      <p className="subtitle">
        Feel free to explore my journey, skills, and projects here. Let's build something great together!
      </p>
      <div className="d-flex justify-content-center gap">
        <a href="#about" className="btn btn-outline-primary next-btn" style={{ width: '180px', textDecoration: 'none' }}>
          Next page ⇛
        </a>
      </div>
    </div>
    
  </div>
</section>
</>

  );
}
