
// import logo from './logo.svg';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allBooks" element={<Home />} />
        <Route path="/favBooks" element={<Home />} />
        <Route path="/currentBooks" element={<Home />} />
        <Route path="/finishedBooks" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutUs" element={<Home />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
