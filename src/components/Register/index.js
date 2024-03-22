import React,{useState} from 'react'
import axios from 'axios';
import "./index.css";
import {Link} from "react-router-dom";

const Register = () => {

    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const updateData = () => {
        setData({username:'',
            email:'',
            password:'',
            confirmpassword:''})
    }


    const submitHandler = e =>{
        e.preventDefault();
        const registerUser = async() => {
            try {
                const response = await axios.post('https://authentication-lcm0.onrender.com/register',data)
                alert(response.data)
                updateData()
            }
            catch(error) {
                console.log(error)
            }
        }
        registerUser()
    }

    const {username, email, password, confirmpassword} = data

    return (
        <div className="register-page-container">
            
            <form className="register-form-container" onSubmit={submitHandler} autoComplete="off">
                <h1 className="register-heading">Registeration Form</h1>
                <input className="input-element" value={username} type="text" onChange={changeHandler} name="username" placeholder="User Name" /><br />
                <input className="input-element" value={email} type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
                <input className="input-element" value={password} type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
                <input className="input-element" value={confirmpassword} type="password" onChange={changeHandler} name="confirmpassword" placeholder="Confirm Password" /><br />
                <input className="register-button" type="submit" value="Register" /><br />
            
                <p className="text">If you already have an account. <Link to="/login" className="special-text">Please Login</Link></p>
            </form>
            
        </div>
    )
}


export default Register








