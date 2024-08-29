import './estilosBarraSuperior.css'
import fotoPerfil from '../../assets/img/FotoPerfil.png'
import iconoInsta from '../../assets/icons/instagram.svg'
import iconoTwitter from '../../assets/icons/twitter-x.svg'

export default function BarraSuperior(){

    const name = 'Nombre de usuario';
    const direccionTwitter = '';

    return(
        <div className="divSuperiorBarraSuperior">
            <div className="divInterior-Superior">
                <div className="divDatos">
                    <div className="divNombre">
                        <h1>{name}</h1>
                    </div>
                    <div className="divDescripcion">
                        <p>Descripción del usuario</p>
                    </div>
                </div>
            </div>
            <div className="divInterior-Superior">
                <div className="aFotoPerfil">
                    <img className="fotoPerfil" src={fotoPerfil} alt=""></img>
                </div>
            </div>
            <div className="divInterior-Superior">
                <div className="divRRSS">
                    <div className="aDivRRSSapps">
                        <img className="divRRSSapps" src={iconoInsta} alt=""></img>
                        
                    </div>
                    <div className="aDivRRSSapps">
                        <a href={direccionTwitter}>
                            <img className="divRRSSapps" src={iconoTwitter} alt=""></img>
                        </a>
                    </div>
                    <div className="aDivRRSSapps">

                    </div>
                </div>
            </div>
        </div>
    )
}