import { Fragment } from "react";
import { useState } from "react";

function SlideTexto ({ titulo, texto, texto_boton, url, mostrar="false"}) {
    return (
        <>
            <div className={(mostrar == "true") ? "slide-texto mostrar" : "slide-texto"}>
                <h3>{titulo}</h3>
                <p dangerouslySetInnerHTML={{__html: texto}}></p>
                <button data-url={url}>{texto_boton}</button>
            </div>
        </>
    );
}

function SlideImagen ({ titulo, imagen, mostrar="false"}) {
    imagen = "src/imagenes/slider/" + imagen;
    return (
        <>
            <div className={(mostrar == "true") ? "slide mostrar" : "slide"}>
                <img src={imagen} alt={titulo} />
            </div>
        </>
    );
}

function Slider( {tipo="texto"} ) {
    const [imagen, setImagen] = useState(0);
    const imagenes = [
        'slider1.jpg',
        'slider2.jpg'
    ];
    const slides =  [
        {   imagen:     'slider1.jpg', 
            titulo:     "Fusión de Sabores",
            texto:      "Descubre la exquisita combinación de la cocina peruana y francesa <br /> en cada bocado.",
            texto_boton:"Ver la carta",
            url:        "carta.html",
            mostrar:    "true"
        }, {
            imagen:     'slider2.jpg', 
            titulo:     "Ambiente Elegante",
            texto:      "Disfruta de una experiencia culinaria única en un entorno sofisticado <br /> y acogedor.",
            texto_boton:"Saber más",
            url:        "",
            mostrar:    "false"
        }];

    const cantidad_slider = imagenes.length;

    const avanzar = () => {
        let img = imagen;
        img++;
        if (img >= cantidad_slider) {
            setImagen(0);
        } else {
            setImagen(img);
        }
        mostrarSlide(imagen);
    }
    
    const retroceder = () => {
        let img = imagen;
        img--;
        if (img < 0) {
            setImagen(cantidad_slider - 1);
        } else {
            setImagen(img);
        }
        mostrarSlide(imagen);
    }
    
    const automatico = () => {
        avanzar();
        setTimeout('automatico()', 5000);
    }

    const mostrarSlide = (numero) => {
        const slides_img = document.querySelectorAll("#slider-img .slide");
        const slides_texto = document.querySelectorAll("#slider-texto .slide-texto");
    
        slides_img.forEach( function(item, indice, array) {
            let activo = item.classList.contains('mostrar');
            if (activo) 
                item.classList.remove('mostrar');
        });
        slides_texto.forEach( function(item, indice, array) {
            let activo = item.classList.contains('mostrar');
            if (activo) 
                item.classList.remove('mostrar');
        });
    
        slides_img[numero].classList.toggle('mostrar');
        slides_texto[numero].classList.toggle('mostrar');
    }

    return (
        <>
            {(tipo == "texto") && 
                <div id="slider-texto">
                    <div id="slider-boton-izquierda" className="slider-boton" onClick={retroceder}>&#10094;</div>
                    <div id="slider-boton-derecha" className="slider-boton" onClick={avanzar}>&#10095;</div>
                    
                    <SlideTexto titulo="Fusión de Sabores" texto="Descubre la exquisita combinación de la cocina peruana y francesa <br /> en cada bocado." texto_boton="Ver la carta" url="carta.html" mostrar="true" />
                    <SlideTexto titulo="Ambiente Elegante" texto="Disfruta de una experiencia culinaria única en un entorno sofisticado <br /> y acogedor." texto_boton="Saber más" url=""  />
                </div>
            }
            {(tipo == "imagen") &&
                <div id="slider-img">
                    <SlideImagen imagen="slider1.jpg" titulo="Fusión de Sabores" mostrar="true" />
                    <SlideImagen imagen="slider2.jpg" titulo="Ambiente Elegante" />
                </div>
            } 
        </>
    );
}

export default Slider;