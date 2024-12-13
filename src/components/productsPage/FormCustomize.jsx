import '../../assets/css/productsPage/formCustomize.css'
import { useState, useEffect } from 'react'
import { sendEmailQuote } from '../../services/sendEmail'

function FormCustomize({files}) {
    const [processSubmit, setProcessSubmit] = useState(() => (
        <button type='submit' className="btn btn-accent">
            Enviar
        </button> 
    ));
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        phone: "",
        quantity: "",
        size: "",
        info: "",
        files: [],
        url: "Nulo",
    });

    useEffect(() => {
        setFormData((prev) => ({ ...prev, files }));
    }, [files]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setProcessSubmit(()=> (
            <span className="loading loading-spinner text-accent"></span>
        ));

        const result = await sendEmailQuote(formData, setProcessSubmit);
        if(result.success){
            setProcessSubmit(() => (
                <span className="font-general text-green-500">Correo enviado exitosamente</span>
            ));
        }else{
            setProcessSubmit(() => (
                <span className="font-general text-red-500">Error al intentar enviar el correo</span>
            ));
            console.log('retorno un error', result);
        } 
    }

    return (  
        <form onSubmit={handleSubmit} className="form-section">
            <label className="labels-form">
                Email:
                <input onChange={handleChange} name="email" type="email" className="input-email-url" 
                placeholder="Escribe tu correo electrónico" required/>
            </label>
            <label className="labels-form">
                Nombre:
                <input onChange={handleChange} name="name" type="text" className="input-name" 
                placeholder="Escribe tu nombre" required/>
            </label>
            <label className="labels-form">
                    Whatsapp:
                    <input onChange={handleChange} name="phone" type="tel" className="input-whatsapp" 
                    placeholder="Escribe tu número de teléfono" required/>
                </label>
            <div className="form-details">
                <label className="labels-details spin-button">
                    # de pzas.:
                    <input onChange={handleChange} name="quantity" type="number" min={0} className="inputs-details" 
                    placeholder="0" required/>
                </label>
                <label className="labels-details">
                    Tamaño:
                    <input onChange={handleChange} name="size" type="text" className="inputs-details"
                    placeholder="3' x 2'" required/>
                </label>
            </div>
            <label className="labels-form">
                URL de el archivo(s) (opcional):
                <input onChange={handleChange} type="text"  name="url" className="input-email-url" 
                placeholder="Escribe la URL"/>
            </label>
            <label className="labels-form">
                Descripcion general del Producto:
                <textarea onChange={handleChange} name="info" className="form-textarea" required
                placeholder="Escribe información que nos ayude entender mejor tu proyecto."/>
            </label>
            {processSubmit}
        </form>
    );
}

export default FormCustomize;