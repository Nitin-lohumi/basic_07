function Button({name,Reset,exportAsImage,disable,check}){  
return(
    <>
    <div className="button">
        <button ref={check} onClick={name=="reset"? Reset:exportAsImage}
        disabled={(name=="reset"&&disable) || (name=="Download"&&disable)?disable:""}
        >{name}</button>
    </div>
    </>
)
}
export default Button;