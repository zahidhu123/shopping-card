import React from 'react'

export default function CartList({ cart }) {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-5">
          {
            cart.map((cartItem, cartIndex) => {
              return (
                <div>
                  <img src={cartItem.url} width={40} alt="image" />
                  <span>{cartItem.name}</span>
                  <button>-</button>
                  <span>{cartItem.quantity}</span>
                  <button>+</button>
                  <span>{cartItem.price}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
