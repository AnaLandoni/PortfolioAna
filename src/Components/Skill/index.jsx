import React from "react";
import './skill.css';


const Skill = () => {
    return(
        <div className="Habilidades">
            <p>Me considero una persona proactiva, responsable, con gran capacidad de aprendizaje y optimas relaciones sociales. He vivido durante varios meses en otros países, por lo que me adapto fácilmente a los cambios y a nuevos entornos de trabajo. <br />Actualmente, busco un trabajo donde pueda desarrollar todo mi potencial y me permita crecer profesionalmente afrontando, día a día, nuevos desafíos y responsabilidades. Estoy dispuesta al cambio de residencia y/o viajar si se requiere.</p>
                
            <a href="https://www.linkedin.com/in/analauralandoni/" className="linkein"><h1 className="seguime">CLICK PARA MAS INFORMACIÓN</h1></a>
            <div className="estrellas">
                <div className="estrella"></div>
                <div className="estrella"></div>
                <div className="estrella"></div>
                <div className="estrella"></div>
                <div className="estrella"></div>
                <div className="estrella"></div>
            </div>

        </div>
    )
}
export {Skill}