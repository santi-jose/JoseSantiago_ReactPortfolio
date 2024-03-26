import "./home.css";
import { Link } from "react-router-dom";

// Asset imports
import rat from "../../assets/rat_walk_right.gif";
import pigeon from "../../assets/pigeon_fly.gif";
import GithubAppGif from "../../assets/GithubCloneApp.gif";
import PurgatoryGif from "../../assets/Purgatory.gif";
import ClassroomAvgGif from "../../assets/ClassroomAvgApp.gif";
import SensorsLabImg from "../../assets/CapacitiveTouchSensor_LP_Bridge_DiffAmp_LM555.png";
import WildfireAlarmImg from "../../assets/WildfireAlarm.png";
import DriveSMImg from "../../assets/lab7_drivesm.jpg";

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
          <img src={rat} alt="rat pixel art gif" />
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
          <Link 
            className="projectImgLink"
            to="https://santi-jose.github.io//PurgatoryExport/purgatory.html" 
            target="_blank"
          >
            <img
              className="projectCardImg"
              src={PurgatoryGif}
              alt="Purgatory Gameplay Demo Gif"
            />
          </Link>
        </div>
        <div className="projectCard">
          <h3>
            <Link 
              to="https://githubapiapp.onrender.com/"
              target="_blank"
            >
              GitHub Clone App
            </Link>
          </h3>
          <Link 
            className="projectImgLink"
            to="https://githubapiapp.onrender.com" 
            target="_blank"
          >
            <img
              className="projectCardImg"
              src={GithubAppGif}
              alt="Github App Demo Gif"
            />
          </Link>
        </div>
        <div className="projectCard">
          <h3>
            <Link 
              to="https://classroomavgreact.onrender.com/"
              target="_blank"
            >
              Classroom Average App
            </Link>
          </h3>
          <Link 
            className="projectImgLink"
            to="https://classroomavgreact.onrender.com" 
            target="_blank"
          >
            <img
              className="projectCardImg"
              src={ClassroomAvgGif}
              alt="Classroom Avg App Demo Gif"
            />
          </Link>
        </div>
        <div className="projectCard">
          <h3>
            <Link
              to="https://github.com/santi-jose/Sensing-SensorTechnologies"
              target="_blank"
            >
              Sensors and Sensing Tech Lab
            </Link>
          </h3>
          <Link
            className="projectImgLink"
            to="https://github.com/santi-jose/Sensing-SensorTechnologies"
            target="_blank"
          >
            <img
              className="projectCardImg"
              src={SensorsLabImg}
              alt="Sensors Lab Img"
            />
          </Link>
        </div>
        <div className="projectCard">
          <h3>
            <Link
              to="https://santi-jose.github.io/reports/CSE123_DesignDocument.pdf"
              target="_blank"
            >
              IoT Wildfire Alarm
            </Link>
          </h3>
          <Link
            className="projectImgLink"
            to="https://santi-jose.github.io/reports/CSE123_DesignDocument.pdf"
            target="_blank"
          >
            <img
              className="projectCardImg"
              src={WildfireAlarmImg}
              alt="Wildfire Alarm Img"
            />
          </Link>
        </div>
        <div className="projectCard">
          <h3>
            <Link
              to="https://github.com/santi-jose/LogicDesign/tree/main/Lab7"
              target="_blank"
            >
              Logic Design Lab
            </Link>
          </h3>
          <Link
            className="projectImgLink"
            to="https://github.com/santi-jose/LogicDesign/tree/main/Lab7"
            target="_blank"
          >
            <img
              className="projectCardImg"
              src={DriveSMImg}
              alt="Drive State Machine Img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
