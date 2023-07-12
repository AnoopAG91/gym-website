import { useNavigate } from 'react-router-dom'
import Styles from './login.module.css'
import React, { useState } from 'react'

function Login() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  const navigate=useNavigate()


  let users= JSON.parse(localStorage.getItem("Users"))


  function handle(){
        let count=false
        users.map((user)=>{
                 if(user.email==email && user.password==password){
                     navigate("/")
                     count=true      
                 }
        })
        if(count==false){
            alert("invalid")
        }
        console.log(users)
  }
 
  return (
    <div className={Styles.container}>
    <div className={Styles.Login}>

      <input className={Styles.email} placeholder='Email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input className={Styles.pasword} placeholder='pasword' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />  
      <button className={Styles.submit} onClick={handle} >Login</button>
      <p>Don't have account yet <button onClick={()=> navigate("/SignUp")}>click here</button> </p>
    </div>
   </div> 
  )
}

export default Login