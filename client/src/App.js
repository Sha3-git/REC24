import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

function App() {
  /*
   <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
    </BrowserRouter>
  */
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} /> {/*employers*/}
        <Route path='/login' element={<Login />} /> {/*employees and employers*/}
        <Route path='/signup/:id' element={<Signup />} /> {/*employees*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
