import React from 'react'
import {useLocation} from 'react-router-dom';
import './OrderDetails.css';

function OrderDetails() {

    const location = useLocation()
    const {Orderinfo, address, cost} = location.state
    console.log(Orderinfo, "order")
    console.log(address, "ytu")
  return (
    <div>
        <h1>Order Placed</h1>
        <div className='addressCard'>
            <h3>Shipping Address</h3>
            <h5>Deliver to : {address.firstname} {address.lastname}</h5>
            <h5>Address : {address.address}</h5>
            <h5>City : {address.city}</h5>
            <h5>State : {address.State}</h5>
            <h5>Zip Code : {address.Zip}</h5>
        </div>
       {Orderinfo.map((item, id)=>{
        return(
            <div key={id}>
            <div id="pdimgcon">
                <div className='left'>                                                                    
                    <img id="pdimg" alt="productimg" src={item.images[0]}></img>
                </div>
                <div className='right'>
                <div class="product-info">
                    <h2>Product : {item.title}</h2>
                    <h2>Price : ${item.price}</h2>
                    <h2>Brand : {item.brand}</h2>
                    <h2>Rating : {item.rating}</h2>
                </div>
                </div>
            </div>
          </div>
          
       )})}
       <div><h2>Total Cost : $ {cost}</h2></div>
    </div>
  )
}

export default OrderDetails