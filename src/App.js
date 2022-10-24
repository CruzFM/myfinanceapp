import './App.css';
import {Routes, Route} from "react-router-dom"
import {MyAccount } from "./components/myAccount/MyAccount"

function App() {
  return (

    <>
    {/*<div className="App">
      <h1>Hola Fer, nueva app. no te retrases.</h1>
    </div>*/}

    <Routes>
      <Route path="/" element={<MyAccount />}/>
    </Routes>
    
    </>
  );
}

export default App;
