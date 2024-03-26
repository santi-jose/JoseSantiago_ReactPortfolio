import './contact.css'
// import duckling from '../../assets/duck_down.gif'
import maguey from '../../assets/maguey.png'
import { Link } from 'react-router-dom'

function Contact(props){
    const { phone, email, linkedIn, github } = props;

    return(
        <div className="contactWrapper">
            <div className="contactCard">
                <div className="magueyContainer">
                    <img src={maguey} alt="maguey pixel art png"/>
                </div>
                <div className="contactContent">
                    <h2>Jose Luis Santiago</h2>
                    <h3>Let's party up!</h3>
                    <p>Phone: { phone }</p>
                    <p>Email: <Link to={`mailto: ${email}`}>{ email }</Link></p>
                    <p>LinkedIn: <Link  to={ linkedIn }>{ linkedIn }</Link></p>
                    <p>Github: <Link to={ github }>{ github }</Link></p>
                </div>
            </div>
        </div>

        
    );
}

export default Contact;