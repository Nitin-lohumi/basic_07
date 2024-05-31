function Button({name,Reset,exportAsImage,disable}){  
return(
    <>
    <div className="button">
        <button onClick={name=="reset"? Reset:exportAsImage}
        disabled={(name=="reset"&&disable) || (name=="Download"&&disable)?disable:""}
        >{name}</button>
    </div>
    </>
)
}
export default Button;