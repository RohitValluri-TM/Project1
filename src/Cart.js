import React, { useState, useEffect } from 'react'
import {CartProvider, useCart} from 'react-use-cart';
import {useLocation} from 'react-router-dom'
import NavBar from './NavBar';
function Cart() {
    const location = useLocation()
    const {info} = location.state
    console.log(info, "info")
    const {isEmpty, totalUniqueItems, items, removeItem} = useCart();
    const [count, setCount] = useState(1)

    async function getCount(){
      const response = count
      setCount(response)
      console.log(count, 'count')
      // setCopy([...response.data.products])
      // console.log(copy, "copy")
  }
  
  useEffect(()=>{
      getCount()
      console.log(getCount(), "count")
  }, [count])

  return (
    <div>
      <NavBar/>
        <h1>Cart {info.title}</h1>
        <h2>Price : ${info.price * count}</h2>
        <h2>Brand : {info.brand}</h2>
        <h2>Rating : {info.rating}</h2>
        <p>Count : {count}</p>
        <select value={count} onChange={(e)=>{setCount(e.target.value)}} className="select" aria-hidden="true">
            {/* <optgroup label="Categories"> */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            {/* </optgroup> */}
        </select>
    </div>
  )
}

export default Cart