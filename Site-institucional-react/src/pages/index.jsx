import React from "react";
import '../html-css-template/css/style.css'
import fundo from '../html-css-template/images/fundo.png'


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
                <img className="img_home" src={fundo} alt="" />
            </section>

            
        </>

    );
}

export default Index;