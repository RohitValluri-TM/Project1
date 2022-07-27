import React from 'react'
import {AiTwotoneShopping} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import './App.css'
function NavBar() {
  return (
    <div id="nav" className='container-fluid'>
        <div className='row'>
            <div className='col-2'>
                <AiTwotoneShopping/>ShopCart
            </div>
            <div id="carticon" className='col-8'>
                <FiShoppingCart/>
            </div>
        </div>
        </div>
  )
}

export default NavBar