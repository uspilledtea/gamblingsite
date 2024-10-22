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
                  <Route class="nav" path="/" element={<Home/>} />
                  <Route class="nav" path="/Games" element={<Games/>}/>
                  <Route class="nav" path="/Account" element={<Account/>}/> 
                  <Route class="nav" path="/Login" element={<Login/>}/> 
            </Routes>
        </Router>    
    </>
  )
}

export default App
