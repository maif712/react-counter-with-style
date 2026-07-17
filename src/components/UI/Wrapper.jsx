import React from 'react'

const Wrapper = ({children}) => {
    return (
        <div className="flex justify-center item-center gap">
            {children}
        </div>
    )
}

export default Wrapper