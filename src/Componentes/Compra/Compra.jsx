import React from 'react'
import './Compra.css'
import Tarjetas from './Tarjetas'
import { products } from "../../products";

const Compra = () => {
  return (
    <section id='compra'>
        <div className='contenedor_carrito_compra'>
          <div className='compra_descripcion'>
              <h1>Tus productos</h1>
              <div className='compras_tarjetas'>
              {products.map((product) => (
                <Tarjetas 
                 imagen={product.foto}
                 titulo={product.name} 
                 descripcion={product.tipo} 
                 precio={product.price} />))}
              </div>
            </div>
            <div className='compra_detalles_pago'>
                <h2>Detalles de pago</h2>
                <div className='prueba'></div>
            </div>
        </div>
    </section>
  )
}

export default Compra