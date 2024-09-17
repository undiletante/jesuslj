import { Fragment } from "react";

function Producto({ nombre, precio ,imagen, imagen_alt }) {
    imagen = "src/imagenes/platos/" + imagen;
    imagen_alt = "src/imagenes/platos/" + imagen_alt;

    const accionSobreProducto = (evento) => {
        const target = evento.target;
        if (target.tagName !== 'IMG') return;    
        target.setAttribute("src", imagen_alt);
    };

    const accionFueraProducto = (evento) => {
        const target = evento.target;
        if (target.tagName !== 'IMG') return;    
        target.setAttribute("src", imagen);
    };

    return(
        <>
            <div className="producto" onMouseOver={accionSobreProducto} onMouseOut={accionFueraProducto}>
                <figure>
                    <a href="#" className="imagen">
                        <img src={imagen} alt={nombre} data-base={imagen} data-alternativo={imagen_alt} />
                    </a>
                    <figcaption>
                        <h3>
                            <a href="#">{nombre}</a>
                        </h3>
                        <p className="precio">
                            <a href="#">S/ {precio}</a>
                        </p>
                        <button type="button">Agregar al carrito</button>
                    </figcaption>
                </figure>
            </div>
        </>
    );
}

function ListaProductos() {
    return (
        <>
            <section className="productos">
                <h2>Productos más vendidos</h2>
                <div className="productos">
                    <Producto nombre="Producto 1" precio="150" imagen="plato_01.jpg" imagen_alt="plato_11.jpg" />
                    <Producto nombre="Producto 2" precio="200" imagen="plato_02.jpg" imagen_alt="plato_12.jpg" />
                    <Producto nombre="Producto 3" precio="80" imagen="plato_03.jpg" imagen_alt="plato_13.jpg" />
                    <Producto nombre="Producto 4" precio="130" imagen="plato_04.jpg" imagen_alt="plato_14.jpg" />
                    <Producto nombre="Producto 5" precio="100" imagen="plato_05.jpg" imagen_alt="plato_15.jpg" />
                    <Producto nombre="Producto 6" precio="80" imagen="plato_06.jpg" imagen_alt="plato_16.jpg" />
                    <Producto nombre="Producto 7" precio="150" imagen="plato_07.jpg" imagen_alt="plato_17.jpg" />
                    <Producto nombre="Producto 8" precio="110" imagen="plato_08.jpg" imagen_alt="plato_18.jpg" />
                </div>
            </section>
        </>
    );
}

export default ListaProductos;