import React from "react";
import '../html-css-template/css/style.css'
import fundo from '../html-css-template/images/fundo.png'
import logo from '../html-css-template/images/autg.png'


function Index() {

    return (

        <>

            <nav className="navbar">
                <ul className="menu_principal">
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre</a></li>
                    <li>Serviços</li>
                    <li>Simulação</li>
                    <li className="btn_contato">Contato</li>
                </ul>
            </nav>

            <section id="home">


                <div className="texto_inicial">
                    <img src={logo} alt="" />
                    <p>
                        <p className="institucional">Institucional</p>
                        Empresa focada em soluções tecnologica para o seu negócio  garantindo a economia de energia da sua empresa!
                    </p>
                    <button className="btn_incial">Entre em Contato</button>

                </div>

                <img className="img_home" src={fundo} alt="" />

            </section>


        </>

    );
}

export default Index;