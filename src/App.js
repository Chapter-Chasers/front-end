import Home from './components/Home/Home';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import FavBooks from './components/favBook/FavBook';
import Current from './components/current/Current';
import Finished from './components/finished/Finished';
import BookDetails from './components/bookDetails/BookDetails'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/footer/Footer.css';
import './components/NavBar/NavBar.css'
import Cart from './components/cart/Cart';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allBooks" element={<Home />} />
        <Route path="/favBooks" element={<FavBooks />} />
        <Route path="/currentBooks" element={<Current />} />
        <Route path="/finishedBooks" element={<Finished />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutUs" element={<Home />} />
        <Route path="/bookDetails" element={<BookDetails/>}/>
      </Routes>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
