import React from 'react';
import "./Resume.css";

// Files in public/ folder are served from root by Vite
const resumeup = "/M_Dhanush_Front_End (3).pdf"

export default function Resume({setResume}) {
  return (
   <>
    <div className='open'>
     
      <div className="container resume text-center">
         <div className='con'>
        <button
         className='btn cross btn-danger btn-sm '
         onClick={(e)=>setResume(false)}
    >X</button></div>
 
      <iframe
        src={resumeup}
        title="Resume Viewer"
        frameBorder="0"
        className="inside"
        style={{ borderRadius: '12px', width: '100%', minHeight: '600px' }}
        allow="fullscreen"
      />

      
    
    </div>
    
    </div></>
  );
}
