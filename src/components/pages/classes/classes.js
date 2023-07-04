import React from 'react'
import Header from '../../header/header'
import './classes.css'
import Footer from '../../footer/footer'

function Classes() {
  const cards=[
    {
      img:"https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
      Name:"Power Lifting",
      description: "Andrew James"
    },
    {
      img:"https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
      Name:"Muscle Stretching",
      description: "Andrew James"
    },
    {
      img:"https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
      Name:"Yoga",
      description: "Andrew James"
    },{
      img:"https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
      Name:"Martial Arts",
      description: "Andrew James"
    },
    {
      img:"https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
      Name:"Gymnastic",
      description: "Andrew James"
    },
    {
      img:"https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
      Name:"Body Weight Excercises",
      description: "Andrew James"
    }
  ]
  return (
    <div>
        <Header/>
       <div className='classes-header'>
        <h1>Our Classes</h1>
       </div>
       <div className='classes-main'>
        <div className='top-content'>
        <h1>Class Timings And Programs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
           ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
           eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
           </div>
        <div className='classes-card'>
          {
            cards.map((data,index)=>(
          
              <div className='card'>
              <img src={data.img} alt='card'/>
              
              
              <div className='content'>
              <h2>{data.Name}</h2>
              <h4>{data.description}</h4>
              <button>Join Now</button>
              </div>
              </div>
            ))
          }
        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Classes