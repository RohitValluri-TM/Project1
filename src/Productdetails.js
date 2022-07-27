import React from 'react'
import {useLocation} from 'react-router-dom';
import NavBar from './NavBar';
import './Productdetails.css';

function ProductDetails() {
  const location = useLocation()
  const {info} = location.state
  console.log(info, "info")
  return (
    <div>
      <NavBar/>
        <h1>ProductDetails</h1>
        <div id="pdcon" className='container'>
          <div className='row'>
            <div id="pdimgcon" className='col-6'>                                                                     
              <img id="pdimg" src={info.images[0]}></img>
            </div>
            <div id="dcon" className='col-6'>
              <h2>Product : {info.title}</h2>
              <h2>Price : ${info.price}</h2>
              <h2>Brand : {info.brand}</h2>
              <h2>Rating : {info.rating}</h2>
            </div> 
        </div> 
        </div> 
    </div>
  )
}

export default ProductDetails