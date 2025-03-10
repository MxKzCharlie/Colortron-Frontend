import '../assets/css/footer.css'
import { FaWhatsapp } from "react-icons/fa"
import { CiFacebook } from "react-icons/ci"
import { CgMail } from "react-icons/cg"
import { Link } from 'react-router-dom'
import { linkFace } from '../utils/links'

function Footer() {
    return (  
        <div className="container-footer">
            <div className="info-footer">
                <div className="container-contact">
                    <div className="contact">
                        <FaWhatsapp className="w-12 h-12"/>
                        <p>+52 664-573-6000</p>
                    </div>
                    <div className="contact">
                        <CgMail className="w-12 h-12"/>
                        <p>colortrontijuana@gmail.com</p>
                    </div>
                </div>
                <div className="schedule">
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">Lunes - Viernes</p>
                            <p>9:00 a.m. - 6:00 p.m.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">Sabado - Domingo</p>
                            <p>Cerrado</p>
                        </div>
                    </div>
                </div>
                <div className="social-media">
                    <p className="font-semibold">Redes Sociales:</p>
                    <Link to={linkFace} target='_blank' className="icon-facebook">
                        <CiFacebook className="w-12 h-12"/>
                    </Link>
                </div>
            </div>
            <span className="text-center">©Todos Los Derechos Reservados 2024. COLORTRON®</span>
        </div>
    );
}

export default Footer;