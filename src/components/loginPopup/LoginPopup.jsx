// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './LoginPopup.css'
import Cross from '../../assets/cross_icon.png'

// eslint-disable-next-line react/prop-types
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Acessar")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=> setShowLogin(false)} src={Cross} alt="cross icon" />
            </div>
            <div className='login-popup-inputs'>
                {currState==="Acessar"?<></>:<input type="text" placeholder="Seu nome:" required />}
                <input type="email" placeholder="Seu email:" required />
                <input type="password" placeholder="Sua senha:" required />
            </div>
            <button>{currState==="Acessar"?"Criar Conta":"Cadastrar"}</button>
            <div className='login-popup-conditions'>
                <input type='checkbox' required/>
                <p>Ao continuar, eu concordo com os termos de uso e politica de privacidade</p>
            </div>
            {currState==='Acessar'
            ?<p>Criar uma nova conta?<span onClick={() =>setCurrState("Criar Conta")}> Click aqui</span></p>
            :<p>Já possui uma conta? <span onClick={() =>setCurrState("Acessar")} > Acessar aqui!</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup