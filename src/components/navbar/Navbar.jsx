// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import {StoreContext} from '../../context/StoreContext';

// eslint-disable-next-line react/prop-types
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home")

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
        <Link to='/'><h1 className='logo'>
            SaborArt
            <span> Açai</span></h1></Link>
        
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active": ""}>Inicio</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==='menu'?"active": ""}>Nosso Menu</a>
            <a href='#app-download' onClick={()=>setMenu("app-mobile")} className={menu==='app-mobile'?"active": ""}>App-Celular</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==='contact-us'?"active": ""}>Nosso Contato</a>
        </ul>
        <div className="navbar-right">
            <FaSearch />
            <div className="navbar-search-icon">
                <Link to='/cart'><FaBasketShopping /> </Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} >Cadastrar</button>
        </div>
    </div>
  )
}

export default Navbar