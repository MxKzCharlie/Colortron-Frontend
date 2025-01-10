import { div } from 'framer-motion/client';
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
                <div className="container-details">
                    <h2 className="details-titles">URL</h2>
                    <p className="url-details-value">{state.url}</p>
                </div>
                <div className="container-details">
                    <h2 className="details-titles">Opciones</h2>
                    <div className="options-quote-details">
                        {
                            state.optionsQuote.map((option, key) => (
                                <div key={key} className="option-quote-details">
                                    <h3 className="option-quote-name-details">{option.name}</h3>
                                    <p className="option-quote-value-details">{option.value}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    state.files ? (
                        <div className="container-details">
                            <h2 className="details-titles">Archivos</h2>
                            <p className="files-details-value">{state.files.name}</p>
                        </div>
                    ):(
                        <div></div>
                    )
                }
                <div className="container-details">
                    <h2 className="details-titles">Descripcion General</h2>
                    <p className="general-description-details">{state.generalDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailsProductQuote;