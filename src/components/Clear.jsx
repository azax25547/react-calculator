import React from 'react'
import './clear.css'

export const Clear = (props) => {
    return (
        <div className="clear" onClick={props.handleClear}>
            {props.children}
        </div>
    )
}
