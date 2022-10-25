import './App.css';
import {Routes, Route} from "react-router-dom"
import {MyAccount } from "./components/myAccount/MyAccount"
import {Incomes } from "./components/Incomes/Incomes"
import {Spent } from "./components/Spent/Spent"
import {Savings } from "./components/Savings/Savings"

function App() {
  return (

    <>
    {/*<div className="App">
      <h1>Hola Fer, nueva app. no te retrases.</h1>
    </div>*/}

    <Routes>
      <Route path="/" element={<MyAccount />}/>
      <Route path="/incomes" element={<Incomes />}/>
      <Route path="/spent" element={<Spent />}/>
      <Route path="/savings" element={<Savings />}/>
    </Routes>
    
    </>
  );
}

export default App;
