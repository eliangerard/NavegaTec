import edit from "../../assets/edit.svg";

export const Edit = ({className = "w-12 h-12", style = {}}) => {
  return (
    <img className={className} style={style} src={edit} alt="" />
  )
}
