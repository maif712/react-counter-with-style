import React from 'react'

const Button = ({onclick, className, lable}) => {
    return (
        <button onClick={onclick} className={`btn ${className}`}>{lable}</button>
    )
}

export default Button