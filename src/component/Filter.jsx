function Filter({
    handleBrightness,handleContrast,handleGrayScale,
    handleSaturate,hanndleOpacity,hanndleRotate
    ,brightness,contrast,Grayscale,
    saturate,Rotate,opacity,disable
}){
return(
    <>
    <div className="Filters">
        <div className="filter-label">
        <label htmlFor="brightness">brightness </label>
        <label htmlFor="contrast">contrast
        </label>
        <label htmlFor="Gray-scale">Gray-scale
        </label>
        <label htmlFor="opacity">opacity
        </label>
        <label htmlFor="saturate">saturate
        </label>
        <label htmlFor="Rotate">hue- Rotate
        </label>
        </div>
       <div className="main-filter">
       <input type="range" max={100} min={0}
       value={brightness} 
       disabled={disable?disable:""}
       onChange={handleBrightness}
       id="brightness"/>
        <input type="range" max={100} min={0}
         value={contrast} 
         disabled={disable?disable:""}
         onChange={handleContrast} 
        id="contrast"/>
        <input type="range" max={100} min={0}
         value={Grayscale} 
         disabled={disable?disable:""}
         onChange={handleGrayScale}
        id="Gray-scale"/>
        <input type="range" max={100} min={0} 
         value={opacity} 
         disabled={disable?disable:""}
         onChange={hanndleOpacity}
        id="opacity"/>
        <input type="range" max={100} min={0} 
         value={saturate} 
         disabled={disable?disable:""}
         onChange={handleSaturate}
        id="saturate"/>
        <input type="range" max={100} min={0} 
         value={Rotate} 
         disabled={disable?disable:""}
         onChange={hanndleRotate}
        id="Rotate"/>
       </div>
       <div className="number">
        <p>{brightness+"%"}</p>
        <p>{contrast+"%"}</p>
        <p>{Grayscale+"%"}</p>
        <p>{opacity+"%"}</p>
        <p>{saturate+"%"}</p>
        <p>{Rotate+"%"}</p>
       </div>
    </div>

    </>
)
}
export default Filter;