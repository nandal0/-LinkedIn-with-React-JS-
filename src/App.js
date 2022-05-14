import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Signin from './components/Signin';
import Login from './components/Login';
import './App.css'
export default function App() {
    return (

        <div className="app-container">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </Router>
            {/* <Header/>
            <MainContent /> */}
            {/* <Footer/> */}
        </div>
    )
}