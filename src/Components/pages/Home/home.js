import React from 'react'
import Header from '../../header/header'
import Styles from './home.module.css'
import Homesection from './sections/home/homesection'
import AboutSection from './sections/AboutSection/AboutSection'
import WhyUs from './sections/WhyUs/WhyUs'
// import Trainer from './sections/TrainerSection/Trainer'
import Footer from '../../footer/footer'
function Home() {
  return (
    <div className={Styles.Rapper}>
      <Header/>
      
      <div className={Styles.HomeSection}>
        <Homesection/>
      </div> 
      <div className={Styles.AboutSection}>
        <AboutSection/>
      </div>
      <div className={Styles.WhyUs}>
        <WhyUs/>
      </div>
      {/* <div className={Styles.Trainers}>
        <Trainer/>
      </div> */}

      <div className={Styles.Footer} >
        <Footer/>
      </div>

    </div>
  )
}

export default Home