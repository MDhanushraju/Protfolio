import React from 'react';
import "./Resume.css";

// import resume from "..assets/M_Dhanush_Resume (2).pdf"
const resumeup = "public/M_Dhanush_Front_End (3).pdf"
// import resumeup from "../assets/M_Dhanush_Front_End (3).pdf"

export default function Resume({setResume}) {
  return (
   <>
    <div className='open'>
     
      <div className="container resume text-center">
 
      <iframe
        src={resumeup}
        title="Resume Viewer"
        frameBorder="0"
        className="inside"
        style={{ borderRadius: '12px' }}
      />
 <div className='con'>
        <button
         className='btn cross btn-danger btn-sm '
         onClick={(e)=>setResume(false)}
    >X</button></div>
      
    
    </div>
    
    </div></>
  );
}
