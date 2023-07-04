import React from 'react'
import Styles from './home.module.css'

function Homesection() {
  return (
    <div className={Styles.Homesection}>
        <div className={Styles.content}>
          <h1>
            "Take care of your <span>Body</span>  .<br/>
            It's the only place you <br/>
             have to <span>live</span> ." 

          </h1>
        </div>

    </div>
  )
}

export default Homesection