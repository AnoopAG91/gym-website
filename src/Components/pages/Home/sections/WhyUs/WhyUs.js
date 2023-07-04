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
            <div className={Styles.Border1}></div>
            <div className={Styles.Border2}></div>

        </div>

    </div>
  )
}

export default WhyUs