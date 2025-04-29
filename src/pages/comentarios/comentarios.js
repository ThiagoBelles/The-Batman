import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/index"

import FullStar from "../../assets/star-full.png"
import HalfStar from "../../assets/star-half.png"
import EmptyStar from "../../assets/star-empty.png"

import EmptyProfile from "../../assets/empty_avatar.png"
import Adauto from "../../assets/adalto.jpg"
import Fabio from "../../assets/fabio-ribeiro.jpg"
import Jaime from "../../assets/jaime.jpg"
import Pedro from "../../assets/pedro-henrique.webp"
import Rohadora from "../../assets/rohadora.jpg"
import Paulinha from "../../assets/paulinha.jpg"
import Michele from "../../assets/michele.jpg"
import Dread from "../../assets/dread.jpg"
import Romulo from "../../assets/romulo.png"
import Andrei from "../../assets/andrei.jpg"
import Henrique from "../../assets/henrique.webp"
import Jheferson from "../../assets/jheferson.png"
import Marcelo from "../../assets/marcelo.jpg"
import Filipe from "../../assets/filipe.jpg"
import Ricardo from "../../assets/ricardo.webp"
import Ray from "../../assets/ray.webp"



function Comentarios(){

    return (
        <div>
            <Header />
            <div className="main">
                <div className="main-containers">

                </div>
                <div className="coments-container">
                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Jaime}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Jaime Filho</div>
                                <div className="envio">Enviada em 06 de Março de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">5,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Robert Pattinson encarna um Batman diferente de qualquer Batman anterior. Sombrio, violento e sequelado até como Bruce Wayne. Um filme longo, mas nada cansativo e a proposta de apresentar as habilidades investigativas do personagem muito bem executadas.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={EmptyProfile}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Marcelo Marques</div>
                                <div className="envio">Enviada em 29 de Maio de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">5,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Eu Gostei muito desse filme, excelente, esse filme prende a atenção, tem uma atmosfera dark, sombria que me agradou muito, trilha sonora muito boa, belas cenas de ação, enfim esse para mim foi um excelente filme, apesar de ser longo não achei um filme cansativo. Resumindo: Gostei muito.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Adauto}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Adauto Jose Mendes</div>
                                <div className="envio">Enviada em 11 de março de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">4,5</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={HalfStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Filme me surpreendeu, atmosfera sombria, um vilão genial. Filme tem muita ação e os personagens são muito reais.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Henrique}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Henrique N.</div>
                                <div className="envio">Enviada em 3 de março de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">4,5</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={HalfStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Trilha sonora excelente! Temática excelente!
                            Porradaria excelente também. Robert representou o morcegão!</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={EmptyProfile}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Everson Cleber</div>
                                <div className="envio">Enviada em 23 de Janeiro de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">4,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={EmptyStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Muito bom, apesar de longo demais. Mostrou um herói mais humano e vulnerável. Gostei da reflexão de que a vingança não altera o nosso passado e de que a corrupção é uma chaga que atinge todas as esferas de poder.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Ricardo}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Ricardo Santana</div>
                                <div className="envio">Enviada em 17 de Maio de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">5,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Eu esperava menos do filme, achei muito bom! realmente me surpreendeu. A direção de Matt Reeves é magistral, criando uma atmosfera sombria e opressiva que reflete a decadência de Gotham City. A cinematografia de Greig Fraser é impressionante, com um uso habilidoso da iluminação e sombras para criar um ambiente visualmente rico e detalhado. A trilha sonora de Michael Giacchino complementa perfeitamente o tom sombrio do filme, adicionando tensão e profundidade emocional às cenas.</span>
                        </div>
                    </div>



                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Andrei}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Andrei Andrade</div>
                                <div className="envio">Enviada em 19 de abril de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">5,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Simplesmente um filmaço !!! quem critica e fala que é ruim nem deve ser gente...</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Fabio}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Fábio Ribeiro</div>
                                <div className="envio">Enviada em 18 de Março de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">4,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={EmptyStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">As cenas foram muito bem elaboradas. A perseguição ao "pinguin" foi a cena de destaque especial. Além disso, a caracterização das emoções deste Batman também ficou bacana.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Pedro}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Pedro Henrique Gil-Galad</div>
                                <div className="envio">Enviada em 15 de Abril de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">3,5</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={HalfStar} />
                            <img className="stars" src={EmptyStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Ok. Eu esperava mais do filme, contudo a atuação do Pattison foi muito boa, em conjunto com os demais personagens. Discordo da crítica profissional quanto a atuação do Charada que me pareceu muito boa também.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={EmptyProfile}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Alexy</div>
                                <div className="envio">Enviada em 24 de Junho de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">3,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={EmptyStar} />
                            <img className="stars" src={EmptyStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Filme mto bem feito, mas erraram total no ator escolhido para o Batman, um cara sem presença de personalidade nenhuma, todo magrelo, e mais parecido com um emo com aquela franja na cara, nada contra, mas nao ornou com o Batman…</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Ray}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Ray Silva</div>
                                <div className="envio">Enviada em 22 de Dezembro de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">5,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Simplesmente sensacional! Robert Pattinson manda bem como um Batman sombrio e mais detetive, do jeito que a galera queria. Gotham tá super dark, a vibe noir é top, e o Charada é um vilão de respeito. A trilha sonora é pesada e combina demais com o clima do filme. É longo, mas prende do começo ao fim.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Marcelo}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Marcelo Lico</div>
                                <div className="envio">Enviada em 5 de Junho de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">4,5</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={HalfStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Assisti o Filme The Batman hoje.
                            Confesso que não estava muito interessado, apesar de ser fã do personagem desde minha adolescência. Robert Pattinson é ótimo ator, como pode ser visto no filme “O farol”. Mas, particularmente pensava que o Batman não poderia ser interpretado pelo mesmo protagonista da série Crepúsculo. Me enganei. Trata-se de um ótimo filme. Fotografia, atores, interpretações e ritmo muito bons e, que lembram as histórias dos gibis do “detetive” dos anos 80 e 90. O roteiro é cativante, um verdadeiro quebra cabeça com desfecho angustiante. Definitivamente, vale a pena assistir.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Jheferson}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Jhefer$on</div>
                                <div className="envio">Enviada em 17 de Abril de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">4,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={EmptyStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">O ator Robert Pattinson realmente entrou no personagem e ficou fantástico.

