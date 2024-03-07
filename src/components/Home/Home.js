import "./home.css";
// import duckling from "../../assets/duck_down.gif";
import rat from "../../assets/rat_walk_right.gif";
import pigeon from "../../assets/pigeon_fly.gif";
// import maguey from "../../assets/maguey.png";

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
            <img src={ rat }/>
        </div>
        <div className="welcomeMessage">
          <h2>Welcome Travelers!</h2>
          <p>
            My name is <span className="important">Jose Santiago</span>, but you
            can call me <span className="important">Santi</span>! I am an aspiring
            software engineer in the game development industry. This is my
            website.
          </p>
        </div>
        <div className="pigeonContainer">
          <img src={pigeon} alt="duckling pixel art gif" />
        </div>
      </div>
        <div className="projectCards">
            <div className="projectCard">
                <h3>Project 1</h3>
            </div>
            <div className="projectCard">
                <h3>Project 2</h3>
            </div>
            <div className="projectCard">
                <h3>Project 3</h3>
            </div>
            <div className="projectCard">
                <h3>Project 4</h3>
            </div>
            <div className="projectCard">
                <h3>Project 5</h3>
            </div>
            <div className="projectCard">
                <h3>Project 6</h3>
            </div>
        </div>
      {/* <div className="mobContainer">
        <div className="ratContainer">
          <img src={rat} alt="rat mob pixel art gif" />
        </div>
        <div className="magueyContainer">
          <img src={maguey} alt="maguey pixel art png" />
        </div>
        <div className="piegonContainer">
          <img src={pigeon} alt="pigeon mob pixel art gif" />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
