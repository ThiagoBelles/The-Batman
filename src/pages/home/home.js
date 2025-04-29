import React from "react"
import Header from "../../components/header/header"
import '../home/styles.css'
import Trailer from "../../assets/trailer.mp4"
import Cards from "../../components/cards"
import Footer from "../../components/footer"

function Home(){
    return (
        <div>
            <Header/>
            <div id='banner'></div>
            <div className="trailer-container">
                <div className="content">
                    <video controls className="trailer" >
                        <source src={Trailer}/>
                        Seu navegador não tem suporte para vídeo!
                    </video>
                    <div className="sinopse">
                        <p className="description">
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.

                        </p>
                        <button className="button">Comprar Ingresso</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer />
            
            
        </div>
    )

}

export default Home