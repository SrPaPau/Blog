import './estilosSeleccioProjectes.css'



export default function SeleccioProjectes({onButtonClick}){
    const projectes = [
        { id: 1, descripcion: 'Proyecto Fotografico', carpeta: '📷'},
        { id: 2, descripcion: 'Proyecto de cocina', carpeta: '🍗'},
        { id: 2, descripcion: 'Proyecto de electronica', carpeta: '⚡'}
    ];

    

    const handleButtonClick = (proyecto) => {
        const nombreCarpeta = proyecto.carpeta;
        onButtonClick(nombreCarpeta);
    };


    return(
        <div className="divSuperiorApp">
            <div className="capçalera">
                PROYECTOS:
            </div>

            <div className="divProjectes">
                {projectes.map((proyecto) => (
                    <button key={proyecto.id} 
                            className="projectes" 
                            onClick={() => handleButtonClick(proyecto)}>
                                <h2 className="h2Nombre">{proyecto.carpeta}</h2>
                                <p>{proyecto.descripcion}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}