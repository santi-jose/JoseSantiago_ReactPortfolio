import './contact.css'

function Contact(props){
    const { phone, email } = props;

    return(
        <div className="backgroundContainer">
            <h2>Contact Me!</h2>
            <p>Phone: { phone }</p>
            <p>Email: { email }</p>
        </div>
    );
}

export default Contact;