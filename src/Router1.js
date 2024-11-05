import React from "react";
import "./Router1.css";

import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

const Home = ()=> <h2>Home Page</h2>;
const About = ()=> <h2>About</h2>;
const Contact = ()=> <h2>Contact</h2>;

function Router1(){
    return(
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">AboutUs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    )
}

export default Router1;