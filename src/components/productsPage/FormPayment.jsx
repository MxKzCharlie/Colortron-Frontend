import '../../assets/css/productsPage/formPayment.css'
import { useState, useContext, useRef } from 'react'
import { CartContext } from '../../services/globalContexts'
import { sendEmailQuote } from '../../services/sendEmail'
import { span } from 'framer-motion/m';

function FormPayment() {
    const [loading, setLoading] = useState(() => (
        <button type="submit" className="button-formPayment">
            Enviar Cotización
        </button>
    ));
    const { cart, setCart } = useContext(CartContext);
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

        const form = new FormData(formPayment.current);
        let dataQuote = {
            name: form.get('name'),
            phone: form.get('phone'),
            email: form.get('email'),
            products: cart,
        }
        
        const result = await sendEmailQuote(dataQuote);
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
                    <input
                        type="text"
                        name="name"
                        className="inputs"
                        placeholder="Escribe tu nombre"
                        required
                    />
                </div>
                <div className="w-full h-auto">
                    <label className="labels">Teléfono</label>
                    <input
                        type="tel"
                        name="phone"
                        className="inputs"
                        placeholder="Escribe tu número de teléfono"
                        required
                    />
                </div>
                <div className="w-full h-auto">
                    <label className="labels">Correo</label>
                    <input
                        type="email"
                        name="email"
                        className="inputs"
                        placeholder="Escribe tu correo electrónico"
                        required
                    />
                </div>
                <div className="w-full h-auto flex justify-center items-center pt-4">
                    {loading}
                </div>
            </form>
        </div>
    );
}

export default FormPayment;