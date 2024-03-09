import "./home.css";
import { Link } from "react-router-dom";
import rat from "../../assets/rat_walk_right.gif";
import pigeon from "../../assets/pigeon_fly.gif";

function Home() {
  return (
    // Add elements inside here to visually indicate
    // that this component is rendering
    // Your Home page should greet your user and
    // explain your role
    // Refer to your original portfolio
    <div className="homeWrapper">
      <div className="welcomeContainer">
        <div className="ratContainer">
          <img src={rat} alt="rat pixel art gif"/>
        </div>
        <div className="welcomeMessage">
          <h2>Welcome Travelers!</h2>
          <p>
            My name is <span className="important">Jose Santiago</span>, but you
            can call me <span className="important">Santi</span>! I am an
            aspiring software engineer in the game development industry. This is
            my website.
          </p>
        </div>
        <div className="pigeonContainer">
          <img src={pigeon} alt="pigeon pixel art gif" />
        </div>
      </div>
      <div className="projectCards">
        <div className="projectCard">
          <h3>
            <Link
              to="https://santi-jose.github.io//PurgatoryExport/purgatory.html"
              target="_blank"
            >
              Purgatory
            </Link>
          </h3>
        </div>
        <div className="projectCard">
          <h3>Heavy Machinery E-commerce Website - Arrow</h3>
        </div>
        <div className="projectCard">
          <h3>ECE 167 Sensors and Sensing Technology: Lab 2</h3>
        </div>
        <div className="projectCard">
          <h3>CSE 123A/B Engineering Design Project: IoT Wildfire Alarm System</h3>
        </div>
        <div className="projectCard">
          <h3>ECE 141 Feedback Control Systems: Project 5</h3>
        </div>
        <div className="projectCard">
          <h3>CSE 100 Logic Design: Lab 7</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
