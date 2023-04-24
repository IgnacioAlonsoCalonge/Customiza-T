import React from 'react'
import { useState, useEffect } from 'react';
import './Dropdown.css'


const Dropdown = () => {

    
  const [active, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');


  function dropd(){
    setActive(!active);
  }

  function selectOption(value){
    setSelectedValue(value);
    setActive(false);
  }


  return (
    <div className={active ? 'dropdown active' : 'dropdown'}>
        <input 
        type="text"
        className='texto' 
        onClick={dropd} 
        readOnly
        value={selectedValue}
        placeholder='Selecciona tu talla'
        onChange={(e) => setSelectedValue(e.target.value)}>
        </input>
        <div className='option'>
        <div onClick={() => selectOption('XS')}>XS</div>
        <div onClick={() => selectOption('S')}>S</div>
        <div onClick={() => selectOption('M')}>M</div>
        <div onClick={() => selectOption('L')}>L</div>
        <div onClick={() => selectOption('XL')}>XL</div>
        <div onClick={() => selectOption('XXL')}>XXL</div>    
    </div>
  </div>
  )
}

export default Dropdown