
import React from 'react'
import Typewriter from 'typewriter-effect';

const AnimatedText3 = () => {
  return (
    <div>  <Typewriter
    onInit={(typewriter) => {
      
       
      typewriter.typeString("A Full Stack Developer")
        .callFunction(() => {
          console.log('String typed out!');
        })
        .start()
    
       

     
    }}
  /></div>
  )
}

export default AnimatedText3