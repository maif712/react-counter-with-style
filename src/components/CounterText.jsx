

import React from 'react'

const CounterText = ({counterNumber}) => {
    return (
        <div className="counter-section-wrapper">
            <p className="counter-text">{counterNumber}</p>
            <span className="counter-subtitle">Click count</span>
        </div>
    )
}

export default CounterText