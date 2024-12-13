import '../../assets/css/homePage/header.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'  
import NavHeader from './NavHeader'
import CoverFlowSlider from './CoverFlowSlider'
import shadow from '../../assets/img/sombraV2.png'

function Header() {
    return (
        <div className="container-header">
            <NavHeader />   
            <motion.div 
            initial={{opacity: 0, y: 45}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.9}}
            className="container-info-header">
                <h1 className="title-header">COLORTRON</h1>
                <div className="info-header">Imprenta con
                    <span className="xl:text-6xl text-4xl">
                    <div className="flex flex-row">
                            <span className="text-[#00274D]">A</span>
                            <span className="text-[#0055A5]">L</span>
                            <span className="text-[#0077CC]">T</span>
                            <span className="text-[#00AACC]">A</span>
                            <span className="text-[#33CC99] ml-4">C</span>
                            <span className="text-[#77CC00]">A</span>
                            <span className="text-[#FFDD00]">L</span>
                            <span className="text-[#FFAA00]">I</span>
                            <span className="text-[#FF7700]">D</span>
                            <span className="text-[#FF3300]">A</span>
                            <span className="text-[#CC0000]">D</span>
                        </div>   
                    </span>
                    de edición
                </div>
                <Link to="/productos/principal/" className="btn-header">
                    Ver Productos
                </Link>
            </motion.div>
            <div className="slider-dinamic">
                <CoverFlowSlider />
                <img src={shadow} alt="shadow" className="shadow-custom" />
            </div>
        </div>
    );
}

export default Header;