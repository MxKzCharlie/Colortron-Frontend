import '../../assets/css/productsPage/paymentSection.css'
import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { CartContext } from '../../services/globalContexts'
import { RxCross1 } from "react-icons/rx"
import FormPayment from './FormPayment'

function PaymentSection() {
    const {cart, setCart} = useContext(CartContext);

    const handleDelete = (index) => {
        let newCart = cart.filter((product, key) => key !== index);
        setCart(newCart);
    }

    const sectionProductsQuote =  cart.length === 0 ? (
        <div className="cart-empty">
            <h2 className="title-cart-empty">Añade cosas al carrito...</h2>
        </div>
    ) : (
        <div className="section-products-quote">
            <h1 className="title-products-quote">Lista de Productos</h1>
            <div className="container-products-quote">
                {
                    cart.map((product, key) => (
                        <div key={key} className="card-product-quote">
                            <RxCross1 onClick={() => handleDelete(key)} className="icon-delete-product-quote" />
                            <div className="section-img-product-quote">
                                <img src={product.img} alt="#" className="image-product-quote" />
                            </div>
                            <div className="container-info-product-quote">
                                <h2 className="title-info-product-quote">{product.product} de tipo {product.type}</h2>
                                <p className="quantity-info-product-quote">Cantidad = {product.quantity}</p>
                                <Link to="detalles/" state={product} className="details-info-product-quote">
                                    Ver Detalles
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

    return (  
        <div className="container-paymentSection">
            {sectionProductsQuote}
            <FormPayment />
            <Outlet />
        </div>
    );
}

export default PaymentSection;