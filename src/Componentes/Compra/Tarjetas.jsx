import React from 'react'
import './Tarjetas.css'
import Dropdown_cantidad from '../Botones/Dropdown_cantidad'

const Tarjetas = (props) => {
  return (
    <div className='section_tarjeta'>
        <img src={props.imagen} alt='fto'/>
        <div className='tarjetas_descripcion'>
            <div className='cerrar'></div>
            <div className='tarjetas_title_cruz'>
              <h2>{props.titulo}</h2>
            </div>
            <div className='tarjetas_talla_tipo'>
              <p>{props.tipo}</p>
              <p>Talla: XL</p>
            </div>
            <div className='cantidad_precio'>
                <Dropdown_cantidad/>
                <h4>{props.precio}</h4>
            </div>
        </div>
    </div>
  )
}

export default Tarjetas