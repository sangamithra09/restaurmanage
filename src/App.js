import React from 'react';
import Login1 from './Components/login1.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginSignup from './Components/LoginSignup.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login1 />}></Route>
      <Route path="/LoginSignup" element={<LoginSignup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;