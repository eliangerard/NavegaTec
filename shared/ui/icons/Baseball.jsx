import baseball from '../../assets/baseball.svg';

export const Baseball = ({className = "w-12 h-12", style = {} }) => {
    return (
        <img className={className} style={style} src={baseball} alt="" />
    )
}
