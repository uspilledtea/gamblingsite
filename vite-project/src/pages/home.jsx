import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return(
        <>
    
        <div className="flex flex-col h-screen w-60 pt-16 pl-5 bg-orange-500">
        <Link to="/">Home</Link>
        <Link to="/Games">Games</Link>
        <Link to="/Account">Account</Link>
        </div>

        </>
    )
}

