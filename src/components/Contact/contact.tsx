import "../Contact/contact.css";

export function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">GET IN TOUCH!</div>

      <div className="contact-card">
        <div className="image"></div>
        <div className="card-info">
          <span>Maria Olivia</span>
          <p>FullStack Developer</p>
        </div>
        <a href="https://www.instagram.com/marowyck/" target="_blank" className="button">
          CONTACT ME
        </a>
      </div>
    </div>
  );
}

export default Contact;
