import React from 'react';
import { Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element = {<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;
