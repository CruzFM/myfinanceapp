import './App.css';
import { useState } from 'react';
import Modal from 'react-modal';
import {Routes, Route} from "react-router-dom"
import {MyAccount } from "./components/myAccount/MyAccount"
import {Incomes } from "./components/Incomes/Incomes"
import {Spent } from "./components/Spent/Spent"
import {Savings } from "./components/Savings/Savings"
import { Navbar } from "./components/Navbar/Navbar"

Modal.setAppElement('#root')
function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = ()=>{
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
  }

  return (

    <div className={isDarkMode ===true ? 'darkMode' : ''}>
    {/*<div className="App">
      <h1>Hola Fer, nueva app. no te retrases.</h1>
    </div>*/}
    <Navbar />
    <Routes>
      <Route path="/" element={<MyAccount handleToggleDarkMode={handleToggleDarkMode} isDarkMode={isDarkMode}/>}/>
      <Route path="/incomes" element={<Incomes />}/>
      <Route path="/spent" element={<Spent />}/>
      <Route path="/savings" element={<Savings />}/>
    </Routes>
    
    </div>
  );
}

export default App;
