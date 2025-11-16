import React, { useReducer } from 'react'

export default function Main() {
function reducer(state,action){
    switch(action.type){
        case "increment":{
            return state+1
        }
        
        case "decrement":
       {
         if(state>0){
            return state-1
        }
        return state
       }
        default:
            return state
    }

}
    const [state,dispatch]=useReducer(reducer,0)
  return (
    <>
    <h3>Count: {state}</h3>
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </>
  )
}
