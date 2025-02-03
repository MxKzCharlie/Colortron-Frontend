import '../../assets/css/productsPage/formQuote.css'
import { useRef, useContext, useState } from 'react'
import { CartContext, FilesContext } from '../../services/globalContexts'

function FormQuote({selectedProduct, activeTab}) {
    const formQuote = useRef();
    const {cart, setCart} = useContext(CartContext);
    const {files, setFiles} = useContext(FilesContext);
    const [processCompleted, setProcessCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(formQuote.current);

        let originalsOptionsQuote = selectedProduct.options[activeTab].optionsQuote.map(option => ({
            name: option.name,
            value: form.get(option.name)
        }));

        let productQuote = {
            product: selectedProduct.title,
            type: selectedProduct.options[activeTab].name,
            img: selectedProduct.options[activeTab].img,
            quantity: form.get('quantity'),
            generalDescription: form.get('general-description'),
            url: form.get('url'),
            optionsQuote: originalsOptionsQuote,
        }

        setCart([...cart, productQuote]);
        setFiles([...files, form.get('files')]);
        setProcessCompleted(true);
    }

    return (  
        <form ref={formQuote} onSubmit={handleSubmit} className="form-product-quote">
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
                                        <input name={option.name} type='text' className='input-quote' required={option.required}/>
                                    ):(
                                        <select name={option.name} className='input-quote' required={option.required}>
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
            {
                selectedProduct.options[activeTab].uploadFiles ? (
                    <div className="container-input-files">
                        <input accept=".png, .jpg, .jpeg" name="files" type="file" 
                        className="input-quote-file"/>
                    </div>
                ):(
                    <div></div>
                )
            }
            <div className="container-url-quote">
                <label name="url" className="url-label">
                    <h3 className="name-quote-url">URL de los archivos (opcional)</h3>
                    <input name="url" type="url" className="input-quote-url"
                    placeholder="Ejemplo: https://www.ejemplo.com"/>
                </label>
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
            {
                processCompleted ? (
                    <span className="text-green-500 font-general">
                        Añadido Correctamente
                    </span>
                ):(
                    <span></span>
                )
            }
        </form>
    );
}

export default FormQuote;