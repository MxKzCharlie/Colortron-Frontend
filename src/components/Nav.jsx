import '../assets/css/nav.css'
import { Link } from 'react-router-dom'
import { linkMap } from '../utils/links';
import logo from '../assets/img/colortronLogo.png'

function Nav() {
    return (  
        <div className='container-nav'>
            <div className="container-logo">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
            </div>
            <div className="container-options-nav">
                <Link to="/" className="option-nav">Inicio</Link>
                <Link to={linkMap} target="_blank" className="option-nav">Ubicación</Link>
                <Link to="/productos/principal/" className="option-nav">Productos</Link>
            </div>
        </div>
    );
}

export default Nav;