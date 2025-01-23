import { useState, createContext } from "react"

//Status and Context of the number of products in the cart
export const CartContext = createContext();
export const useCart = () => {
    const [cart, setCart] = useState([]);
    return {cart, setCart};
};

//Status ans Context of the number of files for each one product
export const FilesContext = createContext();
export const useFiles = () => {
    const [files, setFiles] = useState([]);
    return {files, setFiles};
};