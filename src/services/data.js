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
        size: [
            ["1 x 1", 50], 
            ["2 x 2", 60], 
            ["3 x 3", 70], 
            ["4 x 4", 80], 
            ["5 x 5", 90], 
            ["Diseña Tu Estilo", 0],
        ],
        img: etiquetasImg,
    },
    {
        id: 'volantes',
        title: 'Volantes',
        description: `Llega a más personas con nuestros volantes de alta calidad, 
        perfectos para promocionar eventos, negocios o productos con diseños impactantes.`,
        size: [
            ["1.5 x 2", 50], 
            ["2.5 x 2.5",60], 
            ["3.5 x 3.5", 70], 
            ["4.5 x 4.5", 80], 
            ["5.5 x 5.5", 90], 
            ["Diseña Tu Estilo", 0],
        ],
        img: volantesImg,
    },
    {
        id: 'notas',
        title: 'Notas',
        description: `Mantén tus ideas organizadas y deja una impresión profesional con nuestras 
        notas personalizadas, ideales para oficinas y eventos.`,
        size: [
            ["2 x 1", 10], 
            ["3 x 2", 20],
            ["4 x 3", 30],
            ["5 x 4", 40],
            ["6 x 5", 50],
            ["Diseña Tu Estilo", 0],
        ],
        img: notasImg,
    },
    {
        id: 'tarjetas',
        title: 'Tarjetas',
        description: `Dale un toque de distinción a tu presentación con nuestras tarjetas, 
        diseñadas para reflejar la esencia de tu marca en cada detalle.`,
        size: [
            ["Diseña Tu Estilo", 0]
        ],
        img: tarjetasImg,
    },
    {
        id: 'lonas',
        title: 'Lonas',
        description: `Atrae todas las miradas con nuestras lonas resistentes y personalizables, 
        perfectas para publicidad en exteriores y eventos especiales.`,
        size: [
            ["Diseña Tu Estilo", 0]
        ],
        img: lonasImg,
    },
    {
        id: 'viniles',
        title: 'Viniles',
        description: `Decora y personaliza con nuestros viniles de alta calidad, ideales para vehículos, 
        ventanas y superficies que requieren un toque especial.`,
        size: [
            ["Diseña Tu Estilo", 0]
        ],
        img: vinilesImg,
    },
    {
        id: 'bordados',
        title: 'Bordados',
        description: ` Dale elegancia y durabilidad a tus prendas con nuestro servicio de bordado, ideal 
        para uniformes, gorras y más.`,
        size: [
            ["Diseña Tu Estilo", 0]
        ],
        img: bordadosImg,
    },
    {
        id: 'serigrafia',
        title: 'Serigrafía',
        description: ` Imprime tus diseños en gran escala con serigrafía de calidad, perfecta para camisetas, 
        bolsas y una amplia gama de productos.`,
        size: [
            ["Diseña Tu Estilo", 0]
        ],
        img: serigrafiaImg,
    },
    {
        id: 'cajas',
        title: 'Cajas',
        description: `Protege y embellece tus productos con nuestras cajas personalizadas, diseñadas para 
        ofrecer una presentación profesional y segura.`,
        size: [
            ["2 x 2", 100], 
            ["3 x 3", 110],
            ["4 x 4", 120],
            ["5 x 5", 130],
            ["6 x 6", 140],
            ["Diseña Tu Estilo", 0],
        ],
        img: cajasImg,
    },
    {
        id: 'mangas-para-cafe',
        title: 'Mangas Para Café',
        description: `Ofrece comodidad y un toque especial con nuestras mangas para café personalizadas, 
        perfectas para destacar tu marca en cada bebida.`,
        size:  [
            ["1 x 2.5", 80], 
            ["2 x 3.5", 90],
            ["3 x 4.5", 100],
            ["4 x 5.5", 110],
            ["5 x 6.5", 130], 
            ["Diseña Tu Estilo", 0],
        ],
        img: mangasDeCafeImg,
    },
];