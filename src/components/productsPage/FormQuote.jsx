import { input } from 'framer-motion/client';
import '../../assets/css/productsPage/formQuote.css'

function FormQuote({selectedProduct, activeTab}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado');
    }

    return (  
        <form onSubmit={handleSubmit} className="form-product-quote">
            <div className="container-inputs-quote">
                {
                    selectedProduct.options[activeTab].optionsQuote.map((option, key) => (
                        <label name={option.name} className="option-quote" key={key}>
                            <div className="option-quote-name">
                                <h3 className="name-quote">{option.name}</h3>
                            </div>
                            <div className="option-quote-input">
                                {
                                    option.inputType === 'text' ? (
                                        <input type='text' className='input-quote' required={option.required}/>
                                    ):(
                                        <select className='input-quote' required={option.required}>
                                            {
                                                option.optionsSelect.map((option, key) => (
                                                    <option value={option} key={key}>{option}</option>
                                                ))
                                            }
                                        </select>
                                    )
                                }
                            </div>
                        </label>
                    ))
                }
                <label name="quantity" className="option-quote">
                    <div className="option-quote-name">
                        <h3 className="name-quote">Cantidad</h3>
                    </div>
                    <div className="option-quote-input">
                        <input name="quantity" type="number" className="input-quote" min="0" required/>
                    </div>
                </label>
            </div>
            <div className="container-input-files">
                {
                    selectedProduct.options[activeTab].uploadFiles ? (
                        <input type="file" className="input-quote-file"/>
                    ):(
                        <div></div>
                    )
                }
            </div>
            <div className="container-textarea-quote">
                <label name="general-description" className="textarea-label">
                    <h3 className="name-quote">Descripción General del Producto Finalizado</h3>
                    <textarea name="general-description" className="textarea-quote" required
                    placeholder="Explique detalles del producto ya terminado"/>
                </label>
            </div>
            <div className="container-button-quote">
                <button className="submit-quote">Añadir al carrito</button>
            </div>
        </form>
    );
}

export default FormQuote;