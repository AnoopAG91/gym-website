import React from 'react'
import Header from '../../header/header'
import Styles from './contactUs.module.css'
import Footer from '../../footer/footer'
function ContactUs() {
  return (
    <div>
        <Header/>
        <div className={Styles.Img}>
            <h1>Contact US</h1>
       </div>
       <div className={Styles.ContactUs}>
            <h1>Get in touch with Us</h1>
       </div>

       <div className={Styles.ContactUs_Container}>

          <div className={Styles.Map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17006018994!2d73.69815394055104!3d18.52454503977253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689171256442!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

          </iframe>
          </div>
          <div className={Styles.Form}>
            <form className={Styles.Form} 
                  action="https://formspree.io/f/xrgwgrdb"
                  method="POST"
            > 
             <input type="text" name="UserName" placeholder='Name' autoCapitalize='off' required />
             <input type='email' name='email' placeholder='Email' autoComplete='off' required />
             <input type='mobile' name='mobile' placeholder='Mobile' autoComplete='off' required />
             <textarea placeholder='message' name="message" cols='2'rows='5 ' type='text' required></textarea>
             <button >Send</button>
            </form>
          </div>
       </div>
       <Footer/>
    </div>
  )
}

export default ContactUs