import logo from './logo.svg';
import './App.css';
import NavApp from './comp/AppNav';
import { Route, Routes } from 'react-router-dom';
import Cart from './comp/Cart';
import Products from './comp/Products';
function App() {
  return (
    <div className="App">
      <NavApp />
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
