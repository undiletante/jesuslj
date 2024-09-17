import MenuCategorias from "./MenuCategorias";
import Buscar from "./Buscar";
import Slider from "./Slider";
import Carrito from "./Carrito";

function Logo() {
    return(
    <>
        <div className="logo">
            <a href="index.html">
                <img src="src/imagenes/logo-blanco.png" alt="La Belle Époque" />
            </a>
        </div>
    </>
    );    
}

function Whatsapp() {
    return(
        <>
            <div className="whatsapp">
                <a href="" title="whatsapp" target="_blank">
                    <img src="src/imagenes/whatsapp.png" alt="Whatsapp" />
                    <span>Escríbanos al </span><br />
                    (+51) 999 999 999
                </a>
            </div>
        </>
    );  
}

function BarraSuperior() {
    return(
        <>
            <div className="barra_superior">
                <Whatsapp />
                <Logo />
                <Carrito tipo="cabecera" />
            </div>
        </>
    );    
}

function BarraInferior() {
    return(
        <>
            <div className="barra_inferior">
                <MenuCategorias />
                <Buscar />
            </div>
        </>
    );    
}

function Cabecera() {
    return (
            <header>
                <Slider tipo="imagen" />
                <BarraSuperior />
                <BarraInferior />
                <Slider />
            </header>
    );
}

export default Cabecera;