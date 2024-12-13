import { useCallback, useEffect, useRef } from "react"
import { useDropzone } from "react-dropzone"
import '../../assets/css/productsPage/dropZone.css'

function DropZone({setFiles, setErrorSize, setErrorExt}) {
    const dropZoneRef = useRef(null);
    const maxFileSize = 10 * 1024 * 1024;

    const onDropAccepted = useCallback((acceptedFiles) => {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]); 
        setErrorExt({ display: "none" });
        setErrorSize({ display: "none" }); 
    }, [setFiles, setErrorExt, setErrorSize]);

    const onDropRejected = useCallback((rejectedFiles) => {
        switch(rejectedFiles[0].errors[0].code){
            case "file-too-large":
                setErrorSize({display: "grid"});
                console.log('Demasiado peso en arhivos', rejectedFiles);
                break;
            case "file-invalid-type":
                setErrorExt({display: "grid"});
                console.log('Archivos Rechazados', rejectedFiles);
                break;
            default:
                alert('Error, intente de nuevo');
                console.error('Error', rejectedFiles);
                break;
        }
    }, [setErrorSize, setErrorExt]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        maxSize: maxFileSize, 
        accept: {
            'image/jpeg': [],
            'image/png': [],
        },
        onDropAccepted,
        onDropRejected,
    });

    useEffect(() => {
        if (isDragActive) {
            dropZoneRef.current.classList.add("bg-black-opacity");
        } else {
            dropZoneRef.current.classList.remove("bg-black-opacity");
        }
    }, [isDragActive]);

    return (
        <div {...getRootProps()} className="drop-zone" ref={dropZoneRef}>
            <input {...getInputProps()} className="input" />
                {isDragActive ? (
                        "Suelta los archivos aquí ..."
                    ) : (
                        "Da un click aquí o suelta las imágenes aquí"
                    )
                }
        </div>
    );
}

export default DropZone;