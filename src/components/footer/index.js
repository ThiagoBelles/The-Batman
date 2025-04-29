import React from "react";
import "./styles.css"
import Logo from "../../assets/logo2.jpg"

function Footer(){
    return (
        <footer>
            <img className="logo" src={Logo} />
            <span>
                Todos os direitos reservados.
            </span>
            <span> 
                Desenvolvido por &ensp; ©Thiago Belles
            </span>
        </footer>
    )
}

export default Footer