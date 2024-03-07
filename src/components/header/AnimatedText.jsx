import React from 'react';
import Typewriter from 'typewriter-effect';

const AnimatedText = () => {
  return (
    <div>
      {' '}
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello I'm")
            .callFunction(() => {
              // console.log('String typed out!');
            })

            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
    </div>
  );
};

export default AnimatedText;
