import React from 'react';
import logo from '../img/logo.webp';

function Header() {
  return (
    <div className='container-title'>
      <img className='image-title'
      src={require('../img/logo.webp')}
      alt='Navas'/>
      <div className='language'></div>
      <div className='dropdown'></div>
    </div>
  );
}

export default Header;
