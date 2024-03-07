import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

// Navbar component
function Navbar(){
    // state to keep track of where to put arrow in 
    const [arrow, setArrow] = React.useState();

    function handleClick(e){
        console.log(`Element ${e.target.id} clicked`);

        setArrow(e.target.id);
    }

    console.log(`Arrow: ${arrow}`);

    let home = arrow === 'home' ? '>Home' : 'Home';
    let about = arrow === 'about' ? '>About' : 'About';
    let contact = arrow === 'contact' ? '>Contact': 'Contact'; 

    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" id="home" onClick={handleClick}>{home}</Link>
          </li>
          <li>
            <Link to="/about" id="about" onClick={handleClick}>{about}</Link>
          </li>
          <li>
            <Link to="/contact" id="contact" onClick={handleClick}>{contact}</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;