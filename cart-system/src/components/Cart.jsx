import React from 'react'
import { useCart } from '../hooks/useCart'

const Cart = () => {
    const {cart  , incressCart , decressCart , totalPrice} = useCart();
  return (
    <div>
        <h2>Cart</h2>
        {cart.map((item)=>(
            <div key={item} >
                <p>
                    {item.title} - ${item.price} X {item.quantity}
                </p>
                <button onClick={()=> incressCart(item.id)} >+</button>
                <button onClick={()=> decressCart(item.id)} >-</button>
            </div>
        ))}

        <h3>
            total : ${totalPrice}
        </h3>
    </div>
  )
}

export default Cart