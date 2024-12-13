import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ScrollToTop from "../utils/ScrollToTop"
import { Outlet } from "react-router-dom"
import { CartContext, useCart } from '../services/globalContexts' 

function ProductsPage() {
    const { cart, setCart } = useCart();
    
    return (
        <CartContext.Provider value={{cart, setCart}}> 
            <div className="sizeScreen h-screen grid grid-rows-customProd bg-mainBg">
                <Nav />
                <Outlet />
                <Footer />
            </div>
            <ScrollToTop />
        </CartContext.Provider> 
    );
}

export default ProductsPage;