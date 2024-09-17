import { useState, useEffect, useRef } from "react";

function ProductoLista({ id, imagen, nombre, cantidad, precio}) {
    const [cantidadProductos, setCantidadProductos] = useState(cantidad);

    const eliminarProducto = (e) => {
        const elementoLista = e.target.parentNode.parentNode.parentNode;
        while (elementoLista.hasChildNodes()){
            elementoLista.removeChild(elementoLista.lastChild);
        }
        elementoLista.parentNode.removeChild(elementoLista);
        // ¿destruir componente?
    }

    const aumentarProducto = (e) => {
        setCantidadProductos( Number(cantidadProductos) + 1 );
    }

    const restarProducto = (e) => {
        if (cantidadProductos - 1 === 0) 
            eliminarProducto(e);
        else 
            setCantidadProductos( Number(cantidadProductos) - 1 );
    }

    useEffect(() => {
        
    }, [cantidadProductos]);


    return (
        <li data-id={id}>
            <img src={"src/imagenes/platos/" + imagen} alt={nombre} className="producto" />
            <div className="detalles">
                <div className="nombre">{nombre}</div>
                <div className="cantidad">
                    <button onClick={aumentarProducto}>+</button>
                    <button onClick={restarProducto}>-</button>
                    <button onClick={eliminarProducto}>🗑</button>
                    <input type="number" className="cantidad" value={cantidadProductos} />
                </div>
                <div className="precio">S/{precio}</div>
            </div>
        </li>
    );
}

function Carrito({ tipo }) {
    const [panel, setPanel] = useState(0);
    const listaRef = useRef();


    const clickCabecera = (e) =>  {
        e.preventDefault();
        setPanel(!panel);
    }

    const cerrarPanel = () => {
        setPanel(!panel);
    }

    useEffect(() => {
        document.getElementById('lista-carrito').classList.toggle('activo');
    }, [panel]);

    return (
        <>
            {(tipo == "lista") && 
                <div id="lista-carrito">
                    <div className="cerrar">
                        <span onClick={cerrarPanel}>&times;</span>
                    </div>
                    <h3>Carrito de compras</h3>
                    <ul ref={listaRef}>
                        <ProductoLista id="1" imagen="plato_01.jpg" nombre="Producto 1" cantidad="2" precio="150.00" />
                        <ProductoLista id="2" imagen="plato_02.jpg" nombre="Producto 2" cantidad="1" precio="200.00" />                        
                    </ul>
                    <div className="total">
                        S/ 100.00
                    </div>
                </div>                
            }
            {(tipo == "cabecera") &&
                <div className="carrito cabecera">
                    <a className="" href="" title="Carrito" onClick={clickCabecera}>
                        <img src="src/imagenes/carrito.png" alt="Carrito" />
                        <span>Realizar pedido</span><br />
                        <span className="cantidad">2</span> Productos
                    </a>
                </div>
            } 
        </>
    );
}

export default Carrito;