// eslint-disable-next-line no-unused-vars
import React, {useContext} from 'react'
import {StoreContext} from '../../context/StoreContext'
import './InfoPage.css';

const InfoPage = () => {
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
   <> 
   <form className='place-order'>
   <div className='place-order-left'>
     <h1 className='title'>Informações do Cliente</h1>
     <div className='multi-fields'>
       <input type='text'  placeholder='Primeiro Nome' required />
       <input type='text' placeholder='Sobrenome' />
     </div>
     <input type='email' placeholder='Endereço de Email' />
     <input type='text' placeholder='Endereço Rua' />
     <div className='multi-fields'>
       <input type='text' placeholder='Cidade' />
       <input type='text' placeholder='Estado' />
     </div>
     <div className='multi-fields'>
       <input type='text' placeholder='CEP' />
       <input type='text' placeholder='Pais' />
     </div>
     <input type='number' placeholder='Telefone' />
   </div>
   <div className='place-order-right'>
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
     <button >REALIZAR O PAGAMENTO</button>
   </div>
   
 </div>
   </div>
 </form>
 </>
  );
}

export default InfoPage;