import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
       <BrowserRouter>
    
    <Navbar />
    <div className='container'>
    <Routes> 
        <Route path='/' element = {<ExercisesList/>} />
        <Route path='/edit/:id' element = {<EditExercise/>} />
        <Route path='/create' element = {<CreateExercise/>} />
        <Route path='/user' element = {<CreateUser/>} />
    </Routes> 
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;
