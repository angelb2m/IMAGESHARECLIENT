import React from 'react';
import './css/tailwind.css';
import './css/custom.css';
import { Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/home/home'
import Gallery from './pages/galeria/galeria'
import  {photos} from "./data/photos";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Reset from "./pages/reset/reset";
import Profile from "./pages/profile/profile";

function App() {

  return (
    <>
      <Header/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery pins={photos} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
         </Routes>
  </>
  );
}

export default App;