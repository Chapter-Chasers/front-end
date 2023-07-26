// import logo from './logo.svg';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/cart/Cart';
import Cart2 from './components/cart/Cart2';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Qoutes from "./components/qoutes/Qoutes";
import './App.css';
import React from 'react';
import BookDetails from './components/bookDetails/BookDetails'
import FavBooks from './components/favBook/FavBook';
import Current from './components/current/Current';
import Finished from './components/finished/Finished';

import AboutUs from './components/aboutUs/AboutUs';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allBooks" element={<Home />} />
        <Route path="/favBooks" element={<FavBooks />} />
        <Route path="/currentBooks" element={< Current/>} />
        <Route path="/finishedBooks" element={<Finished />} />
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
