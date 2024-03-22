import React,{useState, useContext} from 'react'
import axios from 'axios';
import "./index.css";
import {Link} from "react-router-dom";
import {store} from "../../App"
import { Navigate } from 'react-router';

const Login = () => {

    const [token, setToken] = useContext(store);
    const [data,setData] = useState({
        email:'',
        password:'',
    })

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const updateData = () => {
        setData({
            email:'',
            password:''
        })
    }

    const submitHandler = e =>{
        e.preventDefault();
        const getToken = async() => {
            try {
                const response = await axios.post('https://authentication-lcm0.onrender.com/login',data)
                const value = response.data
                if (typeof(value) === "string") {
                    alert(value)
                    updateData()
                }
                
                setToken(response.data.token)
                updateData()
            }

            catch(error) {
                console.log(error)
            }
            
        }
        getToken()
    }

    if (token) {
        return <Navigate to="/" />
    }
    
    const {email, password} = data
    return (
        <div className="login-page-container">
            
            <form className="login-form-container" onSubmit={submitHandler} autoComplete="off">
                <h3 className="login-heading">Login Form</h3>
                
                <input value={email} className="input-element" type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
                <input value={password} className="input-element" type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
                <input className="login-button" type="submit" value="Login" /><br />
                
                <p className="text">If you don't have an account. <Link to="/register" className="special-text">Create account</Link></p>
            </form>
            
        </div>
    )
}

export default Login

