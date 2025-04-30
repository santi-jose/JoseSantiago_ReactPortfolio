import "./about.css";
import duckling from "../../assets/duck_down.gif";

function About() {
  const Summary = () => {
    return (
      <div className="aboutWrapper">
        <div className="introMission">
          <div className="heroContainer">
            <div className="ducklingContainer">
              <img src={duckling} alt="duckling pixel art gif" />
            </div>

            <div className="heroParagraph">
              <h2>About Me</h2>
              <p>
                My name is <span className="important">Jose Luis Santiago</span>
                and I am a Computer Engineering graduate from UCSC with a
                background in Embedded Systems and Web Development. I received 
                a certification in Web Development from The Knowledge House in 
                October 2024. My preferred programming languages are C++ and
                JavaScript. One accomplishment I am proud of is how I led a
                group of 3 to complete a full stack e-commerce website within a
                1-month timeframe.
              </p>
              <p>
                Inspired by a childhood love for games, I’m eager to apply my
                technical skills to a role where my patience and competitive
                nature can drive impactful solutions. I aim to inspire others
                the way video games inspired me.
              </p>
            </div>
          </div>
        </div>

        <div className="education">
          <h2>Education</h2>
          <div className="educationCards">
            <div className="educationCard">
              <h3>
                B.S. Computer Engineering: Robotics and Control - UC Santa Cruz
              </h3>
            </div>
            <div className="educationCard">
              <h3>Web Development Fellow - The Knowledge House</h3>
            </div>
          </div>
        </div>

        <div className="expTool">
          <div className="expCards">
            <div className="expCard">
              <h3>Embedded Programming</h3>
              <p>
                I received a B.S. in Computer Engineering with a concentration 
                in Robotics and Control from UCSC on June 14th 2021. I learned advanced
                programming in C++ and Embedded Programming in C. My senior
                capstone was an IoT device which monitored parameters indicative
                of wildfire risk. I was on the hardware team responsible for
                implementing the microcontroller and sensors.
              </p>
            </div>

            <div className="expCard">
              <h3>Web Development</h3>
              <p>
                I was introduced to Web Development after graduating from
                college via a 1 month internship with a startup, Arrow. I led a
                3-intern group to create an MVP of an e-commerce website for
                heavy machinery. By the end of the month we successfully created
                a prototype with Stripe API implementation. I received a 
                certification in Web Development from The Knowledge House in
                October 2024.
              </p>
            </div>

            <div className="expCard">
              <h3>Game Development</h3>
              <p>
                Video games are what sparked my curiosity for technology and led
                to my journey in tech. I want to create a game that moves people
                the way games like Super Mario World and Pokemon moved me. Since
                graduating I've been working on an independent game project as
                the sole developer. The title of the game is Purgatory. It is a
                pixel art RPG of a typical hero's journey.
              </p>
            </div>
          </div>
        </div>

        <div className="clientWork">
          <h2>Client Work</h2>
          <div className="clientCards">
            <div className="clientCard">
              <h3>Client Focus</h3>
              <p>
                My focus is to maintain open and honest communication with my
                clients.
              </p>
            </div>
            <div className="clientCard">
              <h3>Value Proposition</h3>
              <p>
                I am a multi-disciplinary developer who has potential for
                growth. I will adapt and learn what I need to to get the job
                done.{" "}
              </p>
            </div>
            <div className="clientCard">
              <h3>Commitment to Quality</h3>
              <p>
                I'm a detail oriented worker who knows every detail matters. In
                embedded systems every bit matters, in pixel art every pixel
                matters. I appreciate the tedious work and look forward to
                putting the pieces together to make something great.{" "}
              </p>
            </div>
            <div className="clientCard">
              <h3>Client Centric Approach</h3>
              <p>
                As a developer I put my clients needs first. I strive to exceed
                their expectations in every way.
              </p>
            </div>
          </div>
        </div>
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
