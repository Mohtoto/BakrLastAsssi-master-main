import React from 'react'
import pic from '../assets/5.png'
import logo from "../assets/2.png";


const OurPage = () => {
  return (
   <section id='our__Page'>
    <div className="container">

     <div className="Cont__View">
        <img className="logo logoView" src={logo} alt="" />
        <h1>OUR BEST SODA</h1>
      </div>
    </div>
   </section>
  )
}

export default OurPage