import React from 'react'
import { useCart } from '../hooks/useCart'

const ProductCard = ({product}) => {
    const {addCart} = useCart()
  return (
    <div style={cardStyle}>
        <img src={product.img}  alt={product.title} width={100} />
        <h3>{product.title}</h3>
        <p> ${product.price} </p>
        <button onClick={()=> addCart(product)}>
            add to cart
        </button>
    </div>
  )
}

const cardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "10px",
  textAlign: "center"
};

export default ProductCard