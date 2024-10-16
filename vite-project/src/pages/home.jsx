import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return(
        <>
        <h1>homepage</h1>
        <Link to="/">Home</Link>
        <Link to="/Games">Games</Link>
        <Link to="/Account">Account</Link>

        </>
    )
}

