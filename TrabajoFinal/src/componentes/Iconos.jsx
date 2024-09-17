import { Fragment } from "react";

function Icono({ imagen, titulo, descripcion }) {
    imagen = "src/imagenes/inicio/" + imagen;
    return (
        <>
            <div className="icono">
                <img src={imagen} alt={titulo} />
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
        </>
    );
}

function Iconos() {
    return (
        <>
            <section className="iconos">
                <Icono imagen="alimentacion-saludable.png" titulo="Comida Saludable" descripcion="Nutrición y sabores exquisitos" />
                <Icono imagen="fresco.png" titulo="Insumos frescos" descripcion="Calidad y frescura garantizada" />
                <Icono imagen="ambientes-elegantes.png" titulo="Ambientes Elegantes" descripcion="Estilo, confort y elegancia" />
                <Icono imagen="repartidor.png" titulo="Servicio Delivery" descripcion="Rápido, seguro y confiable" />
            </section>
        </>
    );
}

export default Iconos;