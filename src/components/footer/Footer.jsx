// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
            <h1 className='logo'>
            SaborArt
            <span> Açai</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa nostrum nam veniam? Nisi odio quis, ipsa eos architecto atque quaerat ab excepturi tempore labore quam incidunt voluptate dolore harum, id error neque quod, eveniet inventore impedit laudantium. Vel, deleniti.</p>
            <div className="footer-social-icons">
                <FaFacebook />
                <FaInstagramSquare />
                <FaTiktok />
                <FaLinkedin />
                <BsTwitterX />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>Empresa</h2>
                <ul>
                    <li>Inicio</li>
                    <li>Sobre Nos</li>
                    <li>Delivery</li>
                    <li>Politica de Privacidade</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Contato RH</h2>
                <ul>
                    <li>+55 31 987654321</li>
                    <li>saborartacai@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            copyright 2024 <a href="https://github.com/PauloAquarius0299" target='blank'>PAULO.DEV</a> - All Right Reserved
        </p>
    </div>
  )
}

export default Footer