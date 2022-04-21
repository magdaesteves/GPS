import React from "react";
import '../App.css';
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

class EI_Licenciatura extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <h1 className="titulo">Engenharia Informática</h1>
                <h2 className="titulo">(Licenciatura)</h2>
                <br></br>
                <div className="conteudoHome">
                    <div className="informacao">
                        <h2 className="titulo">Porquê EI?</h2>
                        <p>Se tens interesse pela programação, pelos computadores e tens curiosidade em saber como eles funcionam, então Engenharia Informática é o curso. É um curso bastante prático em que podes logo "meter as mãos na massa".</p>
                        <br></br>
                        <h3 className="titulo">EI</h3>
                        <p>Inclui também algumas cadeiras obrigatórias ditas "de bases de engenharia" (como matemáticas e físicas). É a área de engenharia que se ocupa dos temas relacionados com TI (Tecnologias de Informação) e SI (Sistemas de Informação).</p>

                    </div>
                    <br></br>
                    <div className="videos">
                        <img className="videos" src="/ei.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                        <img className="videos" src="/ei2.png" alt="Devia estar aqui uma imagem" width={"362px"}></img>
                        <img src="/ei3.jpg" alt="Devia estar aqui uma imagem" width={"362px"}></img>
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
                            <td className="tamanhoTabela">Análise Matemática</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">39.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Álgebra</td>
                            <td className="centrar">4.5</td>
                            <td className="centrar">13.0</td>
                            <td className="centrar">39.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Sistemas Digitais</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Algoritmos e Programação</td>
                            <td className="centrar">8.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">26.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Tecnologias dos Computadores</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">19.5</td>
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
                            <td className="tamanhoTabela">Arquiteturas de Computador</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Matemática Discreta</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">26.0</td>
                            <td className="centrar">32.5</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Matemática Aplicada</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">26.0</td>
                            <td className="centrar">32.5</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Redes de Comunicação I</td>
                            <td className="centrar">6.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Estruturas de Dados</td>
                            <td className="centrar">8.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">26.0</td>
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
                            <td className="tamanhoTabela">Programação Orientada aos Objetos</td>
                            <td className="centrar">6.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">26.0</td>
                            <td className="centrar">26.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Análise de Sistemas</td>
                            <td className="centrar">6.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">26.0</td>
                            <td className="centrar">26.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Sistemas Operativos</td>
                            <td className="centrar">5.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Aplicações para a Internet I</td>
                            <td className="centrar">6.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Usabilidade</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">26.0</td>
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
                            <td className="tamanhoTabela">Engenharia de Software I</td>
                            <td className="centrar">4.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">26.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Bases de Dados I</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">26.0</td>
                            <td className="centrar">26.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Aplicações para a Internet II</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Redes de Comunicação II</td>
                            <td className="centrar">4.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">26.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Programação para Dispositivos Móveis</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Projeto Integrado</td>
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
                            <td className="tamanhoTabela">Segurança Informática</td>
                            <td className="centrar">4.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">26.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Redes de Comunicação III</td>
                            <td className="centrar">4.5</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">26.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Complementos de Sistemas Operativos</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Base de Dados II</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Sistemas Embebidos</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Sistemas Distibuídos</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">39.0</td>
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
                            <td className="tamanhoTabela">Inteligência Artificial</td>
                            <td className="centrar">5.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">26.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Engenharia de Software II</td>
                            <td className="centrar">6.0</td>
                            <td className="centrar">19.5</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">52.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Empreendedorismo e Gestão de Empresas</td>
                            <td className="centrar">3.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">26.0</td>
                            <td className="centrar">0.0</td>
                        </tr>
                        <tr>
                            <td className="tamanhoTabela">Projeto</td>
                            <td className="centrar">16.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">0.0</td>
                            <td className="centrar">0.0</td>
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
                    <div className="infoEscola">
                        <h3 className="titulo">Para mais informações</h3>
                        <NavLink exact="true" to="//www.di.estgv.ipv.pt/Dep/di/web/?opt=MTE4LjYxLjUyLjU2Lg==">Engenharia Informática</NavLink>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="formulario">
                        <form>
                            <label className="titulo">Nome: <br></br> <input type="text" name="name" placeholder="Inserir nome" /></label>
                            <br></br>
                            <label className="titulo">Email: <br></br> <input type="text" name="email" placeholder="Inserir email" /></label>
                            <br></br>
                            <label className="titulo">Comentário: <br></br> <input type="text" name="comentario" placeholder="Inserir comentário" /></label>
                            <br></br>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <br></br>
                </div>
            </div>

        )
    }
}
export default EI_Licenciatura;