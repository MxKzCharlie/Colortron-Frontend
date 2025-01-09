import { useState, createContext } from "react"

//Status and Context of the number of products in the cart
export const CartContext = createContext();
export const useCart = () => {
    const [cart, setCart] = useState([]);
    return {cart, setCart};
};