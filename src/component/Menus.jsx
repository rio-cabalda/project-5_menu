import React from 'react'
import SingleMenu from './Single-menu'

const Menu = ({showMenus}) => {
  
  return (
    <div className='section-center'>
          {showMenus.map((showMenu)=>{

              return <SingleMenu key={showMenu.id} {...showMenu}/>
          })}
    </div>
  )
}

export default Menu