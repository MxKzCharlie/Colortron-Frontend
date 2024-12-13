import '../../assets/css/productsPage/mainProducts.css'
import imgPresentacion from '../../assets/img/prodPresentV4.png'
import { motion } from 'framer-motion'
import { products } from '../../services/data'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function MainProducts() {
    const [flipped, setFlipped] = useState(false);

    return (  
        <div className="flex flex-col items-center w-full h-auto bg-mainBg">
            <motion.div className="container-present-main"
            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}>
                <img src={imgPresentacion} alt="presentacion" className="w-full h-auto" />
                <div className="container-present-titles-main">
                    <span className="title-present-main"> TU IMAGINACION HECHA REALIDAD </span>
                    <span className="subtitle-present-main">¡COMPRA AHORA!</span>
                </div>
            </motion.div>
            <h1 className="main-title">PRODUCTOS</h1>
            <hr className="w-5/6 h-2 bg-gray-950 rounded-full my-2"/>
            <div className="container-main-option-product">
                {
                    products.map(product =>(
                        <Link key={product.id} to={`/productos/${product.id}`}>
                        <motion.div
                        style={{perspective: "1500px"}}
                        onHoverStart={() => setFlipped(product.id)}
                        onHoverEnd={() => setFlipped(false)}
                        className="main-option-product">
                            <motion.div
                            style={{
                            backgroundColor: "#f0f0f0",
                            color: "#333",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            border: "2px solid gray",
                            borderRadius: "2rem",
                            padding: "1rem"
                            }}
                            animate={{ rotateY: flipped === product.id ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
                            className="main-option-product-child">
                                <motion.p className="main-option-product-text"
                                style={{
                                    rotateY: flipped === product.id ? 180 : 0,
                                }}>
                                    {
                                        flipped === product.id ? (
                                            <>
                                                <span className="font-subTitles text-primary text-4xl">{product.title}</span>
                                                <span className="text-xl">{product.description}</span>
                                            </>
                                        ) : (
                                            <>
                                                <img src={product.img} alt={product.title} />
                                                <span className="block lg:hidden">{product.title}</span>
                                            </>
                                    )}
                                </motion.p>
                            </motion.div>
                        </motion.div>
                        </Link>  
                    ))
                }
            </div>
        </div>
    );
}

export default MainProducts;