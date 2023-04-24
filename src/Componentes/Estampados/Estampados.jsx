import React, { useState } from 'react'
import './Estampados.css'
import { useParams } from 'react-router-dom'
import {estampados} from '../../estampados'
import blanco from '../../Assets/Camisetas_Color/Camiseta_blanca_2.png'
import negro from '../../Assets/Camisetas_Color/Camiseta_Negra.png'
import roja from '../../Assets/Camisetas_Color/Camiseta_Roja.png'
import verde from '../../Assets/Camisetas_Color/Camiseta_Verde_oscuro.png'
import gris from '../../Assets/Camisetas_Color/Camiseta_Gris.png'



const Estampados = () => {

  let { id } =  useParams()

  let myProduct = estampados.find(estampado => estampado.id === id)

  const [camiseta, setCamiseta] = useState('blanco');

  const imagenes = {
    blanco: blanco,
    negro: negro,
    rojo: roja,
    verde: verde,
    gris: gris,
  };

  function color(value) {
    setCamiseta(value)
  }

  return (
    <section id='section_estamp'>
      <div className='pruebas_s'>
        <div className='estados'>
          <div className='foto_cami'>
            <img src={imagenes[camiseta]}  alt='s'/>
          </div>
          <div className='colores_estamp'>
            <div onClick={()=> color('blanco')} className={camiseta === 'blanco' ? 'blanco activo_custom' : 'blanco'}></div>
            <div onClick={()=> color('negro')} className={camiseta === 'negro' ? 'negro activo_custom' : 'negro'}></div>
            <div onClick={()=> color('rojo')} className={camiseta === 'rojo' ? 'rojo activo_custom' : 'rojo'}></div>
            <div onClick={()=> color('verde')} className={camiseta === 'verde' ? 'verde activo_custom' : 'verde'}></div>
            <div onClick={()=> color('gris')} className={camiseta === 'gris' ? 'gris activo_custom' : 'gris'}></div>
          </div>
        </div>
        <div className='customiza_estampados'>
          <h1>Columna estampados</h1>
        </div>
      </div>
    </section>
  )
}

export default Estampados