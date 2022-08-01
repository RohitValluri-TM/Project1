import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import AddressForm from './AddressForm';
import './App.css'

function Cart({cart, removefromCart, totalCost}) {

  const [addressData, setAddressData] = useState('')
  console.log(addressData, "addressdata")
  return (
    <div>
         <h1>Cart</h1>
         <div id="pdcon" className='container'>
           <div className='row'>
                 {cart.map((it, index)=>{
                  return(
                  <div key={index}>
                    <div id="pdimgcon" className='col-6'>                                                                     
                      <img id="pdimg" alt="productimg" src={it.images[0]}></img>
                    </div> 
                    <div className='col-6'>
                      <h2>Product : {it.title}</h2>
                      <h2>Price : ${it.price}</h2>
                      <h2>Brand : {it.brand}</h2>
                      <h2>Rating : {it.rating}</h2>
                      <button onClick={()=>removefromCart(it)}>Remove</button>
                    </div>
                  </div>
                 )})}
             <div id='cost'><h2>Total Cost : ${totalCost()}</h2></div>
             <div>
             <Popup trigger={<button className='button bt1'>Fill the Address</button>} position="right center">
              <AddressForm passChildData={setAddressData}/>
             </Popup>
             
             </div>
             <div>
              <Link to="/OrderDetails" state={{Orderinfo:cart,address:addressData, cost:totalCost()}}> <button>Place Order</button></Link>
              </div>
         </div> 
         </div>
    </div>
  )
}

export default Cart