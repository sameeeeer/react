import React from 'react';
import './App.css';
import Teacher from './container/Teacher/Teacher.js';
import {BrowserRouter} from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Teacher/>
    </div>
    </BrowserRouter>
    );
   
}

export default App;
