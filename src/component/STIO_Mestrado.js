import React from "react";
import '../App.css';
import Menu from "./Menu";


class STIO_Mestrado extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <Menu></Menu>
                <h1>Sistemas e Tecnologias de Informação para as Organizações</h1>
           </div>
            
        ) 
    }
}
export default STIO_Mestrado;
