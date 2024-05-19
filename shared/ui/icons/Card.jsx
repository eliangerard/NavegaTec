export const Card = ({ className }) => {
    return (
        <svg className={className} viewBox="0 0 107 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10.06836" y="10.00098" width="72" height="92" rx="16" stroke="black" strokeWidth="8" />
            <rect x="0.0683594" y="0.000976562" width="80" height="100" rx="20" fill="#F9886D" />
            <rect x="4.06836" y="4.00098" width="72" height="92" rx="16" stroke="black" strokeWidth="8" />
            <rect x="44.5684" y="62.002" width="58" height="57" rx="28.5" fill="#FFDB58" />
            <rect x="44.5684" y="62.002" width="58" height="57" rx="28.5" stroke="black" strokeWidth="8" />
            <path d="M86.3217 92.352H76.2217V102.702H70.9217V92.352H60.8217V87.552H70.9217V77.202H76.2217V87.552H86.3217V92.352Z" fill="black" />
            <defs>
                <filter id="filter0_d_263_478" x="0.0683594" y="0.000976562" width="88" height="108" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="8" dy="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_263_478" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_263_478" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}
