import './App.css'
import Account from '../pages/Account.jsx';
import Games from "../pages/Games.jsx"
import { Home } from '../pages/home.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from '../pages/Login.jsx';

function App() {
  
  return (
    <>
     <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Games" element={<Games/>}/>
                <Route path="/Account" element={<Account/>}/> 
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </Router>    
    </>
  )
}

export default App
