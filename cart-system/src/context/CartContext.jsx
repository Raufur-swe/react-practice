import { useState } from "react";
import { createContext } from "react";

// 1️⃣ Create a Context
const CartContext = createContext()

// provider component

export const CartProvider = ({ children }) => {

    //cart state 
    const [cart, setCart] = useState([]);

    // add to cart function

    const addCart = (product) => {
        setCart((prev) => {
            //check the product is alreacy exit or not
            const exit = prev.find((item) => item.id === product.id);

            // if exit
            if (exit) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity+ 1 } : item)
            }
            //if not
            return [...prev, { ...product, quantity: 1 }]
        })
    }


    // incress
    const incressCart = (id) => {
        setCart((prev) =>
            prev.map((item) => item.id === id ?
                { ...item, quantity: item.quantity + 1 } : item)
        )
    }

    //decress

    const decressCart = (id) => {
        setCart((prev) =>

            prev.map((item) => item.id === id ?
                { ...item, quantity: item.quantity - 1 } : item
            ) // if quantity is 0
                .filter((item) => item.quantity > 0)
        )
    }


    // total price

    const totalPrice = cart.reduce(
        (total , item) => total + item.price* item.quantity,0
    )



    return (
      <CartContext.Provider value ={{cart , addCart , incressCart , decressCart , totalPrice}} >
        {children}
      </CartContext.Provider>
    )


}
export default CartContext