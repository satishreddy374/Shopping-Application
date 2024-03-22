import {useContext} from "react"
import {Link} from "react-router-dom";
import "./index.css";
import Popup from "reactjs-popup";
import {store} from "../../App"

const Headers = () => {

    const [token, setToken] = useContext(store)

    const onClickYesButton = () => {
        setToken(null)
    }

    return (
        <>
            <div className="headers-page-container">
                <Link to="/"><img className="logo" src="https://i.ibb.co/3NxDs7F/e.jpg" alt="logo" /></Link>
                <div className="paths-container">
                    <Link to="/" className="path">Home</Link>
                    <Link to="/products" className="path">Products</Link>
                    <Popup modal trigger={
                        <button className="logout-button">Logout</button>
                    }>
                        {close => (
                            <div className="popup-container">
                                <p className="popup-text">Are you sure you want to Logout...</p>
                                <div className="popup-buttons-container">
                                    <button className="yes-btn" onClick={onClickYesButton}>Yes</button>
                                    <button className="no-btn" onClick={() => close()}>No</button>
                                </div>    
                            </div>
                        )}
                    </Popup>
                    
                </div>
            </div>
            
        </>
    )
}

export default Headers




