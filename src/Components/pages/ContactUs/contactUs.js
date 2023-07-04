import React from 'react'
import Header from '../../header/header'
import Styles from './contactUs.module.css'
import Footer from '../../footer/footer'
function ContactUs() {
  return (
    <div>
        <Header/>
        <div className={Styles.Img}>
            <h1>Classes We Schedule</h1>
       </div>
       <div className={Styles.ContactUs}>
            <h1>Get in touch with Us</h1>
       </div>

       <div className={Styles.ContactUs_Container}>

          <div className={Styles.Map}>
    
          </div>
          <div className={Styles.Form}>
             <input placeholder='Name'/>
             <input placeholder='Email'/>
             <input placeholder='Mobile'/>
             <input placeholder='Intested In'/>
             <button>Send</button>
          </div>
       </div>
       <Footer/>
    </div>
  )
}

export default ContactUs