import Button from "../Button";
import "./style.css";



function Banner() {
 return (
    <main id="banner">
    <h1>Escutar muda <br />
     tudo</h1>
    <p>
    Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
    </p>
    <Button texto="Baixe o Spotify Free" variante= "sucesso" />
    </main>
 );
}

export default Banner;