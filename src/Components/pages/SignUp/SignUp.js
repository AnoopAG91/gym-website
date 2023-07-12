import React, { useState } from 'react'
import Styles from './SignUp.module.css'
import { useNavigate } from 'react-router-dom'

function SignUp() { 
  const [email,setEmail]=useState("")
  const [mobile,setMobile]=useState("")
  const [password,setPassword]=useState("")
  const [ComPassword,setConPassword]=useState("")

  const navigate=useNavigate()

 

   const EmailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;      // Regular expression pattern for email validation
   const MobileValidation = /^[0-9]{10}$/;      // Regular expression pattern for mobile number validation

  function handle(){
    let Users=JSON.parse(localStorage.getItem("Users" ) || "[]")
    
    
    let user={
    email:email,
    password:password,
    mobile:mobile
   }
    
   if(EmailValidation.test(email)&&MobileValidation.test(mobile)&&password.length>3&&password==ComPassword){
   Users.push(user)
   localStorage.setItem("Users",JSON.stringify(Users))

   navigate("/login")
  }else{
    alert("Invalid")
  }
  }

  return (
   <div className={Styles.container}>
    <div className={Styles.signUp}>

      <input className={Styles.email} placeholder='Email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input className={Styles.mobile} placeholder='mobile' type='number' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>          
      <input className={Styles.pasword} placeholder='pasword' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />  
      <input className={Styles.pasword} placeholder='comfirm_pasword' type='password' value={ComPassword} onChange={(e)=>setConPassword(e.target.value)} />                    
      <button className={Styles.submit} onClick={handle} >Submit</button>
      <p>Allready have account <button onClick={()=> navigate("/login")}>click here</button></p>

    </div>
   </div> 
  )
}

export default SignUp