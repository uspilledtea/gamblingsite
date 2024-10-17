import './App.css'
import Account from '../pages/Account.jsx';
import Games from "../pages/Games.jsx"
import { Home } from '../pages/home.jsx';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <>
     <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Games" element={<Games/>}/>
                <Route path="/Account" element={<Account/>}/> 
            </Routes>
        </Router>    
    </>
  )
}

export default App
