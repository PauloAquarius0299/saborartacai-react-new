// eslint-disable-next-line no-unused-vars
import React, {  useContext } from 'react'
import './FoodItem.css'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import addIcon from '../../assets/add_icon_white.png'
import removeIcon from '../../assets/remove_icon_red.png'
import greenIcon from '../../assets/add_icon_green.png'
import {StoreContext} from '../../context/StoreContext';


// eslint-disable-next-line react/prop-types
function FoodItem({id,name,price,description,image}) {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartItems[id] 
            ?<img className='add' onClick={()=>addToCart(id)} src={addIcon} />
            :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={removeIcon} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={() =>addToCart(id)} src={greenIcon} alt="" />
            </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf  />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
           
        </div>
    </div>
  )
}

export default FoodItem