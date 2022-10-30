import React from 'react'

export default function CartList({ cart }) {
  return (
    <div>
      {
        cart.map((cartItem, cartIndex) => {
          return (
            <img src={cartItem.url} width={40} alt="image" />
          )

        })
      }
    </div>
  )
}
