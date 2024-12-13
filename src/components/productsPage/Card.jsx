import '../../assets/css/productsPage/card.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../services/globalContexts'
import { useContext, useState, useEffect } from 'react'

function Card({size, customize, selectedProduct, price}) {
    const {cart, setCart} = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [insideTheCart, setInsideTheCart] = useState(false); 
    let dataSize = {
        "price": price,
        "size": size,
        "count": count,
        "title": selectedProduct.title,
        "img": selectedProduct.img,
    };

    const handleAdding = () => {
        setCount(count + 1);
        
    }
    const handleSubtracting = () => {
        if(count <= 0){
            return null;
        }
        setCount(count - 1);
    }

    useEffect(() =>{
        if(count >= 1){
            setCart({
                ...cart,
                [`${selectedProduct.id}-${size}`]: dataSize
            });
        }
        setInsideTheCart(true);
    }, [count]);

    //Method to delete item when the count is equal to 0 
    //and the state insideTheCart is equal to true
    if(count === 0 && insideTheCart){
        const cartCopy = {...cart};
        delete cartCopy[`${selectedProduct.id}-${size}`];
        setCart(cartCopy);
        setInsideTheCart(false);
    }

    return (  
        <div className="container-card">
            <div className="container-img-card">
                <img src={selectedProduct.img} alt={size} className="img-card" />
            </div>
            <div className="info-card">
                <h2 className="size-card">{size}</h2>
                {
                    customize ? (
                        <div className="container-button-card">
                            <div></div>
                            <Link to='/productos/cotizar/' state={{infoProduct: selectedProduct}} 
                            className="btn btn-error text-lg">
                                Cotizar
                            </Link>
                        </div>
                    ):(
                        <div className="container-button-card">
                            <div className="text-xl font-general">
                                <span>${price} por pieza</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={handleAdding} className="button-card">+</button>
                                <input type="number" value={count} onChange={(e) => setCount(e.target.value)}
                                className="input-count spin-button" min={0}/>
                                <button onClick={handleSubtracting} className="button-card">-</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Card;