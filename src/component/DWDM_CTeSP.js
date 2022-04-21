import React from "react";
import '../App.css';
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

class DWDM_CTeSP extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <h1 className="titulo">Desenvolvimento para a Web e Dispositivos Móveis</h1>
                <h2 className="titulo">(CTeSP)</h2>
                <br></br>
                <div className="conteudoHome">
                    <div className="informacao">
                        <h2 className="titulo">Porquê DWDM?</h2>
                        <p>Já terminaste o ensino secundário e queres ingressar na área das Tecnologias Informáticas, enquanto ganhas experiência em ambiente real de trabalho, com uma bolsa de estudos e sem pagar propinas? Candidata-te ao programa BrightStart e vem fazer parte da nossa comunidade tecnológica.</p>
                        <br></br>
                        <h3 className="titulo">Brightstart</h3>
                        <p>O BrightStart é um programa de aceleração de competências para os finalistas do ensino secundário que pretendam ingressar na área das Tecnologias Informáticas.</p>
                        <p>É uma oportunidade para adquirirem, enquanto estudam, conhecimentos e competências práticas em ambiente real de trabalho.</p>
                        <p>Os candidatos selecionados terão as propinas asseguradas pela Deloitte durante a participação no programa e, adicionalmente, serão remunerados com uma bolsa mensal pela sua participação nos projetos da Deloitte.</p>
                    </div>
                    <br></br>
                    <div className="videos">
                        <video className="videos" width="360" height="240" controls>
                            <source src="/video1-dwdm.mp4" type="video/mp4"></source>
                        </video>
                        <video className="videos" width="360" height="240" controls>
                            <source src="/video1-dwdm.mp4" type="video/mp4"></source>
                        </video>
                        <video className="videos" width="360" height="240" controls>
                            <source src="/video1-dwdm.mp4" type="video/mp4"></source>
                        </video>
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
                            <td className="tamanhoTabela">Design Gráfico</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">52</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Introdução à Programação</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">65</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Modelação e Bases de Dados</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">52</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Programação e Serviços Web</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">65</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Tecnologias de Mercado</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">65</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Tecnologias Emergentes</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">125</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Tecnologias para o Desenvolvimento Web</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">65</td>
                        </tr>

                        <h3 className="titulo">1ºano 2ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula2">Horas de Contacto</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Gestão de Projetos Software</td>
                            <td className="centrar">3.0</td>
                            <td className="centrar">39</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Métodos Matemáticos</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">52</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Técnicas Avançadas de Programação</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">65</td>
                        </tr>

                        <h3 className="titulo">2ºano 1ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula2">Horas de Contacto</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Análise e Desenho de Software</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">78</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Deontologia e Regulamentação Informática</td>
                            <td className="centrar">3.0</td>
                            <td className="centrar">26</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Introdução às Tecnologias dos Computadores</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">65</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Programação para Dispositivos Móveis</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">65</td>
                        </tr>

                        <h3 className="titulo">2ºano 2ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula2">Horas de Contacto</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Design de Interação</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">65</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Estágio</td>
                            <td className="centrar">30.0</td>
                            <td className="centrar"> </td>
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
                        <NavLink exact="true" to="//www.di.estgv.ipv.pt/Dep/di/web/?opt=MTE4LjYxLjUzLjQ4Lg==">Desenvolvimento para a Web e Dispositivos Móveis</NavLink>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="formulario">
                        <form>
                            <label className="titulo">Nome: <br></br> <input type="text" name="name" placeholder="Inserir nome"/></label>
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
export default DWDM_CTeSP;