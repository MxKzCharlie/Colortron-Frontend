import '../../assets/css/productsPage/products.css'
import { products } from "../../services/data"
import { Link, useNavigate } from "react-router-dom"
import ProductViewer from './ProductViewer'

function Products() {
    const navigate = useNavigate();
    const handleNavigate = (event) => {
        const selectedPath = event.target.value;
        navigate(`/productos${selectedPath}`);
    };

    return (
        <div className="container-products">
            <menu className="container-menu">
                <div className="menu-custom">
                    {
                        products.map((product, key) => (
                            <Link to={`/productos/${product.id}`} 
                            className="option-menu group" key={key}>
                                <div className="text-menu group-hover:translate-x-6">
                                    {product.title}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </menu>
            {/*Mobile Menu*/}
            <menu className="container-menu-select">
                <select className="menu-select" onChange={handleNavigate}>
                    <option defaultValue='null' className="option-menu-select" disabled selected>
                        Elige un producto
                    </option>
                    {
                        products.map((product, key) => (
                            <option className="option-menu-select" key={product.id} value={`/${product.id}`}>
                                {product.title}
                            </option>
                        ))
                    }
                </select>
            </menu>
            <ProductViewer products={products}/>
        </div>
    );
}

export default Products;