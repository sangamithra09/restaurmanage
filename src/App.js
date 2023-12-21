import React from 'react';
import Login1 from './Components/login1.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginSignup from './Components/LoginSignup.jsx';
import Home from './Components/Home.jsx';

function App() {
  return (
      <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login1 />}></Route>
      <Route path="/LoginSignup" element={<LoginSignup />}></Route>
      <Route path="/Home" element={<Home />}></Route>

      
      </Routes>
    </BrowserRouter> 
    {/* <Home/> */}
    
    </div>
  );
}

export default App;