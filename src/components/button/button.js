import React from "react";
import './style.css'

function Button({ active, name, attClick}){

    
    return (
        <div className='container'>
        <button onClick={()=> attClick(30)} className={active ? 'button' : 'disabledButton'}>
            {active ? name : 'Desabilitado'}
        </button>
        <span>Seu arquivo está a salvo conosco!</span>
        </div>
    )
}

export default Button 