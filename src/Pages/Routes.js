import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Home from '../Components/Home/Home';


const Routes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/Boocheen/:crushName" element={<Home />}></Route>
            <Route path="/Boocheen/:crushName" element={<Home />}></Route>

        </Routes>
    </Router>

  )
}

export default Routes
