import domo from "../../assets/domo.svg";

export const Dome = ({className = "w-12 h-12", style = {}}) => {
  return (
    <img className={className} style={style} src={domo} alt="" />
  )
}
