import React, {useState, createContext} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Myprofile from './components/Myprofile';
import Products from "./components/Products";

export const store = createContext();

const App = () => {

  const [token, setToken] = useState(null)
  
  return (
    <div>
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Myprofile />} />
            <Route exact path='/products' element={<Products />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  )
}


export default App



