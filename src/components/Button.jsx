export default function Button({ 
  paddingY="0px", 
  paddingX="0px", 
  textColor, 
  bgColor, 
  text="button no text" }) {
  return (
    <button className="main-button rounded-[10px] font-[Raleway] font-normal" style={{
      paddingLeft: paddingY,
      paddingRight: paddingY,
      paddingTop: paddingX,
      paddingBottom: paddingX,
      color: textColor,
      backgroundColor: bgColor
    }}>{text}</button>
  )
}