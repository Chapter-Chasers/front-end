import Home from './components/Home/Home';
// import Navbar from './components/NavBar/NavBar';
import Cart from './components/cart/Cart';
import Cart2 from './components/cart/Cart2';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Qoutes from "./components/qoutes/Qoutes";
import './App.css';
import React from 'react';
import BookDetails from './components/bookDetails/BookDetails'
import FavBook from './components/favBook/FavBook';
import Current from './components/current/Current';
import Finished from './components/finished/Finished';
import AboutUs from './components/aboutUs/AboutUs';
import TestNav from './components/testNav/TestNav';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './components/testNav/TestNav.css'

// import TestNavBar from './components/testNav/TestNavBar';


function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}

            <TestNav/>
            {/* <TestNavBar/> */}

        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/allBooks" element={<Home />} /> */}
        <Route path="/favBooks" element={<FavBook />} />
        <Route path="/current" element={<Current />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/finishedBooks" element={<Finished />} />
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
