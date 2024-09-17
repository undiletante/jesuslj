import { Fragment } from "react";
import Iconos from './Iconos';
import Promociones from './Promociones';
import ListaProductos from './ListaProductos';


function Inicio() {
    return (
        <>
            <main className="inicio">
                <Iconos />
                <Promociones />
                <ListaProductos />
            </main>
        </>
    );
}

export default Inicio;