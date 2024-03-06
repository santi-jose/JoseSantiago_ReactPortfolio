import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <Router>
      <div className="backgroundContainer">
        {/* ... Navbar */}
        <Navbar />

        <hr />
        <Routes>
          
          {/* ... Home */}
          <Route path="/" element={<Home />} />

          {/* ... About */}
          <Route path="/about" element={<About />} />

          {/* ... Contact */}
          <Route 
            path="/contact" 
            element={
              <Contact
              phone="310-593-3780"
              email="jlsantia21@gmail.com"
              />
            } 
            />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
