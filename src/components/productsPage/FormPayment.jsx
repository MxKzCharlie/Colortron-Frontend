import '../../assets/css/productsPage/formPayment.css'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../services/globalContexts'

function FormPayment({listCart}) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        info: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("Form submitted:", formData);   
        alert("Formulario enviado con éxito.");       
    };

    //Function to calculate the total for all products in the cart
    const { cart } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let sum = 0;
        if(listCart.length > 0){
            listCart.forEach(product => {
              sum += product[1].price * product[1].count;
            });
        }
        setTotal(sum);
    }, [cart]);

    return (
        <div className="container-formPayment">
            <form 
                onSubmit={handleSubmit} 
                className="formPayment"
            >
                <div className="w-full h-auto">
                    <label className="labels">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        className="inputs"
                        placeholder="Escribe tu correo electrónico"
                        required
                    />
                </div>
                <div className="w-full h-auto">
                    <label className="labels">Información General</label>
                    <textarea
                        name="info"
                        value={formData.info}
                        onChange={handleChange}
                        className="inputs"
                        rows="4"
                        placeholder="Escribe cualquier información adicional"
                    />
                </div>
                <div className="w-full h-auto flex justify-between items-center pt-4">
                    <span className="text-gray-700 font-medium text-2xl">
                        Total: <span className="font-bold">${total}</span>
                    </span>
                    {
                        loading ? (
                            <span className="loading loading-spinner text-accent"></span>
                        ):(
                            <button
                            type="submit" 
                            className="button-formPayment"
                            >
                                Pagar
                            </button>
                        )
                    }
                    
                </div>
            </form>
        </div>
    );
}

export default FormPayment;