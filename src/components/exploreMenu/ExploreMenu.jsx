// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/Midia/assets'

// eslint-disable-next-line react/prop-types
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Nosso <span>Menu</span></h1>
        <p className='explore-menu-text'>Com apenas alguns cliques, você pode explorar nosso menu variado, repleto de opções irresistíveis, desde tigelas clássicas de açaí até sorvetes e gelatos. Quer uma opção melhor para o dia? </p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) => {
                return (
                    <div onClick={() =>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='menu item' />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
    
  )
}

export default ExploreMenu