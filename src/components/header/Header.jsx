// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
    <div className="header-contents">
        <h2>O Melhor <span>Açaí</span>, pronto e direto na <span>sua Casa!</span></h2>
        <p>Aqui no SaborArt Açai, estamos comprometidos em levar até você o melhor açaí, preparado com ingredientes frescos e selecionados, para que você possa desfrutar de uma verdadeira explosão de sabor a qualquer momento, no conforto da sua casa.</p>
        <button><a href="#explore-menu">Ver Menu</a></button>
    </div>
    </div>
  )
}

export default Header