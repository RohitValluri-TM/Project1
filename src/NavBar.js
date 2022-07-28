import React from 'react'
import {AiTwotoneShopping} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './App.css'
function NavBar() {
  return (
    <div id="nav" className='container-fluid'>
        <div className='row'>
            <div className='col-2'>
            <Link id="applogo" to="/Product"><AiTwotoneShopping/>ShopCart</Link>
            </div>
            <div id="carticon" className='col-8'>
                <FiShoppingCart/>
            </div>
        </div>
        </div>
  )
}

export default NavBar