import React from 'react';
import './BotonFiltro.css';

export default function BotonFiltro() {
  return (
    <>
    <div className='container-filtro'>
      <button className='ripple ripple-surface btn btn-light'>
        iPad
      </button>
      <button className='ripple ripple-surface btn btn-light'>
        Macbook
        </button>
      <button className='ripple ripple-surface btn btn-light'>
        iPhone
        </button>
      <button className='ripple ripple-surface btn btn-light'>
        iWatch
        </button>
      </div>
    </>
  );
}