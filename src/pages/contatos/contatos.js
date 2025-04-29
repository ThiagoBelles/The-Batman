import React from "react"
import "./styles.css"
import Header from "../../components/header/header.js"
import IconeEmail from "../../assets/icons8-gmail-48.png"
import Iconewpp from "../../assets/whatsapp.png"
import IconFace from "../../assets/facebook.png"
import IconTwitter from "../../assets/twitter.png"
import IconInsta from "../../assets/instagram.png"
import Footer from "../../components/footer/index.js"



function Contatos(){

    return (
        <div>
            <Header />
            <div className="main-container">
                <div id="box1">
                    <span id="title">Contate-nos</span>
                    <span id="intro" >Deixe sua mensagem ou acesse um<br/>dos nossos canais de atendimento.</span>
                </div>
                <div id="box2">
                    <div id="formBox">
                        <form id="form" action="./contatos">
                            <label for="nome" className="etiqueta">Nome Completo</label>
                            <input type="text" name="nome"/>

                            <label for="email" className="etiqueta">E-mail</label>
                            <input type="email" name="email"/>

                            <label for="text" className="etiqueta">Mensagem</label>
                            <textarea type="textarea" name="text"></textarea>
                            <button className="button-enviar">Enviar</button>
                        </form>
                    </div>
                    <div className="box3">
                        <span className="title2">Canais de Atendimento</span>
                        <div className="email">
                            <img className="icon" src={IconeEmail} />
                            <span className="iconName">E-mail </span>
                        </div>
                            <span className="info">belles-dev@gmail.com</span>
                        <div className="email">
                            <img className="icon" src={Iconewpp} />
                            <span className="iconName">Telefone </span>
                        </div>
                        <span className="info">+55 21 98360-6403</span>  
                        <div className="canais">
                            <img className="icon" src={IconInsta} />
                            <img className="icon" src={IconTwitter} />
                            <img className="icon" src={IconFace} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contatos