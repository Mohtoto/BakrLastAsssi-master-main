import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Typewriter } from 'react-simple-typewriter'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { SlProgressBar } from '@shoelace-style/shoelace/dist/react';






const HomePage = () => {


  const  [ text , count] = useTypewriter({

    words : [ 
      "TASTE JORDAN",
      
    ],
    loop : true,
    delaySpeed : 2000,

  })


  const  [ textNum2 , countNum2] = useTypewriter({

    words : [ 
      "SODA IN FLAVOUR",
    ],
    loop : true,
    delaySpeed : 2000,

  })


   
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      }
  

  return (

    <section className="main__section ">
  
       
  <Carousel infinite={true} responsive={responsive}>
      <div>
        <img className='pic' src="src/assets/mainPic.png" alt="" />
        <div className='wrapper__black'></div>
        <div className="div">

        <div className='mainCont'>
        <h2 className='title'>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h2>
        <h2 className='title'>
        <span>{textNum2}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h2>
        {/* <h2 className='title2'>SODA IN FLAVOUR</h2> */}
        </div>

        <button className='button'>SHOP</button>
        </div>
        
        
        
      </div>
      <div>
        <img className='pic' src="src/assets/mainPic2.png" alt="" />
        <div className='wrapper__black'></div>
        <div className='mainCont'>
        <h2 className='title__Collec'>A COLLECTION TO KEEP</h2>
        <button className='button__Collec'>DISCOVER</button>
        </div>
      </div>
      <div><img className='pic' src="src/assets/mainPic3.png" alt="" /></div>
      <div><img className='pic' src="src/assets/mainPic.png" alt="" /></div>
      {/* <div><img className='pic' src="src/assets/1.png" alt="" /></div>
      <div><img className='pic' src="src/assets/5.png" alt="" /></div>
      <div><img  className='pic' src="src/assets/4.png" alt="" /></div> */}
      
    </Carousel>
    <SlProgressBar indeterminate />
        
    </section>
  )
}

export default HomePage