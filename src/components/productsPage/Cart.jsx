import { CartContext } from '../../services/globalContexts'
import { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'

function Cart() {
    const { cart, setCart } = useContext(CartContext);
    let lengthCart = Object.keys(cart).length;

    return ( 
        <div className="shoppingCar">
            <Link to="/productos/pago/" className="indicator linkShoppingCar">
                <p className="text-gray-950 text-2xl">Ver Carrito</p>
                <FaShoppingCart className="w-auto h-12" />
                <span className="indicator-item badge badge-accent">{lengthCart}</span>
            </Link>
        </div>
    );
}

export default Cart;