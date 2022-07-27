import { useEffect, useState } from "react"
import axios from 'axios';
import productData from './products.json'
import './App.css';
import './Product.css'
import { Link} from "react-router-dom";
import NavBar from "./NavBar";
import { Dropdown } from "react-bootstrap";
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from "@coreui/react";


export default function Product(){
    
    const copy = productData.products
    const [data, setData] = useState(copy)
    const [number, setNumber]= useState()
    const [title, setTitle] = useState()
    const [search, setSearch] = useState("")
    // const [image, setImage] = useState([])
    const [checked, setChecked] = useState(false)

    
    // const [copy, setCopy] = useState([])
    // console.log(data, "data1")
    // const ndata = Object.values(data)
    // console.log(Object.values(data), "ndata")
    // const [checked, setChecked] = useState([])
    const filter=(inputItem) => {
        setChecked(!checked)
        if(checked){
        const response = copy.filter((e)=>{
            return e.category === inputItem
        });
        setData(data.concat(response))
    }
    else {
        setData(copy)
    }
        // console.log(response, "data1")
        // console.log(typeof copy, "cp")
        // console.log(typeof response, "rs")
        // setData(data.concat(response));

        console.log(data, "data")
        // setData()
    }

    const sortbyPrice=()=>{
        const sortPrice = [...data].sort((a, b)=>a.price-b.price)
        setData(sortPrice)
    }
    const sortbyRating=()=>{
        const sortRating = [...data].sort((x, y)=>x.rating-y.rating)
        setData(sortRating)
    }
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
        // e.preventDefault();
        // setData(info)
    }, [number])

    // const fetchData=async()=>{
    //     const res = await fetch('https://dummyjson.com/products?limit=100')
    //     // console.log(res, "res");
    //     const productInfo = await res.json();
    //     // console.log(productInfo, "data")
    //     // let productData = Object.entries(productInfo)
    //     setData(productInfo)
    // }
    
    return(
        <>
        <NavBar/>
        <h1>Products</h1>
        <input id="search" placeholder="Search Products..." onChange={(e)=>setSearch(e.target.value)}></input>
        <input type="checkbox" onClick={()=>filter('smartphones')}></input>
        <label>Smartphones</label><br/>
        <input type="checkbox" onClick={()=>filter('laptops')}></input>
        <label>Laptops</label><br/>
        <CDropdown>
            <CDropdownToggle color="secondary">Sort By...</CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem onClick={sortbyPrice}>Price</CDropdownItem>
                    <CDropdownItem onClick={sortbyRating}>Rating</CDropdownItem>
                </CDropdownMenu>
        </CDropdown>
        {/* <Dropdown.Toggle variant="success">Sort</Dropdown.Toggle>
        <h3>Sort By...</h3>
        
        <Dropdown.Menu>
            <Dropdown.Item onClick={sortbyPrice}>Price</Dropdown.Item>
        </Dropdown.Menu> */}
        
        {data.filter(value=>{
            if(search===""){
                return value.title
            }
            else if (value.title.toLowerCase().includes(search.toLowerCase())){
                return value.title
            }
        })
        
        .map((ele, index)=>{
            return(
                <div className="cd" style={{display:'inline-grid', width:'33rem'}} key={index}>
                    {/* <h2>{ele.title}</h2> */}
                    <div className="card">
                        <img className="card-img-top" src={ele.images[0]} alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">{ele.title}</h4>
                            <h4>Rating : {ele.rating}</h4>
                            <h4>Price : ${ele.price}</h4>
                            <p className="card-text">{ele.description}</p>
                           <Link to="/Productdetails" state={{info:ele}}> <button className="btn btn-primary stretched-link">See Details ...</button></Link>
                        </div>
                    </div>
                </div>
            )
        })
        }
        <select value={number} onChange={(e)=>{setNumber(e.target.value)}} className="select" aria-hidden="true">
            <optgroup label="Categories">
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="skincare">Skincare</option>
            </optgroup>
        </select>
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