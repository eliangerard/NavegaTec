import coffee from "../../assets/coffee.svg";

export const Coffee = ({className = "w-12 h-12", style = {}}) => {
  return (
    <img className={className} style={style} src={coffee} alt="" />
  )
}
