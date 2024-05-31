function Photo({brightness,contrast,Grayscale,Rotate,saturate,opacity,File,notSelect,img,disable}){
return(
    <>
    <div className="photos">
    <div className="images" disable={disable?disable:""}>
      <img src={File} alt="" 
      ref={img}
       style={{filter:`brightness(${brightness*.03})
        contrast(${contrast*.06}) 
        grayscale(${Grayscale*.01})
        saturate(${saturate*.06})
        opacity(${opacity*.2})
        hue-rotate(${Rotate*.9}deg) 
      `}}/>
        <div className="select">
        <h1>{notSelect?"please select a photo to edit":""}</h1>
        </div>  
      </div>
    </div>
    </>
 )
}
export default Photo;