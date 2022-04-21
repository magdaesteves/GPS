import React from "react";
import '../App.css';
import Menu from "./Menu";
import { NavLink } from "react-router-dom";
class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <h1 className="titulo">Departamento de Informática</h1>
                <br></br>
                <div className="conteudoHome">
                    <div className="informacao">
                        <h3 className="titulo">Porquê a área de Informática?</h3>
                        <p>A Informática faz parte de quase toda atividade profissional.</p>
                        <p>É difícil imaginar uma empresa que não dependa de máquinas, equipamentos e softwares para funcionar.</p>
                        <p>Também está muito presente na forma como nos comunicamos e acessamos informações, seja na vida profissional ou pessoal.</p>
                    </div>
                    <br></br>
                    <div>
                        <video className="videos" width="360" height="240" controls>
                            <source src="/video1-home.mp4" type="video/mp4"></source>
                        </video>
                        <video className="videos" width="360" height="240" controls>
                            <source src="/video2-home.mp4" type="video/mp4"></source>
                        </video>
                        <video className="videos" width="360" height="240" controls>
                            <source src="/video3-home.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <br></br>
                    <div className="infoEscola">
                        <h3 className="titulo">Para mais informações</h3>
                        <NavLink exact="true" to="//www.di.estgv.ipv.pt/Dep/di/web/?opt=MTE4LjYxLjQ4LjM4LjExOC4xMTUuNjEuNTMuNTYu">Departamento de Informática</NavLink>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="formulario">
                        <form>
                            <label className="titulo">Nome: <br></br> <input type="text" name="name" placeholder="Inserir nome" /></label>
                            <br></br>
                            <label className="titulo">Email: <br></br> <input type="text" name="email" placeholder="Inserir email"/></label>
                            <br></br>
                            <label className="titulo">Mensagem: <br></br> <input type="text" name="mensagem" placeholder="Inserir mensagem"/></label>
                            <br></br>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}
export default Homepage;