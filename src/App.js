// import logo from './logo.svg';

import Home from './components/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Cart from './components/cart/Cart';
import Cart2 from './components/cart/Cart2';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Qoutes from "./components/qoutes/Qoutes";
import './App.css';
import React from 'react';
import BookDetails from './components/bookDetails/BookDetails'
import AboutUs from './components/aboutUs/AboutUs';


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
        <Route path="/qoutes" element={<Qoutes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Cart2 />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/bookDetails/:id" element={<BookDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
