import React from "react";
import '../html-css-template/css/style.css';
import fundo from '../html-css-template/images/fundo.png';
import logo from '../html-css-template/images/autg.png';
import beatriz from '../html-css-template/images/beatriz.png';
import elizeu from '../html-css-template/images/elizeu.png';
import guilherme from '../html-css-template/images/guilherme.png';
import jonas from '../html-css-template/images/jonas.png';
import mateus from '../html-css-template/images/mateus.png';
import vitoria from '../html-css-template/images/vitoria.png';
import fundo_sobre from '../html-css-template/images/fundo_sobre.png';
import fundo_servicos from '../html-css-template/images/fundo_servicos.png'
import automacao from '../html-css-template/images/automacao.png'
import fundo_simulacao from '../html-css-template/images/fundo_simulacao.png'
import predio from '../html-css-template/images/predio.png'

function Index() {

    return (

        <>

            <div className="container-index">

                <nav className="navbar">
                    <ul className="menu_principal">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li>Serviços</li>
                        <li>Simulação</li>
                        <li className="btn_contato">Contato</li>
                    </ul>
                </nav>

                <section style={{
                    backgroundImage: `url(${fundo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'

                }} id="home">

                    <div className="texto_inicial">
                        <img src={logo} alt="" />
                        <p>
                            <p className="institucional">Institucional</p>
                            Empresa focada em soluções tecnologica para o seu negócio  garantindo a economia de energia da sua empresa!
                        </p>
                        <button className="btn_incial">Entre em Contato</button>

                    </div>


                </section>

                <section style={{
                    backgroundImage: `url(${fundo_sobre})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 95%'

                }} id="sobre">

                    <h1>Quem somos</h1>
                    <div className="linha_centro"></div>

                    <p><b>AUTG</b> é uma empresa que presta serviço para prédios comerciais, trazemos <b>automação</b> e <b>tecnologia</b> para ajudar na <b>gestão</b> do seu negócio</p>

                    <div className="container_Integrantes">

                        <img src={beatriz} alt="" />
                        <img src={elizeu} alt="" />
                        <img src={guilherme} alt="" />
                        <img src={jonas} alt="" />
                        <img src={mateus} alt="" />
                        <img src={vitoria} alt="" />

                    </div>

                </section>

                <section style={{
                    backgroundImage: `url(${fundo_servicos})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 95%'

                }} id="servicos">

                    <h1 className="titulo_servicos">Nosso Serviços</h1>
                    <div className="linha_centro"></div>

                    <div className="nossos_servicos">

                        <img src={automacao} alt="" />

                        <div className="servico">Automação Eletrica</div>

                        <p>Conquiste o controle total da sua empresa na palma da sua mão</p>

                    </div>

                </section>

                <section style={{
                    backgroundImage: `url(${fundo_simulacao})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 95%'

                }} id="simulacao">

                    <div className="box_simulacao">

                        <h1>Vamos fazer uma simulação de preço?</h1>
                        <div className="linha"></div>

                        <p>Cliqui no mais para adicionar um andar e simular sua economia.</p>

                        <h2>Economia de: R$2.000,00</h2>

                    </div>

                    <div className="box_predio">

                        <img src={predio} alt="" />

                    </div>

                </section>


            </div>

        </>

    );
}

export default Index;