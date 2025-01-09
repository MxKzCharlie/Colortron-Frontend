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
                descriptionOption: `Impresión de alta calidad con durabilidad y resistencia a la abrasión
                y a los químicos. Ideal para etiquetas de productos, cajas y más.`,
                uploadFiles: false,
                optionsQuote: [
                    {
                        name: 'Nucleo',
                        inputType: 'select',
                        optionsSelect: ['1"', '1.5"', '3"'],
                        required: true,
                    },
                    {
                        name: 'Largo (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Ancho (inch)',
                        inputType: 'text',
                        required: true,
                    },
                ],
            },
            {
                name: 'Thermal Transfer',
                img: cajasImg,
                descriptionOption: `Impresión de alta calidad con durabilidad y resistencia a la abrasión
                y a los químicos. Ideal para etiquetas de productos, cajas y más.`,
                uploadFiles: false,
                optionsQuote: [
                    {
                        name: 'Nucleo',
                        inputType: 'select',
                        optionsSelect: ['1"', '1.5"', '3"'],
                        required: true,
                    },
                    {
                        name: 'Largo (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Ancho (inch)',
                        inputType: 'text',
                        required: true,
                    },
                ],
            },
            {
                name: 'Colores',
                img: vinilesImg,
                descriptionOption: `Impresión a todo color con calidad fotográfica, perfecta para etiquetas
                de productos, botellas, alimentos y más.`,
                uploadFiles: false,
                optionsQuote: [
                    {
                        name: 'Nucleo',
                        inputType: 'select',
                        optionsSelect: ['1"', '1.5"', '3"'],
                        required: true,
                    },
                    {
                        name: 'Largo (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Ancho (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Color (pantone)',
                        inputType: 'text',
                        required: true,
                    },
                ],
            },
            {
                name: 'Personalizado',
                img: mangasDeCafeImg,
                descriptionOption: `Diseña tus propias etiquetas con formas, tamaños y colores personalizados,
                perfectas para productos, eventos y promociones.`,
                uploadFiles: true,
                optionsQuote: [
                    {
                        name: 'Nucleo',
                        inputType: 'select',
                        optionsSelect: ['1"', '1.5"', '3"'],
                        required: true,
                    },
                    {
                        name: 'Largo (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Ancho (inch)',
                        inputType: 'text',
                        required: true,
                    },
                ],
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
                name: 'Carta - 8.5" x 11"',
                img: volantesImg,
                descriptionOption: `Volantes de tamaño carta, ideales para promociones, eventos y negocios.`,
                uploadFiles: true,
                optionsQuote: [],
            },
            {
                name: 'Media Carta - 5.5" x 8.5"',
                img: volantesImg,
                descriptionOption: `Volantes de tamaño media carta, ideales para promociones, eventos y negocios.`,
                uploadFiles: true,
                optionsQuote: [],
            },
            {
                name: 'Cuarto de Carta - 4.25" x 5.5"',
                img: volantesImg,
                descriptionOption: `Volantes de tamaño cuarto de carta, ideales para promociones, eventos y negocios.`,
                uploadFiles: true,
                optionsQuote: [],
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
                name: 'Carta - 8.5" x 11"',
                img: notasImg,
                descriptionOption: `Diseña tus propias notas con formas, tamaños y colores personalizados,
                perfectas para eventos, oficinas y promociones.`,
                uploadFiles: true,
                optionsQuote: [
                    {
                        name: 'Con Numeración',
                        inputType: 'select',
                        optionsSelect: ['Si', 'No'],
                        required: true,
                    },
                    {
                        name: '# Copias',
                        inputType: 'select',
                        optionsSelect: ['1', '2',],
                        required: true,
                    },
                ],
            },
            {
                name: 'Media Carta - 5.5" x 8.5"',
                img: notasImg,
                descriptionOption: `Diseña tus propias notas con formas, tamaños y colores personalizados,
                perfectas para eventos, oficinas y promociones.`,
                uploadFiles: true,
                optionsQuote: [
                    {
                        name: 'Con Numeración',
                        inputType: 'select',
                        optionsSelect: ['Si', 'No'],
                        required: true,
                    },
                    {
                        name: '# Copias',
                        inputType: 'select',
                        optionsSelect: ['1', '2',],
                        required: true,
                    },
                ],
            },
            {
                name: 'Cuarto de Carta - 4.25" x 5.5"',
                img: notasImg,
                descriptionOption: `Diseña tus propias notas con formas, tamaños y colores personalizados,
                perfectas para eventos, oficinas y promociones.`,
                uploadFiles: true,
                optionsQuote: [
                    {
                        name: 'Con Numeración',
                        inputType: 'select',
                        optionsSelect: ['Si', 'No'],
                        required: true,
                    },
                    {
                        name: '# Copias',
                        inputType: 'select',
                        optionsSelect: ['1', '2',],
                        required: true,
                    },
                ],
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
                name: '3.5" x 2"',
                img: tarjetasImg,
                descriptionOption: `Diseña tus propias tarjetas con formas, tamaños y colores personalizados,
                perfectas para eventos, oficinas y promociones.`,
                uploadFiles: true,
                optionsQuote: [],
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
                descriptionOption: `Diseña tus propias lonas con formas, tamaños y colores personalizados,
                perfectas para eventos, oficinas y promociones.`,
                uploadFiles: true,
                optionsQuote: [
                    {
                        name: 'Largo (m)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Ancho (m)',
                        inputType: 'text',
                        required: true,
                    },
                ],
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
                descriptionOption: `Diseña tus propios viniles con formas, tamaños y colores personalizados,
                perfectos para vehículos, ventanas y superficies.`,
                uploadFiles: true,
                optionsQuote: [
                    {
                        name: 'Largo (m)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Ancho (m)',
                        inputType: 'text',
                        required: true,
                    },
                ],
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
                descriptionOption: `Diseña tus propios bordados con formas, tamaños y colores personalizados,
                perfectos para uniformes, gorras y más.`,
                uploadFiles: true,
                optionsQuote: [
                    {
                        name: 'Largo (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Ancho (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Zona de Bordado',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Material de la Prenda',
                        inputType: 'text',
                        required: true,
                    },
                ],
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
                descriptionOption: `Diseña tus propios bordados con formas, tamaños y colores personalizados,
                perfectos para uniformes, gorras y más.`,
                uploadFiles: true,
                optionsQuote: [
                    {
                        name: 'Largo (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Ancho (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Zona de Bordado',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Material de la Prenda',
                        inputType: 'text',
                        required: true,
                    },
                ],
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
                descriptionOption: `Diseña tus propias cajas con formas, tamaños y colores personalizados,
                perfectas para productos, regalos y más.`,
                uploadFiles: false,
                optionsQuote: [
                    {
                        name: 'Largo (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Ancho (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Alto (inch)',
                        inputType: 'text',
                        required: true,
                    },
                ],
            },
            {
                name: 'Caja normal',
                img: cajasImg,
                descriptionOption: `Diseña tus propias cajas con formas, tamaños y colores personalizados,
                perfectas para productos, regalos y más.`,
                uploadFiles: true,
                optionsQuote: [
                    {
                        name: 'Largo (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Ancho (inch)',
                        inputType: 'text',
                        required: true,
                    },
                    {
                        name: 'Alto (inch)',
                        inputType: 'text',
                        required: true,
                    },
                ],
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
                name: 'Genericas',
                img: mangasDeCafeImg,
                descriptionOption: `Diseña tus propias mangas para café con formas, tamaños y colores personalizados,
                perfectas para cafeterías, eventos y promociones.`,
                uploadFiles: false,
                optionsQuote: [],
            },
            {
                name: 'Personalizado',
                img: mangasDeCafeImg,
                descriptionOption: `Diseña tus propias mangas para café con formas, tamaños y colores personalizados,
                perfectas para cafeterías, eventos y promociones.`,
                uploadFiles: true,
                optionsQuote: [],
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
                name: 'Generico',
                img: mangasDeCafeImg,
                descriptionOption: `Diseña tus propios folders con formas, tamaños y colores personalizados,
                perfectos para oficinas, eventos y presentaciones.`,
                uploadFiles: false,
                optionsQuote: [
                    {
                        name: 'Tamaño',
                        inputType: 'select',
                        optionsSelect: ['Carta', 'Oficio'],
                        required: true,
                    },
                ],
            },
            {
                name: 'Personalizado',
                img: mangasDeCafeImg,
                descriptionOption: `Diseña tus propios folders con formas, tamaños y colores personalizados,
                perfectos para oficinas, eventos y presentaciones.`,
                uploadFiles: true,
                optionsQuote: [
                    {
                        name: 'Tamaño',
                        inputType: 'select',
                        optionsSelect: ['Carta', 'Oficio'],
                        required: true,
                    },
                ],
            }
        ],
        mainImg: mangasDeCafeImg,
    }
];