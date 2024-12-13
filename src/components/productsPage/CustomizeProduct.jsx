import '../../assets/css/productsPage/customizeProduct.css'
import DropZone from './DropZone'
import FormCustomize from './FormCustomize'
import { useState, useEffect } from 'react'
import { FaRegFile } from "react-icons/fa"
import { MdErrorOutline } from "react-icons/md"
import { RxCross1 } from "react-icons/rx"

function CustomizeProduct() {
    const [files, setFiles] = useState([]);
    const [errorExt, setErrorExt] = useState({display: "none"});
    const [errorSize, setErrorSize] = useState({display: "none"});

    const handleDeleteFile = (index) => {
        const copyFiles = [...files];
        copyFiles.splice(index, 1);
        setFiles(copyFiles);
    };

    return (  
        <div className="container-customizeProduct">
            <div className="customizeProduct">
                <div className="drop-zone-section">
                    <DropZone setFiles={setFiles} setErrorExt={setErrorExt}
                    setErrorSize={setErrorSize}/>
                </div>
                <div className="files-viewer-section">
                    <div className="container-files">
                        <div style={errorExt} role="alert" className="alertErrorExt">
                            <MdErrorOutline className="w-8 h-auto" />
                            <span className="font-general">
                                Error! Archivo rechazado. Extension no valida
                            </span>
                        </div>
                        <div style={errorSize} role="alert" className="alertErrorSize">
                            <MdErrorOutline className="w-8 h-auto" />
                            <span className="font-general">
                                Error! Peso excedido de 10MB.
                            </span>
                        </div>
                        {
                            files.length === 0 ? (
                                <div className="w-full h-full flex justify-center items-center">
                                    <p className="text-gray-500 font-general text-4xl text-center">
                                        Lista de Archivos vacío...
                                    </p>
                                </div>
                            ):(
                                <div className="w-full h-full flex flex-col items-center gap-2 relative">
                                    <h2 className="w-full h-auto font-general text-2xl font-semibold my-2">
                                        Archivos
                                    </h2>
                                    {files.map((file, key) => (
                                        <div key={key} className="file">
                                            <button onClick={() => handleDeleteFile(key)} 
                                            className="button-delete-file">
                                                <RxCross1 />
                                            </button>
                                            <FaRegFile className="icon-file" />
                                            <span className="name-file">{file.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <FormCustomize files={files}/>
        </div>
    );
}

export default CustomizeProduct;