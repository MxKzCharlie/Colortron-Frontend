import '../../assets/css/homePage/navHeader.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { linkMap } from '../../utils/links'

function Nav() {
    return (  
        <motion.nav 
        className='container-navHeader'>
            <motion.div 
                initial={{opacity: 0, x: 45}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.9}}
            className="container-options-navHeader">
                <Link to="/" className="option-navHeader">Inicio</Link>
                <Link target='_blank' to={linkMap} className="option-navHeader">Ubicación</Link>
                <Link to="/productos/principal/" className="option-navHeader">Productos</Link>
            </motion.div>
        </motion.nav>
    );
}

export default Nav;