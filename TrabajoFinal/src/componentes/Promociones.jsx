import { Fragment } from "react";

function Promociones() {
    return (
        <>
            <section className="promos">
                <div className="banners">
                    <div className="banner1">
                        <img src="src/imagenes/inicio/promo-01.jpg" alt="" />
                    </div>
                    <div className="banner2">
                        <p>ENVÍO GRATIS en pedidos mayores a S/50</p>
                    </div>
                    <div className="banner3">
                        <img src="src/imagenes/inicio/promo-03.jpg" alt="" />
                    </div>
                    <div className="banner4">
                        <img src="src/imagenes/inicio/promo-04.jpg" alt="" />
                    </div>
                </div>    
            </section>            
        </>
    );
}

export default Promociones;