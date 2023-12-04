import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import UserInfoPage from './pages/Info';
import Home from './pages/Home';
import Documentary from './pages/Documentary';
import Movies from './pages/Movies';
import SavingContent from './pages/SavingContent';
import Series from './pages/Series';
import Entertainment from './pages/Entertainment';
import Login from './pages/Login';
import IntroPage from './pages/IntroPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path='/Home' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Info' element={<UserInfoPage />}/>
          <Route path='/Documentary' element={<Documentary />}/>
          <Route path='/Movies' element={<Movies/>}/>
          <Route path='/SavingContent' element={<SavingContent />}/>
          <Route path='/Series' element={<Series />}/>
          <Route path='/Entertainment' element={<Entertainment />}/>
          <Route path='/Search' element={<Search />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
