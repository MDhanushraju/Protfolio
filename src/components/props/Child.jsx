import React from 'react'
import Arr from './Arr'

export default function Child({name,age,number}) {
    console.log(name)
  return (
   <>
   <h3>{name}</h3>
   <h2>{age}</h2>
   <h4>{number}</h4>
 
   
   </>
  )
}
