export const Building = ({ content, className = "w-12 h-12", style }) => {
    console.log(style);
    return (
        <div className="relative" style={style}>
            <svg style={{ scale: 0.25 }} className={className} viewBox="0 0 260 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="27.0703" y="5" width="207.075" height="191.477" rx="10" fill="#E3DFF2" stroke="black" strokeWidth="10" />
                <rect x="4.99414" y="5" width="250" height="44.6172" rx="10" fill="#F9886D" stroke="black" strokeWidth="10" />
            </svg>
            <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-35%] z-10 font-serif text-lg font-bold">{content}</p>
        </div>
    )
}

