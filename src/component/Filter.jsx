function Filter({
    handleBrightness,brightness,contrast,Grayscale,
    saturate,Rotate,opacity,
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
        <label htmlFor="Rotate">Rotate
        </label>
        </div>
       <div className="main-filter">
       <input type="range" max={100} min={0}
       value={brightness} 
       onChange={handleBrightness}
       id="brightness"/>
        <input type="range" max={100} min={0}
         value={contrast} 
         onChange={(e)=>setContrast(e.target.value)} 
        id="contrast"/>
        <input type="range" max={100} min={0}
         value={Grayscale} 
         onChange={(e)=>setGrayscale(e.target.value)}
        id="Gray-scale"/>
        <input type="range" max={100} min={0} 
         value={opacity} 
         onChange={(e)=>setopacity(e.target.value)}
        id="opacity"/>
        <input type="range" max={100} min={0} 
         value={saturate} 
         onChange={(e)=>setSaturate(e.target.value)}
        id="saturate"/>
        <input type="range" max={100} min={0} 
         value={Rotate} 
         onChange={(e)=>setRotate(e.target.value)}
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