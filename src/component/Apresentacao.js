import React from "react";
import '../App.css';
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

class Apresentacao extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <Menu></Menu>
                <h1 className="titulo">Apresentação dos Cursos</h1>
                <h2 className="titulo">CTeSP</h2>
                <div className="ladoalado">
                    <div className="containerApresentacao">
                        <NavLink exact="true" to="/RSI_CTeSP"><img className="logos" src="/rsilogo.png" alt="Devia estar aqui uma imagem" height={"150px"}></img></NavLink>
                    </div>
                    <div className="containerApresentacao">
                        <NavLink exact="true" to="/DWDM_CTeSP"><img className="logos" src="/dwdmlogo.png" alt="Devia estar aqui uma imagem" height={"150px"}></img></NavLink>
                    </div>
                </div>
                <h2 className="titulo">Licenciatura</h2>
                <div className="ladoalado">
                    <div className="containerApresentacao">
                        <NavLink exact="true" to="/EI_Licenciatura"><img className="logos" src="/eilogo.png" alt="Devia estar aqui uma imagem" height={"150px"}></img></NavLink>
                    </div>
                    <div className="containerApresentacao">
                        <NavLink exact="true" to="/TDM_Licenciatura"><img className="logos" src="/tdmlogo.png" alt="Devia estar aqui uma imagem" height={"150px"}></img></NavLink>
                    </div>
                </div>
                <h2 className="titulo">Mestrado</h2>
                <div className="centro">
                    <div className="containerApresentacao">
                        <NavLink exact="true" to="/EISI_Mestrado"><img className="logos" src="/eisilogo.png" alt="Devia estar aqui uma imagem" height={"150px"}></img></NavLink>
                    </div>
                </div>
            </div>
        ) 
    }
}
export default Apresentacao;