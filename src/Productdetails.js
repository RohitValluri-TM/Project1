import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import './Productdetails.css';
import './OrderDetails.css';
import {FiShoppingCart} from 'react-icons/fi'
import Cart from './Cart';
const cartFls = JSON.parse(localStorage.getItem('cart') || '[]')
const Page_productDetails = 'productDetails';
const Page_cart = 'cart';

function ProductDetails() {
  const location = useLocation()
  const {info} = location.state
  console.log(info, "info")
  // const navigate = useNavigate()
  const [cart, setCart] = useState(cartFls)
  const [page, setPage] = useState('productDetails')
  console.log(page, "page")
  console.log(cart[0], "cart")
  
  
  const cartdata = cart[0];
  console.log(cartdata, "cartdata")
  
  const addtoCart = (item) =>{
    setCart([...cart, {...item}]);
    window.location.reload()
  }
  
  console.log(cart, "added")

  const removefromCart=(removeItem)=>{
    setCart(cart.filter((item)=>item!==removeItem))
    console.log(cart, "removedItem")
    window.location.reload()
  }

  const navigateTo=(cartpage)=>{
    setPage(cartpage)
  }

  const totalCost=()=>{
    return cart.reduce((sum, {price})=>sum+price, 0)
  }

  // useEffect(()=>{
  //   removefromCart();
  // }, [])
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])
  // const showDetails=()=>{
  //   <div>
  //   <h1>ProductDetails</h1>
  //       <div id="pdcon" className='container'>
  //         <div className='row'>
  //           <div id="pdimgcon" className='col-6'>                                                                     
  //             <img id="pdimg" alt="productimg" src={info.images[0]}></img>
  //           </div>
  //           <div id="dcon" className='col-6'>
  //             <h2>Product : {info.title}</h2>
  //             <h2>Price : ${info.price}</h2>
  //             <h2>Brand : {info.brand}</h2>
  //             <h2>Rating : {info.rating}</h2>
  //             <button onClick={()=>addtoCart(info)}>Add to Cart</button>
  //             {/* <button onClick={()=>addtoCart(info)} state={{info:info}}>Add to Cart</button> */}
  //           </div> 
  //       </div> 
  //       </div>
  //       </div>
  // }

  // const showCart=()=>{
  //   <>
  //   <h1>Cart</h1>
        
  //       <div id="pdcon" className='container'>
  //         <div className='row'>
  //           <div id="pdimgcon" className='col-6'>                                                                     
  //             <img id="pdimg" alt="productimg" src={cart.images[0]}></img>
  //           </div>
  //           <div id="dcon" className='col-6'>
  //             <h2>Product : {cart.title}</h2>
  //             <h2>Price : ${cart.price}</h2>
  //             <h2>Brand : {cart.brand}</h2>
  //             <h2>Rating : {cart.rating}</h2>
  //             {/* <button onClick={()=>addtoCart(info)}>Add to Cart</button> */}
  //             {/* <button onClick={()=>addtoCart(info)} state={{info:info}}>Add to Cart</button> */}
  //           </div> 
  //       </div> 
  //       </div>
  //       </>
  // }

  return (
    <div>
      <NavBar />
      <div id="carticon" className='col-8'>
                <button onClick={()=>navigateTo('cart')}><FiShoppingCart/> {cart.length}</button>
      </div>
      <button onClick={()=>navigateTo('productDetails')}>Product Details</button>
      
         {page === Page_productDetails && 
         <div>
         <h1>ProductDetails</h1>
             <div id="pdcon" className='container'>
                 <div id="pdimgcon" >  
                 <div className='left'>                                                                   
                   <img id="pdimg" alt="productimg" src={info.images[0]}></img>
                 </div>
                 <div className='right'>
                <div className="product-info">
                   <h2>Product : {info.title}</h2>
                   <h2>Price : ${info.price}</h2>
                   <h2>Brand : {info.brand}</h2>
                   <h2>Rating : {info.rating}</h2>
                   <button id="wrapper" onClick={()=>addtoCart(info)}>Add to Cart</button>
                   {/* <button onClick={()=>addtoCart(info)} state={{info:info}}>Add to Cart</button> */}
                 </div> 
                 </div>
             </div> 
             </div>
             </div>}
          
         {page === Page_cart && (<Cart cart={cart} removefromCart= {removefromCart} totalCost={totalCost}/>)}
         
    </div>
  )
}

export default ProductDetails