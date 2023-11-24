import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import UserInfoPage from './pages/Info';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Info' element={<UserInfoPage />}/>
          <Route path='/Search' element={<Search />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
