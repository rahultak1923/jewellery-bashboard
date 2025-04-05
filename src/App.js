import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Addjewellery from './pages/addjewellery/Addjewellery';
import Editjewellery from './pages/editjewellery/Editjewellery';
import Hero from './pages/herosection/Hero';

function App() {
  return (
    <div className="">
      <BrowserRouter>
   <Dashboard/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addjewellery' element={<Addjewellery/>}/>
        <Route path='/editjewellery' element={<Editjewellery/>}/>
        <Route path='/herosection' element={<Hero/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
