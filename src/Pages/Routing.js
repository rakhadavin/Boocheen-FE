import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Home from './Home/Home';
import Crush from "./New Crush/Crush"

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/Boocheen/:crushName" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/" element={<Crush />}></Route>

        </Routes>
    </Router>

  )
}

export default Routing
