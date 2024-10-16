import './App.css'
import Games from "./pages/Games.jsx"
import { Home } from './pages/home.jsx';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <>
     <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Games" element={<Games/>}/>
            </Routes>
        </Router>    
    </>
  )
}

export default App
