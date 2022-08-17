import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './css/App.css';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

function App() {
  return (
    <>
       <BrowserRouter>
    
    {/* <Navbar /> */}
    
    
    <Routes> 
        <Route path='/' element = {<LoginPage/>} />
        <Route path='/register' element = {<RegisterPage/>} />
        {/* <Route path='/create' element = {<CreateExercise/>} />
        <Route path='/user' element = {<CreateUser/>} /> */ }
    </Routes> 
    
    </BrowserRouter>
    </>
  );
}
export default App;
