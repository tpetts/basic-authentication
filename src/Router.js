/**
 * This file will hold the router and some logic to determine the current route name.
 */
import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav";
import Public from "./Public";
import Profile from './Profile';
import Protected from "./Protected";
import About from "./About";

const Router = () => {
    const [current, setCurrent] = useState('home')
    // Hook
    useEffect(() => {
        setRoute()
        window.addEventListener('hashchange', setRoute)
        return () => window.removeEventListener('hashchange', setRoute)
    }, [])

    function setRoute() {
        const location = window.location.href.split('/');
        const pathname = location[location.length-1];
        setCurrent(pathname ? pathname : 'home');
    }

    return (
        <HashRouter>
            <Nav current={current} />
            <Routes>
                <Route exact path="/" element={< Public />} />
                <Route exact path="/about" element={< About/>} />
                <Route exact path="/protected" element={< Protected />} />
                <Route exact path="/profile" element={< Profile />} />
                <Route element={< Public />} />
            </Routes>
        </HashRouter>
    )
}

export default Router;