import { Fragment } from "react";

function MenuCategorias() {

    const ajustesDisenoCategoria = () => {
        const categorias = document.querySelector("div.categorias");
        const listaCategorias = document.querySelector("ul.categorias");
        listaCategorias.style.width = categorias.clientWidth + "px";
    }
    //ajustesDisenoCategoria();

    const mostrarContraerCategoria = (evento) => {
        evento.preventDefault();
        const listaCategorias = document.querySelector("ul.categorias");
        listaCategorias.classList.toggle('mostrar');
        let activo = listaCategorias.classList.contains('mostrar');
        const flecha = document.querySelector("span.flecha");
        if (activo) {
            flecha.innerHTML = "&#9650;";
        } else {
            flecha.innerHTML = "&#9660;";
        }
    }

    return (
        <>
            <div className="categorias">
                <div className="titulo">
                    <a href="" className="menu_categoria" onClick={mostrarContraerCategoria}>Comprar por categoría
                        <span className="flecha"> &#9660;</span>
                    </a>
                </div>
                <ul className="categorias">
                    <li><a href="">Entradas</a></li>
                    <li><a href="">Platos de fondo</a></li>
                    <li><a href="">Guarniciones</a></li>
                    <li><a href="">Ensaladas</a></li>
                    <li><a href="">Postres</a></li>
                    <li><a href="">Bebidas</a></li>
                </ul>
            </div>
        </>
    );
}

export default MenuCategorias;