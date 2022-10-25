import React from 'react'

export default function ProductList({ product }) {
    return (
        <div className='flex'>
            {product.map((productItem, producrIndex) => {
                return (
                    <div>{productItem.name}</div>
                )
            })}
        </div>
    )
}
