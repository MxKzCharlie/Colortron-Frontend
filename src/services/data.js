import etiquetasImg from '../assets/img/imgs-products/1slider.png'
import volantesImg from '../assets/img/imgs-products/2slider.png'
import notasImg from '../assets/img/imgs-products/3slider.png'
import tarjetasImg from '../assets/img/imgs-products/4slider.png'
import lonasImg from '../assets/img/imgs-products/5slider.png'
import vinilesImg from '../assets/img/imgs-products/6slider.png'
import bordadosImg from '../assets/img/imgs-products/7slider.png'
import serigrafiaImg from '../assets/img/imgs-products/8slider.png'
import cajasImg from '../assets/img/imgs-products/9slider.png'
import mangasDeCafeImg from '../assets/img/imgs-products/10productMock.png'

export const products = [
    {
        id:'etiquetas',
        title: 'Etiquetas',
        description: `Personaliza tus productos con nuestras etiquetas adhesivas, 
        ideales para destacar tu marca y comunicar información importante de manera 
        profesional y atractiva.`,
        options: [
            {
                name: 'Direct Thermal',
                img: etiquetasImg,
                description: `Impresión de alta calidad con durabilidad y resistencia a la abrasión
                y a los químicos. Ideal para etiquetas de productos, cajas y más.`,
            },
            {
                name: 'Thermal Transfer',
                img: cajasImg,
                description: `Impresión de alta calidad con durabilidad y resistencia a la abrasión
                y a los químicos. Ideal para etiquetas de productos, cajas y más.`,
            },
            {
                name: 'Colores',
                img: vinilesImg,
                description: `Impresión a todo color con calidad fotográfica, perfecta para etiquetas
                de productos, botellas, alimentos y más.`,
            },
            {
                name: 'Personalizado',
                img: mangasDeCafeImg,
                description: `Diseña tus propias etiquetas con formas, tamaños y colores personalizados,
                perfectas para productos, eventos y promociones.`,
            },
        ],
        mainImg: etiquetasImg,
    },
    {
        id: 'volantes',
        title: 'Volantes',
        description: `Llega a más personas con nuestros volantes de alta calidad, 
        perfectos para promocionar eventos, negocios o productos con diseños impactantes.`,
        options: [
            {
                name: "Carta - 8.5'' x 11''",
                img: volantesImg,
                description: `Volantes de tamaño carta, ideales para promociones, eventos y negocios.`,
            },
            {
                name: "Media Carta - 5.5'' x 8.5''",
                img: volantesImg,
                description: `Volantes de tamaño media carta, ideales para promociones, eventos y negocios.`,
            },
            {
                name: "Cuarto de Carta - 4.25'' x 5.5''",
                img: volantesImg,
                description: `Volantes de tamaño cuarto de carta, ideales para promociones, eventos y negocios.`,
            }
        ],
        mainImg: volantesImg,
    },
    {
        id: 'notas',
        title: 'Notas',
        description: `Mantén tus ideas organizadas y deja una impresión profesional con nuestras 
        notas personalizadas, ideales para oficinas y eventos.`,
        options: [
            {
                name: "Carta - 8.5'' x 11''",
                img: notasImg,
                description: `Diseña tus propias notas con formas, tamaños y colores personalizados,
                perfectas para eventos, oficinas y promociones.`,
            },
            {
                name: "Media Carta - 5.5'' x 8.5''",
                img: notasImg,
                description: `Diseña tus propias notas con formas, tamaños y colores personalizados,
                perfectas para eventos, oficinas y promociones.`,
            },
            {
                name: "Cuarto de Carta - 4.25'' x 5.5''",
                img: notasImg,
                description: `Diseña tus propias notas con formas, tamaños y colores personalizados,
                perfectas para eventos, oficinas y promociones.`,
            }
        ],
        mainImg: notasImg,
    },
    {
        id: 'tarjetas',
        title: 'Tarjetas',
        description: `Dale un toque de distinción a tu presentación con nuestras tarjetas, 
        diseñadas para reflejar la esencia de tu marca en cada detalle.`,
        options: [
            {
                name: 'Personalizado',
                img: tarjetasImg,
                description: `Diseña tus propias tarjetas con formas, tamaños y colores personalizados,
                perfectas para eventos, oficinas y promociones.`,
            }
        ],
        mainImg: tarjetasImg,
    },
    {
        id: 'lonas',
        title: 'Lonas',
        description: `Atrae todas las miradas con nuestras lonas resistentes y personalizables, 
        perfectas para publicidad en exteriores y eventos especiales.`,
        options: [
            {
                name: 'Personalizado',
                img: lonasImg,
                description: `Diseña tus propias lonas con formas, tamaños y colores personalizados,
                perfectas para eventos, oficinas y promociones.`,
            }
        ],
        mainImg: lonasImg,
    },
    {
        id: 'viniles',
        title: 'Viniles',
        description: `Decora y personaliza con nuestros viniles de alta calidad, ideales para vehículos, 
        ventanas y superficies que requieren un toque especial.`,
        options: [
            {
                name: 'Personalizado',
                img: vinilesImg,
                description: `Diseña tus propios viniles con formas, tamaños y colores personalizados,
                perfectos para vehículos, ventanas y superficies.`,
            }
        ],
        mainImg: vinilesImg,
    },
    {
        id: 'bordados',
        title: 'Bordados',
        description: ` Dale elegancia y durabilidad a tus prendas con nuestro servicio de bordado, ideal 
        para uniformes, gorras y más.`,
        options:[
            {
                name: 'Personalizado',
                img: bordadosImg,
                description: `Diseña tus propios bordados con formas, tamaños y colores personalizados,
                perfectos para uniformes, gorras y más.`,
            }
        ],
        mainImg: bordadosImg,
    },
    {
        id: 'serigrafia',
        title: 'Serigrafía',
        description: ` Imprime tus diseños en gran escala con serigrafía de calidad, perfecta para camisetas, 
        bolsas y una amplia gama de productos.`,
        options:[
            {
                name: 'Personalizado',
                img: bordadosImg,
                description: `Diseña tus propios bordados con formas, tamaños y colores personalizados,
                perfectos para uniformes, gorras y más.`,
            }
        ],
        mainImg: serigrafiaImg,
    },
    {
        id: 'cajas',
        title: 'Cajas',
        description: `Protege y embellece tus productos con nuestras cajas personalizadas, diseñadas para 
        ofrecer una presentación profesional y segura.`,
        options:[
            {
                name: 'Personalizado',
                img: cajasImg,
                description: `Diseña tus propias cajas con formas, tamaños y colores personalizados,
                perfectas para productos, regalos y más.`,
            },
            {
                name: 'Caja normal',
                img: cajasImg,
                description: `Diseña tus propias cajas con formas, tamaños y colores personalizados,
                perfectas para productos, regalos y más.`,
            }
        ],
        mainImg: cajasImg,
    },
    {
        id: 'mangas-para-cafe',
        title: 'Mangas Para Café',
        description: `Ofrece comodidad y un toque especial con nuestras mangas para café personalizadas, 
        perfectas para destacar tu marca en cada bebida.`,
        options:[
            {
                name: 'Personalizado',
                img: mangasDeCafeImg,
                description: `Diseña tus propias mangas para café con formas, tamaños y colores personalizados,
                perfectas para cafeterías, eventos y promociones.`,
            }
        ],
        mainImg: mangasDeCafeImg,
    },
    {
        id: 'folders',
        title: 'Folders',
        description: `Organiza y presenta tus documentos con estilo con nuestros folders personalizados,
        ideales para oficinas, eventos y presentaciones.`,
        options:[
            {
                name: 'Tamaño carta',
                img: mangasDeCafeImg,
                description: `Diseña tus propios folders con formas, tamaños y colores personalizados,
                perfectos para oficinas, eventos y presentaciones.`,
            },
            {
                name: 'Tamaño oficio',
                img: mangasDeCafeImg,
                description: `Diseña tus propios folders con formas, tamaños y colores personalizados,
                perfectos para oficinas, eventos y presentaciones.`,
            }
        ],
        mainImg: mangasDeCafeImg,
    }
];