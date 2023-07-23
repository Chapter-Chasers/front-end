import Home from './components/Home/Home';
import { Route, Routes } from 'react-router';
import Books  from './components/Books/Books';


import './App.css';

function App() {
  return (
    <div className="App">
     
   <Routes>
   <Route  path="/" element={<Home/>} />
   <Route  path="/allBooks" element={<Home/>} />
   <Route  path="/favBooks" element={<Home/>} />
   <Route  path="/currentBooks" element={<Home/>} />
   <Route  path="/finishedBooks" element={<Home/>} />
   <Route  path="/cart" element={<Home/>} />
   <Route  path="/aboutUs" element={<Home/>} />
   </Routes>
    </div>
  );
}

export default App;
