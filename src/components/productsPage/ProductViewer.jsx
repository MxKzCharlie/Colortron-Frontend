import '../../assets/css/productsPage/productsViewer.css'
import Card from "./Card"
import Cart from './Cart'
import { useLocation } from "react-router-dom"

function ProductViewer({products}) {
    const { pathname } = useLocation();
    const pathList = pathname.split("/");
    let selectedProduct = {};
    products.forEach(product => {
        if(product.id === pathList[2]){
            selectedProduct = product;
        }
    });

    return (  
        <div className="container-products-viewer">
            <div className="container-title">
                <h1 className="title">{selectedProduct.title}</h1>
                <Cart />
            </div>
            <hr className="w-5/6 h-2 bg-gray-950 rounded-full my-2"/>
            <div className="products">
                {selectedProduct.size.map(option => (
                        option[0] === "Diseña Tu Estilo" ? (
                            <Card key={option[0]} size={option[0]} price={option[1]}
                            customize={true} selectedProduct={selectedProduct}/>
                        ): (
                            <Card key={option[0]} size={option[0]} price={option[1]}
                            customize={false} selectedProduct={selectedProduct}/>
                        )
                    )
                )}            
            </div>
        </div>
    );
}

export default ProductViewer;