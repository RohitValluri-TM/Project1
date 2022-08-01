import React, { useState } from 'react';
function AddressForm(props) {

    const formValues = {firstname:"", lastname:"", address:"", city:"", State:"", Zip:""}
    const [formInfo, setForm] = useState(formValues)

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formInfo)
        props.passChildData(formInfo)
    }

    function handleChange(event){
        const {name, value} = event.target;
        setForm({...formInfo, [name] : value});
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Shipping Address</h1>
        <label>First Name :</label>
        <input placeholder='Enter first name' name="firstname" onChange={(e)=>handleChange(e)}></input><br/>
        <label>Last Name : </label>
        <input placeholder='Enter last name' name="lastname" onChange={(e)=>handleChange(e)}></input><br/>
        <label>Address : </label>
        <input name="address" placeholder='Enter Address' onChange={(e)=>handleChange(e)}></input><br/>
        <label>City : </label>
        <input name="city" placeholder='Enter city name' onChange={(e)=>handleChange(e)}></input><br/>
        <label>State : </label>
        <input name="State" placeholder='Enter State' onChange={(e)=>handleChange(e)}></input><br/>
        <label>Zip Code : </label>
        <input type="number" name="Zip" placeholder='Enter Zip Code' onChange={(e)=>handleChange(e)}></input><br/>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default AddressForm