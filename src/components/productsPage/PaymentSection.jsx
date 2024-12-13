import '../../assets/css/productsPage/paymentSection.css'
import { useContext } from 'react'
import { CartContext } from '../../services/globalContexts'
import { RxCross1 } from "react-icons/rx"
import FormPayment from './FormPayment'

function PaymentSection() {
    const {cart, setCart} = useContext(CartContext);
    let cartCopy = {...cart}; 
    let listCart = Object.entries(cart);

    const handleDelete = (productToDelete) => {
        delete cartCopy[productToDelete];
        setCart(cartCopy);
    };

    const productsVisible = listCart.length === 0 ? (
        <div className="none-visible-products">
            <h2 className="title-none-visible-products">Añade cosas al carrito...</h2>
        </div>
    ):(
        <div className="list-products-cart">
            {
                listCart.map((product, key) => (
                    <div key={key} className="container-product-cart">
                        <RxCross1 onClick={() => handleDelete(product[0])} className="button-delete"/>
                        <div className="img-section-cart">
                            <img src={product[1].img} alt="test" className="w-2/3 h-auto"/>
                        </div>
                        <div className="info-section-cart">
                            <div className="w-full h-auto flex justify-center">
                                <h2 className="text-4xl font-titles font-semibold">{product[1].title}</h2>
                            </div>
                            <div className="details-info-cart">
                                <p className="w-full h-auto">Tamaño ............. {product[1].size}</p>
                                <p className="w-full h-auto">$ por unidad ............. ${product[1].price}</p>
                                <p className="w-full h-auto">Cantidad ......... {product[1].count}</p>
                                <p className="w-full h-auto">
                                    Total ........................ 
                                    <span className="font-bold"> ${`${product[1].price * product[1].count}`}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );

    return (  
        <div className="container-paymentSection">
            {productsVisible}
            <FormPayment listCart={listCart}/>
        </div>
    );
}

export default PaymentSection;