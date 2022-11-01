import React from 'react'

export default function Header(props) {
    return (
        <div className='flex shopping-header'>
            <p onClick={() => props.handleShow(false)}>Shopping Cart App</p>
            <div onClick={() => props.handleShow(true)}>Cart
                <sup>{props.count}</sup>
            </div>
        </div>
    )
}
