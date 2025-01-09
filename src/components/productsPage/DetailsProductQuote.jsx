import '../../assets/css/productsPage/detailsProductQuote.css'
import { FaArrowLeft } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom'

function DetailsProductQuote() {
    const {state} = useLocation();
    console.log(state);

    return ( 
        <div className="background">
            <div className="container-details-product-quote">
                <Link to=".." className="return">
                    <FaArrowLeft className="icon-return"/>
                </Link>
                <h2 className="url-details-title">URL</h2>
                <p className="url-details-value">{state.url}</p>
            </div>
        </div>
    );
}

export default DetailsProductQuote;