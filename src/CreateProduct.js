import React, {useRef} from 'react'
import {useNavigate} from 'react-router-dom'

function CreateProduct() {

    const navigateTo=useNavigate()
    
    const refer = {id:useRef(null), title:useRef(''), description:useRef(''), price:useRef(''),
                    discountPercentage:useRef(''), rating:useRef(''), stock:useRef(''),
                    brand:useRef(''), category:useRef(''), thumbnail:useRef(""), images:useRef('')}
   

    const handleSubmit=(e)=>{
        e.preventDefault()

        const json = {
            id: refer.id.current.value,
            title: refer.title.current.value,
            description: refer.description.current.value,
            price: refer.price.current.value,
            rating: refer.rating.current.value,
            stock: refer.stock.current.value,
            brand:refer.brand.current.value,
            category: refer.category.current.value,
            thumbnail: refer.thumbnail.current.value,
            images: refer.images.current.value,
            
        }
        
        
        fetch('https://dummyjson.com/products/add', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(json)
        })
        .then(res=>res.json())
        .then(console.log, "nproduct")
        navigateTo('/Product')
        // console.log(id, "nid")
        // console.log(json.id, "nid")
    }
    
  return (
    <div>
        <h1>CreateProduct</h1>
        <form onSubmit={handleSubmit}>
            <label>Id : </label>
            <input type="text" ref={refer.id}></input>
            <label>Title : </label>
            <input type="text" ref={refer.title}></input>
            <label>Description : </label>
            <input type="text" ref={refer.description}></input>
            <label>Price : </label>
            <input type="number" ref={refer.price}></input>
            <label>Discount Percentage : </label>
            <input type="number" ref={refer.discountPercentage}></input>
            <label>Rating : </label>
            <input type="number" ref={refer.rating}></input>
            <label>Stock : </label>
            <input type="number" ref={refer.stock}></input>
            <label>Brand : </label>
            <input type="text" ref={refer.brand}></input>
            <label>Category : </label>
            <input type="text" ref={refer.category}></input>
            <label>thumbnail : </label>
            <input type="text" ref={refer.thumbnail}></input>
            <label>Images : </label>
            <input type="text" ref={refer.images}></input>
            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default CreateProduct