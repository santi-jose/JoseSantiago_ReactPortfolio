import './home.css'
import duckling from '../../assets/duck_down.gif'

function Home(){

    return(
        // Add elements inside here to visually indicate
        // that this component is rendering
        // Your Home page should greet your user and 
        // explain your role
        // Refer to your original portfolio
        <div>
            <h2>Jose Luis Santiago</h2>
            <img src={duckling}/>
            <p>
                My name is Jose Santiago, but you can call me Santi!
                I am an aspiring software engineer in the game development
                industry. This is my website.
            </p>
        </div>
    );
}

export default Home;