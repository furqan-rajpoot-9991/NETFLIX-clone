import React from 'react'

import Navbar from './components/Navbar'

import {
    Route,
    Routes,
} from "react-router-dom";
import Home from './pages/home';
import Signup from './pages/Signup';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
      <>
{/* <div>adsffsd</div> */}
            
<AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
         
        </Routes>
      </AuthContextProvider>

 
    </>
  )
}

export default App