O filme é muito bom, as atuações são boas e a direção também, Tem um estilo sombrio e pouco lento mostrando todo o caminho das pistas mostradas pelo charada.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Rohadora}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Rohadora</div>
                                <div className="envio">Enviada em 23 de Agosto de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">4,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={EmptyStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Muito bem dirigido, com ótima trilha sonora e atuações. Mas achei no terceiro ato um pouco arrastado. Poderia ser mais curto.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Filipe}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Filipe Facion</div>
                                <div className="envio">Enviada em 26 de Setembro de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">3,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={EmptyStar} />
                            <img className="stars" src={EmptyStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">É muito bom ver o Batman no começo, aprendendo a ser o Batman e um Batman mais detetive é bem legal. Um filme sombrio, com personagens bem interessantes.</span>
                        </div>
                    </div>


                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Paulinha}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Paulinha Cruz</div>
                                <div className="envio">Enviada em 8 de Maio de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">4,5</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={HalfStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Com certeza um dos melhores filmes do Batman e um dos melhores filmes de origem de super heróis que tivemos, Matt Reeves conseguiu colocar uma essência do Batman que não vemos nos outros filmes do homem morcego que e sua inteligência e sua habilidade em investigação isso trouxe ao filme um ar de suspense a mais para o filme que para mim deixou ainda melhor a experiência de assistir The Batman, alem de ter Robert Pattinson fazendo um ótimo trabalho de atuação mostrando como e difícil ser Batman e Bruce Wayne e como um pode ajudar o outro a proteger Gotham!</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Michele}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Michele A.</div>
                                <div className="envio">Enviada em 26 de Março de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">5,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Filme emocionante do início ao fim, com uma cena de perseguição de tirar o fôlego. A atuação do Robert foi muito boa, realmente passou um ar sombrio. Lembrando que a narrativa acontece no início da transformação do Batman, sem carros e aviões cheio de tecnologia, mas ficou bacana assim. Ele apanhou muito o que deixa o personagem mais "real", mas bateu demais. A interpretação do charada também foi sensacional. Espero que tenha continuação.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Dread}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Wallace Ricardo</div>
                                <div className="envio">Enviada em 13 de Setembro de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">4,5</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={HalfStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">O Batman Definitivo!! Direção e atuação impecáveis por parte de Matt Reeves e de todo o elenco, vilões marcantes, cenas de ação bem coreografadas, uma linda fotografia e uma narrativa que te prende durante as 2h55 do filme. Um dos melhores filmes de heróis já feitos, junto com O Cavaleiro das Trevas de Nolan.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={EmptyProfile}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Emanuel Ramos</div>
                                <div className="envio">Enviada em 16 de Abril de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">4,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={EmptyStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">Filme tem uma atmosfera muito sinistra, os atores são muito bons, maquiagem, figurino muito bons, cenas de ação muito bem feitas, mas não precisava ter quase 3 horas, acabou ficando um pouco cansativo em alguns momentos e eu esperava um final mais grandioso, apesar disso vale muito a pena.</span>
                        </div>
                    </div>

                    <div className="coment-cards">
                        <div className="perfi-box">
                            <div className="foto-perfil">
                                <img className="foto" src={Romulo}/>
                            </div>
                            <div className="nome-box">
                                <div className="nome">Rômulo S.</div>
                                <div className="envio">Enviada em 06 de Fevereiro de 2024</div>
                            </div>
                            
                        </div>
                        <div className="stars-box">
                            <span className="nota">5,0</span>
                            <div className="star-line">
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />
                            <img className="stars" src={FullStar} />

                            </div>
                        </div>
                        <div className="coment-box">
                            <span className="coment">E o grande acerto do diretor Matt Reeves com seu The Batman é justamente escancarar essa ambiguidade existente no vigilante de Gotham para trazer uma das versões mais impactantes e cruas de um ícone das HQs.</span>
                        </div>
                    </div>

                    
                </div>

                

            </div>
            <Footer />
        </div>
    )
        
    
}
export default Comentarios