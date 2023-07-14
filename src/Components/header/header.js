import React, { useState } from 'react'
import  './header.css'
import { NavLink, useNavigate } from 'react-router-dom'



function Header() {
  const [navbar , setNavbar]=useState(false)
 
 const navigate=useNavigate()

 function changeBcakGround(){
    console.log(window.scrollY)
    if(window.scrollY>300){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
 }
window.addEventListener("scroll",changeBcakGround)
  return (

    <div className="parent">
    <div className={navbar?'Header active_Header':'Header' }>
       <div className="logo">
           <h1>GYM</h1>
       </div>
       <div className="pages">
        <nav >
            <ul className="UL">
                 <li>
                  <NavLink exact to="/"  className="page"> Home </NavLink> 
                 </li>
                 <li>
                  <NavLink to="/about"  className="page"> About </NavLink> 
                 </li>
                 
                 <li>
                  <NavLink to="/classes"  className="page"> Classes </NavLink> 
                 </li>
                 <li>
                   <NavLink to="/contactUS"  className="page"> Contact</NavLink>
                 </li>
            </ul>      
        </nav>
       </div>
       <div className="joinUs">
           <button className="joinBtn" onClick={()=>navigate("/SignUp")} >SignUp</button>
       </div>
    </div>
    </div>
  )
}

export default Header