import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Menu } from './menu/Menu';
import {Checkout} from './checkout/Checkout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
