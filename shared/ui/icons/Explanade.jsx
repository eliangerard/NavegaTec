import explanada from '../../assets/explanada.svg'

export const Explanade = ({className = "w-12 h-12", style = {}}) => {
  return (
    <img className={className} style={style} src={explanada} alt="" />
  )
}
