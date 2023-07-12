import React from 'react'
import Styles from './WhyUs.module.css'

function WhyUs() {
  return (
    <div className={Styles.WhyUsSection}>
       <div className={Styles.content}>
        <h1> Why Choose Us ?</h1>
        <h2>Consultation with expert</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry<br/>Lorem Ipsum is simply dummy text of the printing  </p>
        
        <h2>Best Workout Facilities</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry <br/>Lorem Ipsum is simply dummy text of the printing </p>  
        </div> 
        <div className={Styles.Video}>

          <img src='https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='100%' width='100%' alt='img' />
          

        </div>

    </div>
  )
}

export default WhyUs