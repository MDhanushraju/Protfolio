import React from 'react'
import Child from './child'
import Arr from './Arr'

export default function Props() {
    let name="Dhanush Raju"
    let age=21
    let ab=["dhanush","raju","kumar","sai"]
  return (
    <>
   <Child name={name} age={age} number={717}/>
<Arr arr={ab}/>
    </>
  )
}
