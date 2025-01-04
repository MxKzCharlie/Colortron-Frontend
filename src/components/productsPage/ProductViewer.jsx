import { div } from 'framer-motion/client'
import '../../assets/css/productsPage/productsViewer.css'
import Cart from './Cart'
import FormQuote from './FormQuote'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function ProductViewer({products}) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const {pathname} = useLocation();
    const titleProduct = pathname.split('/')[2];
    const selectedProduct = products.find(product => product.id === titleProduct);

    return (  
        <div className="container-products-viewer">
            <div className="bar-option-products">
                {
                    selectedProduct.options.length === 1 ? (
                        <div className="container-one-option">
                            <hr className="backfill" />
                            <div className="one-option">
                                {selectedProduct.options[0].name}
                            </div>
                            <hr className="backfill" />
                        </div>
                    ):(
                        selectedProduct.options.map((option, key) => (
                        <div className={`option-bar ${activeTab === key ? 'active-option' : ''}`} 
                        onClick={() => handleTabClick(key)} key={key}>
                            {option.name}
                        </div>
                        )
                    ))
                }
            </div>
            <div className="info-product-form">
                <div className="container-title-product">
                    <h1 className="title-product">
                        {selectedProduct.title} de tipo {selectedProduct.options[activeTab].name}
                    </h1>
                </div>
                <div className="container-img-description">
                    <div className="container-img-product">
                        <img src={selectedProduct.options[activeTab].img} alt="product" className="img-product"/>
                    </div>
                    <p className="description-product">{selectedProduct.options[activeTab].descriptionOption}</p>
                </div>
                <div className="form-product">
                    <div className="container-cart-title">
                        <h2 className="title-quote">Solicitar Cotización</h2> 
                        <Cart />
                    </div>
                    <FormQuote selectedProduct={selectedProduct} activeTab={activeTab}/>
                </div>
            </div>
        </div>
    );
}

export default ProductViewer; 