import React from 'react'

export default function Arr({arr}) {
  return (
    <>
    <h6>
        {
          arr.map((items,i)=>{
            return <span key={i}><h6>{items}</h6></span>
          })
        }
    </h6>
    </>
  )
}
