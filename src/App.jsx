import './App.css'
import Filter from './component/Filter'
import Photo from './component/Photo'
import Button from './component/Button'
import { useState } from 'react'
function App() {
  const [brightness,setBrightness] = useState(0);
  const [contrast,setContrast] = useState(0);
  const [Grayscale,setGrayscale] =useState(0);
  const [saturate,setSaturate] = useState(0);
  const [Rotate,setRotate] = useState(0);
  const [opacity,setopacity] = useState(0);
  function handleBrightness(e){
   setBrightness(e.target.value);
  }
  return (
    <>
     <div className='main_box'>
      <h1>Photo Editor</h1>
      <div className='box'>
        <div>
       <Filter 
         brightness={brightness}
         contrast={contrast} 
         Grayscale={Grayscale}
         saturate={saturate} 
         Rotate={Rotate} 
         opacity={opacity} 
         handleBrightness={handleBrightness}
         />
        </div>
        <div><Photo brightness={brightness}/></div>
      </div>
      <div className='button_box'>
        <Button name="reset"/>
        <Button name="Download"/>
      </div>
     </div>
    </>
  )
}

export default App
