import React from 'react'

export default function ProductList({ product , addToCard}) {
    return (
        <div className='flex'>
            {product.map((productItem, producrIndex) => {
                return (
                    <div style={{ width: '50%' }}>
                        <div className='product-item'>
                            <img src={productItem.url} width='100%' alt="" />
                            <p>{productItem.name} | {productItem.category}</p>
                            <p>{productItem.seller}</p>
                            <p>Rs. {productItem.price} /-</p>
                            <button
                            onClick={() => addToCard(productItem)}>Add to card</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
