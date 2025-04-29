import React, { useState } from "react";
import Modal from "react-modal"
import "./styles.css"
import Header from "../../components/header/header";
import Footer from "../../components/footer";


import Imagem01 from "../../assets/imagem01.webp"
import Imagem02 from "../../assets/imagem02.jpg"
import Imagem03 from "../../assets/imagem03.png"
import Imagem04 from "../../assets/imagem04.webp"
import Imagem05 from "../../assets/imagem05.jpeg"
import Imagem06 from "../../assets/imagem06.jpg"
import Imagem07 from "../../assets/imagem07.jpg"
import Imagem08 from "../../assets/imagem08.jpg"
import Imagem09 from "../../assets/imagem09.webp"
import Imagem10 from "../../assets/imagem10.jpg"
import Imagem11 from "../../assets/imagem11.webp"
import Imagem12 from "../../assets/imagem12.webp"



function Fotos(){
    const [modalOpen, setModalOpen] = useState(false);
    const [photo, setPhoto] = useState("")

    const fotos = document.querySelectorAll('.photo')

    const openModal = (imagem) => {
        if(window.innerWidth < 630){return};
        setPhoto(imagem);
        setModalOpen(true)
    }
    
    const closeModal = () => {
        setModalOpen(false)
        setPhoto("")
    }

    return (
        <div>
            <Header />
            <div id="main-container">
                
                <span className="title">Galeria</span>
                <div className="photo-container">
                    <div className="photo" onClick={()=> openModal(Imagem01)} >
                        <img className="fotos" src={Imagem01}/>
                    </div>
                    <div className="photo" id='photo' onClick={()=> openModal(Imagem02)} >
                        <img className="fotos"  src={Imagem02}/>
                    </div>
                    <div className="photo" onClick={()=> openModal(Imagem03)} >
                        <img  className="fotos" src={Imagem03}/>
                    </div>
                    <div className="photo" onClick={()=> openModal(Imagem04)} >
                        <img  className="fotos" src={Imagem04}/>
                    </div>
                    <div className="photo" onClick={()=> openModal(Imagem05)} >
                        <img  className="fotos" src={Imagem05}/>
                    </div>
                    <div className="photo" onClick={()=> openModal(Imagem06)} >
                        <img  className="fotos" src={Imagem06}/>
                    </div>
                    <div className="photo" onClick={()=> openModal(Imagem07)} >
                        <img  className="fotos" src={Imagem07}/>
                    </div>
                    <div className="photo" onClick={()=> openModal(Imagem08)} >
                        <img  className="fotos" src={Imagem08}/>
                    </div>
                    <div className="photo" onClick={()=> openModal(Imagem09)} >
                        <img  className="fotos" src={Imagem09}/>
                    </div>
                    <div className="photo" onClick={()=> openModal(Imagem10)} >
                        <img  className="fotos" src={Imagem10}/>
                    </div>
                    <div className="photo" onClick={()=> openModal(Imagem11)} >
                        <img  className="fotos" src={Imagem11}/>
                    </div>
                    <div className="photo" onClick={()=> openModal(Imagem12)} >
                        <img  className="fotos" src={Imagem12}/>
                    </div>

                </div>
                <Modal isOpen={modalOpen} onRequestClose={closeModal} className='full-screen-modal' overlayClassName="overlay">
                    <button onClick={closeModal} className="close-button">X</button>
                    <img onClick={closeModal} src={photo} alt='Imagem ampliada' className='full-screen-image'/>

                </Modal>
            </div>
            <Footer />
        </div>
    )
}

export default Fotos