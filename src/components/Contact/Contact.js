import './contact.css'

function Contact(props){
    const { phone, email } = props;

    return(
        <div>
            <h2>Contact Me!</h2>
            <p>Phone: { phone }</p>
            <p>Email: { email }</p>

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
        </div>

        
    );
}

export default Contact;