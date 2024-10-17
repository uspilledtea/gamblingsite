import './home.css'
import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return(
        <>
        <div className="w-screen bg-slate-900 h-12 text-center"> 
            <p className="text-center text-white">logo</p>
        </div>
        <div className="flex flex-col h-screen w-60 pt-16 pl-5 bg-slate-900 fixed top-0 left-0 right-0">
        <Link to="/" className="text-slate-300 transition ease-in-out delay-100 hover:text-slate-500 w-10">Home</Link>
        <Link to="/Games" className="text-slate-300 transition ease-in-out delay-100 hover:text-slate-500 mt-2.5 w-10">Games</Link>
        <Link to="/Account" className="text-slate-300 transition ease-in-out delay-100 hover:text-slate-500 mt-2.5 w-10">Account</Link>
        </div>
        </>
    )
}

