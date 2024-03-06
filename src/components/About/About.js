import "./about.css";
import duckling from "../../assets/duck_down.gif";

function About() {
  const Summary = () => {
    return (
      <div>
        <section className="aboutWrapper">
          <div className="introMission">
            <div className="heroContainer">
              <div className="ducklingContainer">
                <img src={duckling} />
              </div>

              <div className="heroParagraph">
                <h2>About Me</h2>
                <p>These are random words I will figure out later</p>
              </div>
            </div>
          </div>

          <div className="expTool">
            <div className="expCards">
              <div className="expCard">
                <h3>Embedded Programming</h3>
                <p>This is where I talk about embedded programming.</p>
              </div>

              <div className="expCard">
                <h3>Web Development</h3>
                <p>This is where I talk about web development.</p>
              </div>

              <div className="expCard">
                <h3>Game Development</h3>
                <p>This is where I talk about game development.</p>
              </div>
            </div>
          </div>

          <div className="clientWork">
            <h2>Client Work</h2>
            <div className="clientCards">
                <div className="clientCard">
                    <h3>Client Focus</h3>
                </div>
                <div className="clientCard">
                    <h3>Value Proposition</h3>
                </div>
                <div className="clientCard">
                    <h3>Commitment to Quality</h3>
                </div>
                <div className="clientCard">
                    <h3>Client Centric Approach</h3>
                </div>
            </div>
          </div>

          <div className="education">
            <h2>Education</h2>
            <div className="educationCards">
                <div className="educationCard">
                    <h3>B.S. Computer Engineering - UC Santa Cruz</h3>
                </div>
                <div className="educationCard">
                    <h3>Web Development Fellowship - The Knowledge House</h3>
                </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div>
      <Summary />
    </div>
  );
}

export default About;
