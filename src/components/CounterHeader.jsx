


const CounterHeader = () => {
    return (
        <div className="top-wrapper">
            <div className="flex justify-center item-center gap">
                <h1 className="counter-title">Hello React!</h1>
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
                        <rect width="400" height="400" fill="#F8F9FA" rx="20" />

                        <path d="M 200 200 Q 120 150 50 180" fill="none" stroke="#EF476F" strokeWidth="8"
                            strokeLinecap="round" />
                        <path d="M 200 200 Q 150 100 80 50" fill="none" stroke="#06D6A0" strokeWidth="8"
                            strokeLinecap="round" />
                        <path d="M 200 200 Q 100 120 40 100" fill="none" stroke="#118AB2" strokeWidth="8"
                            strokeLinecap="round" />
                        <path d="M 200 200 Q 180 80 120 40" fill="none" stroke="#FFD166" strokeWidth="8"
                            strokeLinecap="round" />

                        <circle cx="120" cy="120" r="10" fill="#EF476F" />
                        <circle cx="80" cy="160" r="8" fill="#06D6A0" />
                        <circle cx="160" cy="80" r="12" fill="#118AB2" />
                        <circle cx="60" cy="100" r="9" fill="#FFD166" />
                        <circle cx="100" cy="60" r="11" fill="#EF476F" />
                        <circle cx="40" cy="140" r="7" fill="#118AB2" />
                        <circle cx="140" cy="40" r="8" fill="#06D6A0" />

                        <rect x="90" y="90" width="15" height="15" fill="#06D6A0" transform="rotate(20 97 97)" />
                        <rect x="150" y="50" width="12" height="12" fill="#EF476F" transform="rotate(45 156 56)" />
                        <rect x="50" y="180" width="14" height="14" fill="#FFD166" transform="rotate(15 57 187)" />

                        <polygon
                            points="140,140 145,155 160,155 148,165 152,180 140,170 128,180 132,165 120,155 135,155"
                            fill="#FFD166" />
                        <polygon points="70,130 75,145 90,145 78,155 82,170 70,160 58,170 62,155 50,145 65,145"
                            fill="#118AB2" />

                        <defs>
                            <clipPath id="coneClip">
                                <polygon points="350,350 180,220 220,180" />
                            </clipPath>
                        </defs>

                        <g clipPath="url(#coneClip)">
                            <rect x="150" y="150" width="250" height="250" fill="#FFD166" />
                            <polygon points="150,240 400,240 400,270 150,270" fill="#EF476F" />
                            <polygon points="150,300 400,300 400,330 150,330" fill="#06D6A0" />
                        </g>

                        <polygon points="350,350 180,220 220,180" fill="none" stroke="#073B4C" strokeWidth="4"
                            strokeLinejoin="round" />

                        <ellipse cx="200" cy="200" rx="28" ry="12" transform="rotate(-45 200 200)" fill="#D4A373"
                            stroke="#073B4C" strokeWidth="4" />

                        <ellipse cx="200" cy="200" rx="20" ry="6" transform="rotate(-45 200 200)" fill="#073B4C"
                            opacity="0.3" />
                    </svg>
                </div>
            </div>
            <p className="counter-info">Let't learn styles and conditional rendering</p>
        </div>
    )
}

export default CounterHeader