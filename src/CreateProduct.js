import React, {useRef} from 'react'

function CreateProduct() {


    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const ref = {id:useRef(null), title:useRef(''), description:useRef(''), price:useRef(null),
                    discountPercentage:useRef(null), rating:useRef(''), stock:useRef(''),
                    brand:useRef(''), category:useRef(''), thumbnail:useRef(""), images:useRef('')}
    // const [addprod, setAddProd] = useState(ref)
    const createProduct=()=>{
        fetch('https://dummyjson.com/products/add', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                id:ref.id.current.value,
                title:ref.title.current.value,
                description:ref.description.current.value,
                price:ref.price.current.value,
                discountPercentage:ref.discountPercentage.current.value,
                rating:ref.rating.current.value,
                stock:ref.stock.current.value,
                category:ref.category.current.value,
                thumbnail:ref.thumbnail.current.value,
                images:ref.images.current.value,
            })
            .then(res=>res.json())
            .then(console.log, "nproduct")
        })
    }
  return (
    <div>
        <h1>CreateProduct</h1>
        <form onSubmit={handleSubmit}>
            <label>Id : </label>
            <input type="text" ref={id}></input>
            <label>Title : </label>
            <input type="text" ref={title}></input>
            <label>Description : </label>
            <input type="text" ref={description}></input>
            <label>Price : </label>
            <input type="number" ref={price}></input>
            <label>Discount Percentage : </label>
            <input type="number" ref={discountPercentage}></input>
            <label>Rating : </label>
            <input type="number" ref={rating}></input>
            <label>Stock : </label>
            <input type="number" ref={stock}></input>
            <label>Category : </label>
            <input type="text" ref={category}></input>
            <label>thumbnail : </label>
            <input type="text" ref={thumbnail}></input>
            <label>Images : </label>
            <input type="text" ref={images}></input>
            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default CreateProduct