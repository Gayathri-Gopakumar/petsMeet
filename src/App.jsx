import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';  // Add this import
import Login from './pages/Login'; // Add this import
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <>
      <Routes>
        {/* http://localhost:5173/ */}
        <Route path='/' element={<Landing />} />
        {/* http://localhost:5173/home */}
        <Route path='/home' element={<Home />} />
        {/* http://localhost:5173/login */}
        <Route path='/login' element={<Login />} />
         {/* http://localhost:5173/cats */}
         <Route path='/cats' element={<Cats />} />
          {/* http://localhost:5173/login */}
        <Route path='/dogs' element={<Dogs />} />

      </Routes>
    </>
  );
}

export default App;
