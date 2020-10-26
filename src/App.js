import React from 'react'
import './App.css'
// import { Typewriter } from 'react-typewriting-effect'
// import 'react-typewriting-effect/dist/index.css'
import Typewriter from 'typewriter-effect';


// import { AnimateOnChange } from 'react-animation'
 
const App = () => {
  return (
    
 
<Typewriter
  options={{
    strings: ['Hello World', 'wait',"OMG","u guys have been hacked <../..>","cheers!!"],
    autoStart: true,
    loop: true
    }}
/>
    
//     <div className="ll">
//     <Typewriter
//       string='Hello World'
//       delay={200}
//       cursor= "_"
//       stopBlinkinOnComplete={false}
//       />
// <AnimateOnChange
//   animationIn="custom-animation-in 500ms ease-out forwards"
//   animationOut="custom-animation-out 500ms ease-out forwards"
//   durationOut={500}
// >
// Perfect
// </AnimateOnChange>
//     </div>
    )
}
 
export default App