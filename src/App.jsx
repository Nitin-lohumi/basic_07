import './App.css'
import Filter from './component/Filter'
import Photo from './component/Photo'
import Button from './component/Button'
import { useRef, useState } from 'react'
function App() {
  const [brightness,setBrightness] = useState(30);
  const [contrast,setContrast] = useState(20);
  const [Grayscale,setGrayscale] =useState(20);
  const [saturate,setSaturate] = useState(20);
  const [Rotate,setRotate] = useState(20);
  const [opacity,setopacity] = useState(20);
  const [File,setFile] = useState('');
  const [notSelect,setnotSelect] = useState(true);
  const [disable,setDisable]=  useState("on");
  const ref = useRef('');
  const img = useRef('');
  const check = useRef('');
  function chooseFile(e){
    if (e.target.files[0].type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setFile(imageUrl); 
      setnotSelect(false); 
      setDisable("of");
      check.current.style.display= "block";
    } else {
      alert('Please select an image file.');
      setnotSelect(true);
      setDisable(true);
    }
  }
  function handleBrightness(e){
    setBrightness(e.target.value);
   if(brightness==20){
    setBrightness(0);
   }
  }
  function handleContrast(e){
    setContrast(e.target.value);
  }
  function handleGrayScale(e){
    setGrayscale(e.target.value);
  }
  function handleSaturate(e){
    setSaturate(e.target.value);
  }
  function hanndleOpacity(e){
    setopacity(e.target.value);
  }
  function hanndleRotate(e){
    setRotate(e.target.value)
  }
function Reset(){
  setBrightness(30);
  setContrast(20);
  setGrayscale(20);
  setRotate(20);
  setSaturate(20);
  setopacity(20);
} 
const exportAsImage =() => {
  if(File==""){
   alert("please import a photo ");
  }
  else{
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width=img.current.naturalWidth;
  canvas.height= img.current.naturalHeight;
  ctx.filter = 
  `brightness(${brightness*.03})
  contrast(${contrast*.06}) 
   grayscale(${Grayscale*.01})
  saturate(${saturate*.06})
  opacity(${opacity*.2})
  hue-rotate(${Rotate*.9}deg)` ;
  ctx.drawImage(img.current,0,0, canvas.width,canvas.height);
canvas.style.position = "absolute";
canvas.style.left = "50%";
canvas.style.top = "50%";
canvas.style.zIndex = "10";
canvas.style.width="40%";
// document.body.appendChild(canvas);
const image = canvas.toDataURL("image/png", 1.0);
  downloadImage(image, 'image.png');
  }
}
const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement("a");
 fakeLink.style.display = "none";
 fakeLink.download = fileName;
 fakeLink.href = blob;
 document.body.appendChild(fakeLink);
 fakeLink.click();
 document.body.removeChild(fakeLink);
};
   return(
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
         handleContrast={handleContrast}
         handleGrayScale={handleGrayScale}
         handleSaturate={handleSaturate}
         hanndleOpacity={hanndleOpacity}
         hanndleRotate={hanndleRotate}
         disable={disable}
         />
        </div>
        <div><Photo brightness={brightness}  
                    contrast={contrast}
                    Grayscale={Grayscale}
                    saturate={saturate} 
                    Rotate={Rotate} 
                    opacity={opacity} 
                    File={File}
                    notSelect={notSelect}
                    img={img}
                    disable={disable}
                     />
        </div>
      </div>
      <div className='button_box'>
        <Button name="reset" Reset={Reset} disable={disable} check={check}/>
        <input type="file" ref={ref} onChange={chooseFile} accept='image/*'  hidden/>
        <button style={{display:"block"}} onClick={()=>ref.current.click()}>choose</button>
        <Button name="Download" exportAsImage={exportAsImage} 
        disable={disable} 
        check={check}/>
      </div>
      
     </div>
    </>
  )
}
export default App
