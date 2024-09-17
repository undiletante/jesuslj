import { Fragment } from "react";

function Contacto() {
    return(
        <>
            <div className="seccion contacto">
                <h3>Contáctenos</h3>
                <p>Llámenos al <br /> (+51) 999 999 999</p>
                <p>
                    Horario de atención<br />
                    Martes - Sábado 8am a 9pm<br />
                    Domingo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am a 10pm
                </p>
            </div>
        </>
    )
}

function MenuPie() {
    return(
        <>
            <div className="seccion menu">
                <h3>Información</h3>
                    <ul>
                        <li><a href="">La carta</a></li>
                        <li><a href="">Contactenos</a></li>
                        <li><a href="">Envíos y devoluciones</a></li>
                        <li><a href="">Aviso de privacidad</a></li>
                        <li><a href="">Mapa del sitio</a></li>
                    </ul>
            </div>
        </>
    )
}

function Ubicacion() {
    return (
        <>
            <div className="seccion ubicacion">
                <h3>¿Dónde estamos?</h3>
                <p>Encuéntranos en: <br />
                    Jr. Bolivia 109, <br />
                    Torre Centro Cívico, <br />
                    Lima, 01</p>
            </div>
        </>
    );
}

function Social() {
    return (
        <>
            <div className="seccion social">
                <h3>Redes sociales</h3>
                <ul>
                    <li>
                        <a href=""><img src="src/imagenes/instagram.png" alt="Instagram" /> @la_belle_epoque</a>
                    </li>
                    <li>
                        <a href=""><img src="src/imagenes/facebook.png" alt="Facebook" /> /La Belle Époque</a>
                    </li>
                    <li>
                        <a href=""><img src="src/imagenes/whatsapp.png" alt="Whatsapp" /> (+51) 999 999 999</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

function Pie() {
    return(
        <>
            <footer>
                <div className="secciones">
                    <Contacto />
                    <MenuPie />
                    <Ubicacion />
                    <Social />
                </div>
                <p className="derechos">Derechos Reservados. Perú - 2024</p>
            </footer>
        </>
    );
}

export default Pie;
