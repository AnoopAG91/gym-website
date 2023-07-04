import React, { useState } from 'react'
import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'
function Header() {
const navigate = useNavigate()


const [activeHome,setActiveHome]=useState()
const [activeAbout,setActiveAbout]=useState()
const [activeContact,setActiveContact]=useState()
const [activeClasses,setActiveClasses]=useState()




let containerClassNameHome = activeHome ? styles.Activehome : styles.Home;
let containerClassNameAbout = activeAbout ? styles.ActiveAbout : styles.About;
let containerClassNameClasses = activeClasses ? styles.ActiveClasses : styles.Classes;
let containerClassNameContact = activeContact ? styles.ActiveContact : styles.Contact;

function Handle_home(){
 setActiveHome(true)
 setActiveAbout(false)
 setActiveClasses(false)
 setActiveContact(false)
 containerClassNameHome = activeHome ? styles.Activehome : styles.Home;
   navigate("/")
}

function Handle_About(){
  setActiveHome(false)
  setActiveAbout(true)
  setActiveClasses(false)
  setActiveContact(false)
  containerClassNameAbout = activeAbout ? styles.ActiveAbout : styles.About;
  navigate("/about")
  
}

function Handle_Classes(){
  setActiveHome(false)
  setActiveAbout(false)
  setActiveClasses(true)
  setActiveContact(false)
  containerClassNameClasses = activeClasses ? styles.ActiveClasses : styles.Classes;
  navigate("/classes")
  
}

function Handle_Contact(){
  setActiveHome(false)
  setActiveAbout(false)
  setActiveClasses(false)
  setActiveContact(true)
  containerClassNameContact = activeContact ? styles.ActiveContact : styles.Contact;
  navigate("/contactUS")
  
}





  return (

    <div className={styles.parent}>
    <div className={styles.Header}>
       <div className={styles.logo}>
           <h1>GYM</h1>
       </div>
       <div className={styles.pages}>
               <button className={containerClassNameHome} onClick={Handle_home} > Home</button>
               <button className={containerClassNameAbout} onClick={Handle_About}> About Us</button>
               <button className={containerClassNameClasses} onClick={Handle_Classes}> Classes</button>
               <button className={containerClassNameContact} onClick={Handle_Contact}> Contact Us </button>
       </div>
       <div className={styles.joinUs}>
           <button className={styles.joinBtn} onClick={()=>navigate("/SignUp")} >SignUp</button>
       </div>
    </div>
    </div>
  )
}

export default Header