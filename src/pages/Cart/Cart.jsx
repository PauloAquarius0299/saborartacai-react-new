// eslint-disable-next-line no-unused-vars
import React, {useContext} from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <>
    <div className='cart'>
      <div className='cart-items-title'>
        <p>Items</p>
        <p>Titulo</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <br />
      <hr />
      {food_list.map((item)=>{
        if(cartItems[item._id]>0)
        {
          return(
            // eslint-disable-next-line react/jsx-key
            <div>
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr />
            </div>
          )
        }
      })}
    </div>
    <div className='cart-bottom'>
      <div className='cart-total'>
        <h2>Verificar Items do Carrinho </h2>
        <div>
          <div className='cart-total-details'>
            <p>Subvalor</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>Taxa de Entrega</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <b>Valor Total</b>
            <b> ${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>VERIFICAR INFORMAÇÕES</button>
      </div>
      <div className='cart-promocode'>
        <div>
          <p>Se você possui acesso ao codigo promo. Digite aqui!</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='Digite o codigo promo' />
            <button>Acessar</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart