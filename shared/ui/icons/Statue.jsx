import statue from "../../assets/statue.svg";

export const Statue = ({ className = "w-12 h-12", style = {} }) => {
  return (
    <img className={className} style={style} src={statue} alt="" />
  )
}
