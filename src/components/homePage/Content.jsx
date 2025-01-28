import '../../assets/css/homePage/content.css'
import { products } from '../../services/data'
import { motion } from 'framer-motion'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import video from '../../assets/video/video-Colortron.webm'

function Content() {
    const [leftValue, setLeftValue] = useState(0);
    const [xOffset, setXOffset] = useState(-1);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragEndX, setDragEndX] = useState(0);

    const handleMoveLeft = () => {
        if(xOffset <= (leftValue + 300)){
            setXOffset(leftValue);
            return null;
        }
        setXOffset(xOffset - 300);
    };

    const handleMoveRight = () => {
        if(xOffset >= -300){
            setXOffset(-1);
            return null;
        }
        setXOffset(xOffset + 300);
    };

    useEffect(() => {
        if(xOffset >= leftValue && xOffset < 0){
            setXOffset(xOffset + (dragEndX - dragStartX));
        }
    }, [dragEndX]);

    useEffect(() => {
        const updatePosition = () => {
            if(window.innerWidth <= 820){
                setLeftValue(-2250);
            }else if(window.innerWidth <= 1024){
                setLeftValue(-2150);
            }else{
                setLeftValue(-1800);
            }
        };

        updatePosition(); 
        window.addEventListener("resize", updatePosition);
        return () => window.removeEventListener("resize", updatePosition);
    }, []);

    return (  
        <main className="container-content">
            <div className="content-products group">
                <button onClick={handleMoveLeft} className="button-to-right group-hover:block">
                    <IoIosArrowForward className="button-icon" />
                </button>
                <button onClick={handleMoveRight} className="button-to-left group-hover:block">
                    <IoIosArrowBack className="button-icon" />
                </button>
                <motion.div
                drag="x"
                dragConstraints={{left: leftValue, right: 0}}
                onDragStart={(event, info) => setDragStartX(info.point.x)}
                onDragEnd={(event, info) => setDragEndX(info.point.x)}
                animate={{x: xOffset}}
                className="container-content-products">
                    {products.map(product => (
                        <div key={product.id}  className="option-product-content">
                            <Link to={`/productos/${product.id}`}>
                                <img src={product.mainImg} alt={product.id} className="img-option-product" />
                                <h2 className="font-subTitles text-xl">{product.title}</h2>
                            </Link>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="container-info-content">
                <motion.div 
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{duration: 1.3}}
                className="info-text">
                    <h2 className="title-info">Acerca de Nosotros</h2>
                    <hr className="w-5/6 h-2 bg-gray-950 rounded-full"/>
                    <p className="info">
                        En nuestra imprenta, nos especializamos en transformar tus ideas en productos de alta 
                        calidad que realmente destacan. Desde elegantes etiquetas adhesivas para personalizar 
                        tus productos hasta prácticas mangas para café, ofrecemos una amplia variedad de soluciones 
                        diseñadas para cumplir con tus necesidades específicas.

                        Ya sea que busques materiales únicos para promover tu negocio, darle un toque distintivo 
                        a tus productos, o simplemente llevar un proyecto personal al siguiente nivel, nuestro 
                        equipo está listo para apoyarte en cada paso del proceso.

                        ¡Haz realidad tus ideas con nosotros! Permítenos ayudarte a crear materiales que 
                        no solo cumplen con tus expectativas, sino que también las superan. Porque en nuestra 
                        imprenta, tus proyectos siempre tienen un lugar especial.
                    </p>
                </motion.div>  
                <div className="video-section">
                    <video className="video" src={video} autoPlay loop muted></video>
                </div>
            </div>
        </main>
    );
}

export default Content;