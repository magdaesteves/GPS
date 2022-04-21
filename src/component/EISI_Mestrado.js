import React from "react";
import '../App.css';
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

class EISI_Mestrado extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <Menu></Menu>
                <h1 className="titulo">Engenharia Informática - Sistemas de Informação</h1>
                <h2 className="titulo">(Mestrado)</h2>
                <br></br>
                <div className="conteudoHome">
                    <div className="informacao">
                        <h2 className="titulo">Porquê EISI?</h2>
                        <p>Pretendes obter um maior nível de especialização nas áreas à  tua escolha e o acesso a níveis de contratação profissionais mais elevados? Este é o curso ideal para ti!</p>
                        <br></br>
                        <h3 className="titulo">EISI</h3>
                        <p>O curso de Mestrado em Engenharia Informática - Sistemas de Informação propõe-se a formar técnicos qualificados de nível superior.</p>
                        
                    </div>
                    <br></br>
                    <div className="videos">
                        <img className="videos" src="/eisi2.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                        <img className="videos" src="/eisi.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                        <img src="/eisi3.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                    </div>
                    <br></br>
                    <div>
                        <h2 className="titulo">Plano Curricular</h2>
                        <h3 className="titulo">1ºano 1ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula3">ECTS</th>
                            <th className="tamanhoCelula3">HT</th>
                            <th className="tamanhoCelula3">HTP</th>
                            <th className="tamanhoCelula3">HOT</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Análise e Inteligente de Dados</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Design de Interfaces</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Integração em Sistemas Inteligentes</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Planeamento e Gestão de Projetos</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Sistemas de Informação em Dispositivos Móveis</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>

                        <h3 className="titulo">1ºano 2ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula3">ECTS</th>
                            <th className="tamanhoCelula3">HT</th>
                            <th className="tamanhoCelula3">HTP</th>
                            <th className="tamanhoCelula3">HOT</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Administração e Exploração Avançada de Bases de Dados</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Armazenamento e Processamento Analítico de Dados</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Desenvolvimento para a Web</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Gestão de Sistemas de Informação</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Tecnologias e Gestão de Serviços</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>

                        <h3 className="titulo">2ºano 1ºsemestre</h3>
                        <tr className="titulo">
                        <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula3">ECTS</th>
                            <th className="tamanhoCelula3">HT</th>
                            <th className="tamanhoCelula3">HTP</th>
                            <th className="tamanhoCelula3">HOT</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Introdução à Dissertação/Projeto/Estágio</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Sistemas de Informação Empresariais</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">15</td>
                            <td className="centrar">25</td>
                            <td className="centrar"></td>
                        </tr>

                        <h3 className="titulo">2ºano 2ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula3">ECTS</th>
                            <th className="tamanhoCelula3">HT</th>
                            <th className="tamanhoCelula3">HTP</th>
                            <th className="tamanhoCelula3">HOT</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Dissertação/Projeto/Estágio</td>
                            <td className="centrar">48.0</td>
                            <td className="centrar"></td>
                            <td className="centrar"></td>
                            <td className="centrar">40</td>
                        </tr>
                    </div>
                    <br></br>
                    <div>
                        <h3 className="titulo">Legenda</h3>
                        <tr>
                            <td className="tamanhoCelula4">ECTS: </td>
                            <td>Número de Créditos</td>
                        </tr>
                        <tr>
                            <td className="tamanhoCelula4">HT: </td>
                            <td>Número de Horas Teóricas</td>
                        </tr>
                        <tr>
                            <td className="tamanhoCelula4">HTP: </td>
                            <td>Número de Horas Teórico-Práticas</td>
                        </tr>
                        <tr>
                            <td className="tamanhoCelula4">HOT: </td>
                            <td>Número de Horas Tuturia</td>
                        </tr>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="infoEscola">
                        <h3 className="titulo">Para mais informações</h3>
                        <NavLink exact="true" to="//www.di.estgv.ipv.pt/Dep/di/web/?opt=MTE4LjYxLjUzLjQ5Lg==">Engenharia Informática - Sistemas de Informação</NavLink>
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
                    <br></br>
                </div>
            </div>
        ) 
    }
}
export default EISI_Mestrado;