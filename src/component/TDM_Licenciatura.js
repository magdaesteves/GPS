import React from "react";
import '../App.css';
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

class TDM_Licenciatura extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <Menu></Menu>
                <h1 className="titulo">Tecnologias e Design de Multimédia</h1>
                <h2 className="titulo">(Licenciatura)</h2>
                <br></br>
                <div className="conteudoHome">
                    <div className="informacao">
                        <h2 className="titulo">Porquê TDM?</h2>
                        <p>Os formados em Tecnologias e Design de Multimédia terão uma sólida formação nos vários aspectos da Multiméda. Como futuros profissionais a trabalhar no domínio da Multimédia ficarão aptos para conceber produtos em que, quer os aspectos técnicos quer os criativos estejam devidamente contemplados. </p>
                        <br></br>
                        <h3 className="titulo">TDM</h3>
                        <p>O objetivo do ciclo de estudos da licenciatura em Tecnologias e Design de Multimédia (TDM) é conferir uma formação sólida a profissionais que, de uma forma autónoma ou integrados numa equipa, saibam analisar, planear, conceber e desenvolver produtos multimédia. .</p>
                        
                    </div>
                    <br></br>
                    <div className="videos">
                        <img className="videos" src="/tdm2.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                        <img className="videos" src="/tdm.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                        <img src="/tdm3.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                    </div>
                    <br></br>
                    <div>
                        <h2 className="titulo">Plano Curricular</h2>
                        <h3 className="titulo">1ºano 1ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula">HT</th>
                            <th className="tamanhoCelula">HTP</th>
                            <th className="tamanhoCelula">HPL</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Programação e Resolução de Problemas</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">52.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Fundamentos Multimédia</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">39.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Criatividade e Comunicação Multimédia</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">39.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Psicologia da Percepção</td>
                            <td className="centrar">3.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">26.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Design Multimédia</td>
                            <td className="centrar">6.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Desenho e Representação</td>
                            <td className="centrar">4.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">26.0</td>
                        </tr>

                        <h3 className="titulo">1ºano 2ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula">HT</th>
                            <th className="tamanhoCelula">HTP</th>
                            <th className="tamanhoCelula">HPL</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Fundamentos Matemáticos</td>
                            <td className="centrar">3.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">26.0</td>
                            <td className="centrar">19.5</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Composição e Fotografia</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Design de Interação I</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Design de Identidade</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Programação e Estruturas de Dados</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Projeto Integrado I</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>

                        <h3 className="titulo">2ºano 1ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula">HT</th>
                            <th className="tamanhoCelula">HTP</th>
                            <th className="tamanhoCelula">HPL</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Introdução às Redes e Serviços de Comunicação</td>
                            <td className="centrar">4.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">39.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Conteúdos Audiovisuais I</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Design de Interação II</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Aplicações para a Internet I</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Programação Orientada a Objectos</td>
                            <td className="centrar">4.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Projeto Integrado II</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>

                        <h3 className="titulo">2ºano 2ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula">HT</th>
                            <th className="tamanhoCelula">HTP</th>
                            <th className="tamanhoCelula">HPL</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Bases de Dados</td>
                            <td className="centrar">4.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">39.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Conteúdos Interativos</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Animação</td>
                            <td className="centrar">4.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Conteúdos Audiovisuais II</td>
                            <td className="centrar">4.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Aplicações para a Internet II</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Projeto Integrado III</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>

                        <h3 className="titulo">3ºano 1ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula">HT</th>
                            <th className="tamanhoCelula">HTP</th>
                            <th className="tamanhoCelula">HPL</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Computação Gráfica</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Aplicações de Base de Dados</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Aplicações para a Internet III</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Aplicações para Dispositivos Móveis</td>
                            <td className="centrar">6.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                            
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Projeto Integrado IV</td>
                            <td className="centrar">7.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">78.0</td>
                        </tr>

                        <h3 className="titulo">3ºano 2ºsemestre</h3>
                        <tr className="titulo">
                            <th className="tamanhoTabela">UC</th>
                            <th className="tamanhoCelula">ECTS</th>
                            <th className="tamanhoCelula">HT</th>
                            <th className="tamanhoCelula">HTP</th>
                            <th className="tamanhoCelula">HPL</th>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Desenvolvimento de Jogos</td>
                            <td className="centrar">6.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Marketing Digital</td>
                            <td className="centrar">3.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">26.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Aplicações Avançadas Multimédia</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Projeto</td>
                            <td className="centrar">15.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                    </div>
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
                        <NavLink exact="true" to="//www.di.estgv.ipv.pt/Dep/di/web/?opt=MTE4LjYxLjUyLjU1Lg==">Tecnologias e Design de Multimédia</NavLink>
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
export default TDM_Licenciatura;