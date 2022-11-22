import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Topo() {
  return (
    <header>
      <div className='limitar-secao'>
        <Link to='/'> <img src="/assets/logo.png" alt="" /></Link>

        <nav>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/sabores'>Sabores</Link>
          <Link className='link' to='/sobre'>Sobre</Link>
        </nav>

      </div >
    </header>
  )
}