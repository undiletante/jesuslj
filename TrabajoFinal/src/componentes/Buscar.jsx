import { Fragment } from "react";

function Buscar() {
    return (
        <>
            <div className="buscar">
                <select name="categorias" id="categorias" title="Buscar por categoría">
                    <option>Todas las categorías</option>
                    <option value="1">Entradas</option>
                    <option value="2">Platos de fondo</option>
                    <option value="3">Guarniciones</option>
                    <option value="4">Ensaladas</option>
                    <option value="5">Postres</option>
                    <option value="6">Bebidas</option>
                </select>
                <input type="text" name="criterio_busqueda" id="criterio_busqueda" />
                <button>Buscar</button>
            </div>
        </>
    );
}

export default Buscar;