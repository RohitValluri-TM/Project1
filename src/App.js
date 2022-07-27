import './App.css';
import React,{ useEffect, useState } from 'react';
import Product from './Product';
import {root} from './index.js'
function App() {
  const initialValues = {email:"", password:""}
  const [formdata, setFormdata] = useState(initialValues)
  const [errors, setErrors] = useState({})
  // const [submit, setSubmit] = useState(false)

  function handleSubmit(event){
      event.preventDefault();
      console.log(formdata)
      //setErrors(validation(formdata));
      //setSubmit(true)
      if(Object.keys(errors).length===0){
        root.render(
          <React.StrictMode>
            <Product/>
          </React.StrictMode>
        );
        
      }
  }

  function handleChange(event){
    const {name, value} = event.target;
    setFormdata({...formdata, [name] : value});
  }

  useEffect(()=>{
    // console.log(errors)
    validation(formdata);
    
  }, [formdata]);

  function validation(e){
    const err = {};
    const small = new RegExp("^(?=.*[a-z])");
    const capital = new RegExp("^(?=.*[A-Z])");
    const numbers = new RegExp("^(?=.*[0-9])");
    const character = new RegExp("^(?=.*[!@#\$%\^&\*])");
    const len = new RegExp("^(?=.{8,})");
    const emailcheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!e.email){
      err.email="Email is required!"
    }
    else if(!emailcheck.test(e.email)){
      err.email="Please enter a valid email"
    }
    if(!e.password){
      err.password="Password is required!"
    }
    else if(!small.test(e.password)){
      err.password="Password should contain atleast one small alphabet!"
    }
    else if(!capital.test(e.password)){
      err.password="Password should contain atleast one capital alphabet!"
    }
    else if(!numbers.test(e.password)){
      err.password="Password should contain atleast one number!"
    }
    else if(!character.test(e.password)){
      err.password="Password should contain atleast one special character!"
    }
    else if(!len.test(e.password)){
      err.password="Password length should contain atleast 8 characters!"
    }
    setErrors(err)
  }
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div>
        <input type="email" name="email" value={formdata.email} onChange={(e)=>handleChange(e)}></input>
        {errors.email && <p>{errors.email}</p>}
        </div>
        <br/>
        <div>
        <input type="password" name="password" value={formdata.password} onChange={(e)=>handleChange(e)}></input>
        {errors.password && <p>{errors.password}</p>}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
