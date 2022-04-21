import React from "react";
import '../App.css';
import Menu from "./Menu";
import { NavLink } from "react-router-dom";


class RSI_CTeSP extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>            
                <Menu></Menu>
                <h1 className="titulo">Redes e Sistemas Informáticos</h1>
                <h2 className="titulo">(CTeSP)</h2>
                <br></br>
                <div className="conteudoHome">
                    <div className="informacao">
                        <h2 className="titulo">Porquê RSI?</h2>
                        <p>RSI visa formar profissionais aptos para planear, instalar, configurar, administrar e fazer a manutenção e monitorização de redes e sistemas informáticos de apoio às diferentes áreas de organização, visando assegurar a gestão e funcionamento dos equipamentos informáticos e respetivas redes de comunicação.</p>
                        <br></br>
                        <h3 className="titulo">RSI</h3>
                        <p>Se é esta a área que gostas, porque não tentar? Vem conhecer-nos!</p>
                        
                    </div>
                    <br></br>
                    <div className="videos">
                        <img className="videos" src="/rsi.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                        <img className="videos" src="/rsi2.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                        <img src="/rsi3.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                    </div>
                    <div>
                        <h2 className="titulo">Plano Curricular</h2>
                        <h3 className="titulo">1ºano 1ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula2">Horas de Contacto</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Iniciação à Informática</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">65</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Cálculo</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">52</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Introdução à Programação</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">65</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Comportamento Humano das Organizações</td>
                            <td className="centrar">3.0</td>
                            <td className="centrar">26</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Arquitecturas e Protocolos de Comunicação</td>
                            <td className="centrar">8.0</td>
                            <td className="centrar">78</td>
                        </tr>

                        <h3 className="titulo">1ºano 2ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula2">Horas de Contacto</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Metodologias do Projeto</td>
                            <td className="centrar">3.0</td>
                            <td className="centrar">26</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Estruturas Discretas</td>
                            <td className="centrar">3.0</td>
                            <td className="centrar">26</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Arquitetura de Sistemas Computacionais</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">52</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Sistemas Operativos</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">65</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Administração e Gestão de Redes</td>
                            <td className="centrar">8.0</td>
                            <td className="centrar">78</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Bases de Dados</td>
                            <td className="centrar">4.0</td>
                            <td className="centrar">39</td>
                        </tr>

                        <h3 className="titulo">2ºano 1ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula2">Horas de Contacto</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Deontologia e Regulamentação Informática</td>
                            <td className="centrar">3.0</td>
                            <td className="centrar">26</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Segurança em Redes e Sistemas Informáticos</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">52</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Serviços Telemáticos</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">52</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Complementos de Sistemas Operativos</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">52</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Administração de Sistemas</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">52</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Projeto Integrado</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">52</td>
                        </tr>
                        <h3 className="titulo">2ºano 2ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula2">Horas de Contacto</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Estágio em Empresa</td>
                            <td className="centrar">30.0</td>
                            <td> </td>
                        </tr>
                    </div>
                    <br></br>
                    <div>
                        <h3 className="titulo">Legenda</h3>
                        <tr>
                            <td className="tamanhoCelula4">ECTS: </td>
                            <td>Número de Créditos</td>
                        </tr>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="infoEscola">
                        <h3 className="titulo">Para mais informações</h3>
                        <NavLink exact="true" to="//www.di.estgv.ipv.pt/Dep/di/web/?opt=MTE4LjYxLjUyLjU1Lg==">Redes e Sistemas de Informação</NavLink>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="formulario">
                        <form>
                            <label className="titulo">Nome: <br></br> <input type="text" name="name" placeholder="Inserir nome" /></label>
                            <br></br>
                            <label className="titulo">Email: <br></br> <input type="text" name="email" placeholder="Inserir email"/></label>
                            <br></br>
                            <label className="titulo">Mensagem: <br></br> <textarea  type="text" name="mensagem" placeholder="Inserir mensagem"/></label>
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
export default RSI_CTeSP;