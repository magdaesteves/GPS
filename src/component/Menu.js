import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

class Menu extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div className="menu">
                    <div className="imagem">
                        <img src="/di.png" alt="Devia estar aqui uma imagem" height="40px"></img>
                    </div>
                    <div className="links">
                        <NavLink className="botoes" exact="true" to="/">Homepage</NavLink>
                        <NavLink className="botoes" exact="true" to="/apresentacao">Cursos</NavLink>
                        <NavLink className="botoes" exact="true" to="/RSI_CTeSP">RSI</NavLink>
                        <NavLink className="botoes" exact="true" to="/DWDM_CTeSP">DWDM</NavLink>
                        <NavLink className="botoes" exact="true" to="/EI_Licenciatura">EI</NavLink>
                        <NavLink className="botoes" exact="true" to="/TDM_Licenciatura">TDM</NavLink>
                        <NavLink className="botoes" exact="true" to="/EISI_Mestrado">EISI</NavLink>
                    </div>
                </div>
            </div>
            
        ) 
    }
}
export default Menu;