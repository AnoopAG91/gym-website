import React from 'react'
import Styles from './footer.module.css'


function Footer() {
  return (
    <div className={Styles.Footer}>
        <div className={Styles.Main}>
           <div className={Styles.Content}>
               <button className={Styles.Logo}>GYM</button>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
               <div className={Styles.Icons}>
                <h4>Insta</h4>
                <h4>Twitter</h4>
                <h4>FaceBook</h4>
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