import React from 'react'
import Header from '../../header/header'
import Styles from './classes.module.css'
import Footer from '../../footer/footer'


function Classes() {

const Cards=[
  {
    Img:"https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class:"Power Lifting",
    Name:"Yarian Yate",
  },
  {
    Img:"https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class:"Power Lifting",
    Name:"Yarian Yate",
  },
  {
    Img:"https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class:"Power Lifting",
    Name:"Yarian Yate",
  },
  {
    Img:"https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class:"Power Lifting",
    Name:"Yarian Yate",
  },
  {
    Img:"https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class:"Power Lifting",
    Name:"Yarian Yate",
  },
  {
    Img:"https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class:"Power Lifting",
    Name:"Yarian Yate",
  }

]

  return (
    <div>
       <Header/>
       <div className={Styles.Img}>
            <h1>Classes We Schedule</h1>
       </div>

       <div className={Styles.Classes}>
          <h1>Class Timing & Programms</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
      
       <div className={Styles.Cards}>
             {
              Cards.map((data,Index)=>(
                <div className={Styles.Card} key={Index}>
                  <img src={data.Img}  height='100%' width='100%' className={Styles.Card_Img}  />
                   <div className={Styles.Content}>
                      <h2>{data.class}</h2>
                      <h3>{data.Name}</h3>
                      <button> Join Us</button>

                    </div>    
                </div>
              ))
             }
       </div>
       <Footer/>
    </div>
  )
}

export default Classes