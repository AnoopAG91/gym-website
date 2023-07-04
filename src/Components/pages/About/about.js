import React from 'react'
import Header from '../../header/header'
import Styles from './about.module.css'
import Footer from '../../footer/footer'

function About() {
  return (
    <div>
        <Header/>
        <div className={Styles.Img}>
             <h1>About Us</h1>
        </div>
        <div className={Styles.WhoWeAre}>
            <div className={Styles.WhoWeAre_Img}>

            </div>
            <div className={Styles.WhoWeAre_Content}>
              <h1>Who We Are</h1>
              <h2>We will give Strength<br/> And Health</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button> Join Us</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About