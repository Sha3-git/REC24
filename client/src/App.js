import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Employee from './pages/Employee.jsx';
import Employer from './pages/Employer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} /> {/*employers*/}
        <Route path='/login' element={<Login />} /> {/*employees and employers*/}
        <Route path='/signup/:id' element={<Signup />} /> {/*employees*/}
        <Route path='/employee/:id' element={<Employee />} /> {/*employee information*/}
        <Route path='/employer/:id' element={<Employer />} /> {/*employer dashboard*/}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
