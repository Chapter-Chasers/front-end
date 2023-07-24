
// import logo from './logo.svg';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router';
import './App.css';
import React from 'react';
import Cart from './components/cart/Cart';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
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
