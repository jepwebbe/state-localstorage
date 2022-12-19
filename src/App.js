import './App.css';
import StateLocalStorage from './Components/StateLocalStorage';
import Cart from './Components/Cart';
import Product from './Components/Product';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Cart />} />
      <Route path="/product" element={<Product />} />
    </Routes>
    
  );
}

export default App;
