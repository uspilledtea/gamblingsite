import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return(
        <>
    
        <div className="flex flex-col bg-slate-500 h-screen w-60 pt-16">
        <Link to="/">Home</Link>
        <Link to="/Games">Games</Link>
        <Link to="/Account">Account</Link>
        </div>

        </>
    )
}

