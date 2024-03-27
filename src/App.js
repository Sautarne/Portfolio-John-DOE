import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/general/Navigation.jsx';
import Accueil from './pages/Accueil.jsx';
import Services from './pages/Services.jsx';
import Realisations from './pages/Realisations.jsx';
import Blog from './pages/Blog.jsx';
import MeContacter from './pages/Me contacter.jsx';

function App() {
  return (  
    <div>
      <Navigation/>

      <Routes>
          <Route path='/' element={<Accueil/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/realisations' element={<Realisations/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/me-Contacter' element={<MeContacter/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
