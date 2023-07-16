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
          <iframe class="gmap_iframe" width="100%" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kozhikode&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{width:400, height:600}}></iframe>
           
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