import React from 'react'
import './Tarjetas.css'
import blanco from '../../Assets/Camisetas_Color/Camiseta_blanca_2.png'
import negro from '../../Assets/Camisetas_Color/Camiseta_Negra.png'
import roja from '../../Assets/Camisetas_Color/Camiseta_Roja.png'
import verde from '../../Assets/Camisetas_Color/Camiseta_Verde_oscuro.png'
import gris from '../../Assets/Camisetas_Color/Camiseta_Gris.png'
import gris_clarito from '../../Assets/Camisetas_Color/Camiseta_Gris_Clarito.png'
import bicolor from '../../Assets/Camisetas_Color/Camiseta_bicolor.png'
import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
const Tarjetas = (props) => {

    
    const [camiseta, setCamiseta] = useState('blanco');

    const imagenes = {
        blanco: blanco,
        negro: negro,
        rojo: roja,
        verde: verde,
        gris: gris,
        gris_clarito: gris_clarito,
        bicolor: bicolor
      };

    function color(value) {
      setCamiseta(value)
      }

    return (
      <div className='section_cat_tarjetas'>
           <div className='section_cat_capa'>
           <Link to={`/estampados/${props.st}`} onClick={props.onClick}>
              <div className='section_cat_fotos'>
                  <img className='foto_camis' src={imagenes[camiseta]} alt={props.titulo}/>
                  <img className='foto_estampado1' src={props.imagen} alt={props.titulo}/>
              </div>
              </Link>
              <div className='section_cat_descripcion'>
                  <div className='section_cat_titulo'>
                      <h1>{props.titulo}</h1>
                      <h1>{props.precio}<span>€</span></h1>
                  </div>
                  <div className='colores_estamp1'>
                    <div onClick={()=> color('blanco')} className={camiseta === 'blanco' ? 'blanco activo_custom' : 'blanco'}></div>
                    <div onClick={()=> color('negro')} className={camiseta === 'negro' ? 'negro activo_custom' : 'negro'}></div>
                    <div onClick={()=> color('rojo')} className={camiseta === 'rojo' ? 'rojo activo_custom' : 'rojo'}></div>
                    <div onClick={()=> color('verde')} className={camiseta === 'verde' ? 'verde activo_custom' : 'verde'}></div>
                    <div onClick={()=> color('gris')} className={camiseta === 'gris' ? 'gris activo_custom' : 'gris'}></div>
                    <div onClick={()=> color('gris_clarito')} className={camiseta === 'gris_clarito' ? 'gris_clarito activo_custom' : 'gris_clarito'}></div>
                    <div onClick={()=> color('bicolor')} className={camiseta === 'bicolor' ? 'gris_clarito activo_custom' : 'gris_clarito'}></div>
                </div>
              </div>
          </div>
      </div>
    )
  }

export default Tarjetas