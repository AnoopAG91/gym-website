import React from 'react'
import Styles from './footer.module.css'
import { Link, NavLink } from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <div className={Styles.Footer}>
        <div className={Styles.Main}>
           <div className={Styles.Content}>
               <button className={Styles.Logo}>GYM</button>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
               <div className={Styles.Icons}>
               <NavLink to="https://www.instagram.com/abhay.khemnar/?next=%2F" className={Styles.Socail_media}>    <BsInstagram/> </NavLink>
               <NavLink to="https://www.linkedin.com/in/abhay-khemnar-ab73b7259/" className={Styles.Socail_media}>  <BsLinkedin/>  </NavLink>
               <NavLink to="https://www.facebook.com/abhay.khemnar" className={Styles.Socail_media}>                <BsFacebook/>  </NavLink> 
               </div>
           </div>
           <div className={Styles.Lists}>
             <div className={Styles.List1}>
                <h2>Helthing Living</h2>
                <h4>Helthing Living</h4>
                <h4>Helthing Living</h4>
                <h4>Helthing Living</h4>
                <h4>Helthing Living</h4>



             </div>
             <div className={Styles.List2}>
                <h2>Helthing Living</h2>
                <h4>Helthing Living</h4>
                <h4>Helthing Living</h4>
                <h4>Helthing Living</h4>
                <h4>Helthing Living</h4>
             </div>
             <div className={Styles.List3}>
                <h2>Helthing Living</h2>
                <h4>Helthing Living</h4>
                <h4>Helthing Living</h4>
                <h4>Helthing Living</h4>
                <h4>Helthing Living</h4>
             </div>
           </div>  
        </div>
        <div className={Styles.CopyRight}>
              <h2>@copy right 2023</h2>
        </div>

    </div>
  )
}

export default Footer