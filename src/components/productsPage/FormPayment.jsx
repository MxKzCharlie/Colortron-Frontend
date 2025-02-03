import '../../assets/css/productsPage/formPayment.css'
import { useState, useContext, useRef } from 'react'
import { CartContext, FilesContext } from '../../services/globalContexts'
import { sendEmailQuote } from '../../services/sendEmail'

function FormPayment() {
    const [loading, setLoading] = useState(() => (
        <button type="submit" className="button-formPayment">
            Enviar Cotización
        </button>
    ));
    const {cart, setCart} = useContext(CartContext);
    const {files, setFiles} = useContext(FilesContext);
    const formPayment = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(() => (
            <span className="loading loading-spinner text-accent"></span>
        ));
        if (cart.length === 0) {
            setLoading(() => (
                <button type="submit" className="button-formPayment">
                    Enviar Cotización
                </button>
            ));
            return alert('No hay productos en el carrito');
        }

        const formData = new FormData(formPayment.current);
        files.forEach(file => {
            formData.append('files', file); 
        });
        formData.append('products', JSON.stringify(cart));
        
        const result = await sendEmailQuote(formData);
        if (result.success) {
            setLoading(() => (
                <span className="successful-mailing">Enviado Correctamente</span>
            ));
        }else{
            setLoading(() => (
                <button type="submit" className="button-formPayment">
                    Enviar Cotización
                </button>
            ));
            alert('No se pudo enviar la cotización');
        }
    }
    
    return (
        <div className="container-formPayment">
            <form ref={formPayment}
                onSubmit={handleSubmit} 
                className="formPayment"
            >
                <div className="w-full h-auto">
                    <label className="labels">Nombre</label>
                    <input type="text" name="name" className="inputs" placeholder="Escribe tu nombre"
                    required />
                </div>
                <div className="w-full h-auto">
                    <label className="labels">Teléfono</label>
                    <input type="tel" name="phone" className="inputs" placeholder="Ejemplo: +00 000 000 0000"
                    required />
                </div>
                <div className="w-full h-auto">
                    <label className="labels">Correo</label>
                    <input type="email" name="email" className="inputs" placeholder="Ejemplo: ejemplo@ejemplo.com"
                    required />
                </div>
                <div className="w-full h-auto">
                    <label className="labels">Compañía</label>
                    <input type="text" name="compania" className="inputs" placeholder="Nombre de la compañía"
                    required />
                </div>
                <div className="w-full h-auto flex justify-center items-center pt-4">
                    {loading}
                </div>
            </form>
        </div>
    );
}

export default FormPayment;