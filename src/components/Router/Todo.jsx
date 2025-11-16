import React, { useState } from 'react'

export default function Todo() {
let intialitem = JSON.parse(localStorage.getItem("localData"))
  ? JSON.parse(localStorage.getItem("localData"))
  : [];
    let [data,setData]=useState("")
    let [value,setValue]=useState(intialitem)
    

    let store=(e)=>{
        setData(e.target.value)
    }

    let handleCheck=(id)=>{
      let checked=value.map((ele)=>ele.id===id?{...ele,isChecked:!ele.isChecked}:ele)
      localStorage.setItem("localData", JSON.stringify(checked));
setValue(checked)
    }

    let handleDelete=(id)=>{
       let deleted=value.filter((ele)=>ele.id!==id)
        localStorage.setItem("localData", JSON.stringify(deleted));
        setValue(deleted)
      }

    let handleInput=(e)=>{
  e.preventDefault();
  let dat={
    data,
    id:Math.floor(Math.random()*100),
    isChecked:false
  }

let updated=[...value, dat]
localStorage.setItem("localData", JSON.stringify(updated))
    setValue(updated)
    alert(`Task added: ${data}`);
    setData(""); 
    }
    
  return (
   <>
 
 <div className="container">
    <div className="contanier w-50 text-center">
      <h3>Todo-List</h3>
        <form action="" className='form-control mt-4 ms-4  d-flex'>
            <input type="text" className='form-control ' placeholder='enter the task' onChange={store}  />
            <button className='btn btn-success  form-control' style={{width:"50px"}} onClick={handleInput}>add</button>
        </form>
    </div>
    <div className="contanier mt-4" style={{width:"500px"}}>
      {
        value.map((e)=>(
          <ul key={e.id} className='d-flex justify-content-between w-100'>
            <li><input type="checkbox" name="" id="" checked={e.isChecked} onClick={()=>handleCheck(e.id)} /></li>
            <li>{e.data}</li>
            <li><button className='btn btn-success text-dark' style={{backgroundColor:e.isChecked?"green":"yellow"}} onClick={()=>handleCheck(e.id)}>{e.isChecked?"completed":'not done'}</button></li>
            <li><button className='btn btn-danger' onClick={()=>{handleDelete(e.id)}}>Delete</button></li>
          </ul>
        ))
      }
    </div>

 </div>
   
   </>
  )
}
