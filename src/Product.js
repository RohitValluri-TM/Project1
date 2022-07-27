import { useEffect, useState } from "react"
import axios from 'axios';
import './App.css';
import './Product.css'
export default function Product(){
    const [data, setData] = useState([])
    const [number, setNumber]= useState()
    const [title, setTitle] = useState([])
    const [image, setImage] = useState([])
    // const [copy, setCopy] = useState([])
    // console.log(data, "data1")
    // const ndata = Object.values(data)
    // console.log(Object.values(data), "ndata")
    // const [checked, setChecked] = useState([])
    
    async function getData(){
        const response = await axios.get(`https://dummyjson.com/products/category/${number}`)
        // console.log(response, "ashdad");
        
        // console.log(response.data.products, "title")
        setTitle(response.data.products)
        console.log(title, 'tt')
        // setCopy([...response.data.products])
        // console.log(copy, "copy")
    }
    
    useEffect(()=>{
        getData()
        console.log(getData(), "ddjkassmd")
        // setData(info)
    }, [number])

    const fetchData=async()=>{
        const res = await fetch('https://dummyjson.com/products?limit=100')
        // console.log(res, "res");
        const productInfo = await res.json();
        // console.log(productInfo, "data")
        // let productData = Object.entries(productInfo)
        setData(productInfo)
    }
    
    return(
        <>
        <h1>Products</h1>
        <h3>Sort By...</h3>
        <select value={number} onChange={(e)=>{setNumber(e.target.value)}} className="select" aria-hidden="true">
            <optgroup label="Categories">
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="skincare">Skincare</option>
            </optgroup>
        </select>
        {title.map((ele, index)=>{
            return(
                <div className="cd" key={index}>
                    {/* <h2>{ele.title}</h2> */}
                    <div className="card">
                        <img className="card-img-top" src={ele.images[0]} alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">{ele.title}</h4>
                            <p className="card-text">{ele.description}</p>
                            <button className="btn btn-primary stretched-link">See Details ...</button>
                        </div>
                    </div>
                </div>
            )
        })}
        {/* {ndata[0].map((item, id)=>{
            return(
                <div key={id}>
                <li >{item.title}</li>
                </div>
            )
        })} */}
        
        </>
    )
}