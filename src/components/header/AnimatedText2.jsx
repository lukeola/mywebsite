import React from 'react'
import Typewriter from 'typewriter-effect';

const AnimatedText2 = () => {
  return (
    <div>  <Typewriter
    onInit={(typewriter) => {
      
       
      typewriter.typeString("Luke Olawale")
        .callFunction(() => {
          console.log('String typed out!');
        })
        .start()
        
       

     
    }}
  /></div>
  )
}

export default AnimatedText2