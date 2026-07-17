

import React, { useEffect, useState } from 'react'
import CounterHeader from './CounterHeader'
import CounterText from "./CounterText"
import Line from './Line'
import CounterFooter from './CounterFooter'
import CounterMessage from './CounterMessage'
import CounterButtons from './CounterButtons'

const Counter = () => {

    const [number, setNumber] = useState(0)

    const positiveSate = number > 0 ? "true" : number == 0 ? "zero" : "false"

    const increase = () => {

        setNumber(prev => prev + 1)
    }

    const decrease = () => {

        setNumber(prev => prev - 1)
    }

    const reset = () => {
        setNumber(0)
    }

    return (
        <div className="counter-wrapper">
            <CounterHeader />
            <CounterText counterNumber={number} />
            <CounterButtons increase={increase} decrease={decrease} reset={reset} />
            <CounterMessage positiveSate={positiveSate} />
            <Line />
            <CounterFooter />
        </div>
    )
}

export default Counter