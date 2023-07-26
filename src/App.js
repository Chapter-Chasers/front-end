
// import logo from './logo.svg';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import BookDetails from './components/bookDetails/BookDetails'
import FavBooks from './components/favBook/FavBook';
import Current from './components/current/Current';
import Finished from './components/finished/Finished';



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
        <Route path="/aboutUs" element={<Home />} />
        <Route path="/bookDetails/:id" element={<BookDetails />} />
      </Routes>
      
      <Footer />
    </div>

  );
}

export default App;
