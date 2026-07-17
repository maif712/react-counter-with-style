

import React from 'react'
import Button from './UI/Button'
import Wrapper from './UI/Wrapper'

const CounterButtons = ({ increase, decrease, reset }) => {
    return (
        <Wrapper>
            <Button onclick={increase} className={"btn-increase-bg"} lable={"+ Increase"} />
            <Button onclick={decrease} className={"btn-decrease-bg"} lable={"- Decrease"} />
            <Button onclick={reset} className={"btn-reset-bg"} lable={"Reset"} />
        </Wrapper>
    )
}

export default CounterButtons