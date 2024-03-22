import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"
import Headers from "../Headers"
import {Navigate} from "react-router-dom"
import "./index.css"
import {store} from "../../App"


const Myprofile = () => {

    const [token, setToken] = useContext(store);
    const [data,setData] = useState(null);

    useEffect(() =>{
        axios.get('https://authentication-lcm0.onrender.com/',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    },[])

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div className="profile-page-container">
            <Headers />
            
            {data && 
                <div className="home-page-container">
                    <div className="home-page-details-container">
                        <h1 className="username-text">Hi {data.username}</h1>
                        <h3 className="welcome-text">Welcome to</h3>
                        <h1 className="online-shopping-text">ONLINE SHOPPING</h1>
                        <p className="home-page-text">The best platform for online shopping where customers can find different categories of products...</p>
                        <Link to="/products">
                            <button className="shop-now-button">Shop Now</button>
                        </Link>
                    </div>
                    <div className="home-page-image-container">
                        <img className="profile-page-image" alt="home-page-image" src="https://i.ibb.co/C1TD2B9/picture-1.png" />
                    </div>
                </div>
                
            }
        </div>
    )
}


export default Myprofile




