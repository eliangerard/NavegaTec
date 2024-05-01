import soccer from '../../assets/soccer.svg';

export const Soccer = ({ className = "w-12 h-12", style = {} }) => {
    return (
        <img className={className} style={style} src={soccer} alt='soccer'/>
    )
}
