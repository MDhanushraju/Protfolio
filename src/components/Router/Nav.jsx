import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {

    const navigate=useNavigate()
  return (
   <>
   <div className="contanier">
    <nav className="contanier d-flex justify-content-around align-text-center  bg-dark p-3">
       <Link to={()=>navigate("/")}> <h3 className="text-white">NavBar</h3></Link>
    <div className='d-flex justify-content-around align-text-center text-decoration-none'>
      <Link to="/" className="text-white mx-2">Home</Link>
      <Link to="/about" className="text-white mx-2">About</Link>
      <Link to="/todo" className="text-white mx-2">Todo</Link>
    </div>

    </nav>
   </div>

   </>
  )
}
