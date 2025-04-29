import React, { useState } from "react";
import './style.css'
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo2.jpg"
import Banner from "../../assets/batman_45.jpg"

function Header(){

    const [corDaLetra, setCorDaLetra] = useState ('orange')
    const teste = document.getElementById('teste')

    

    return (
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <li>
                    <NavLink to='/' className='navLink' style={({isActive})=> { return { color: isActive ? '#D21617' : 'aliceblue'}
                    }}>Home</NavLink>
                    </li>

                    <li>
                    <NavLink to='/contatos' className='navLink' style={({isActive})=> { return { color: isActive ? '#D21617' : 'aliceblue'}
                    }}>Contatos</NavLink>
                    </li>

                    <li>
                    <NavLink to='/fotos' id='teste'  className='navLink'style={({isActive})=> { return { color: isActive ? '#D21617' : 'aliceblue'}
                    }}>Fotos</NavLink>
                    </li>

                    <li>
                    <NavLink to='/comentarios' className='navLink' style={({isActive})=> { return { color: isActive ? '#D21617' : 'aliceblue'}
                    }}>Comentários</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header