import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section">
      <h2>Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p>Feel free to reach out for collaborations, project inquiries, or opportunities. I'd be happy to connect!</p>

          <div className="info-item">
            <strong><i className="fa-solid fa-envelope"></i> Email:</strong>
            <span>lavishkadhamija@gmail.com</span>
          </div>

          <div className="info-item">
            <strong><i className="fa-solid fa-phone"></i> Mobile:</strong>
            <span>+91-9817782840</span>
          </div>

          <div className="info-item">
            <strong><i className="fa-solid fa-location-dot"></i> Location:</strong>
            <span>Delhi, India</span>
          </div>

          <div className="info-item">
            <strong><i className="fa-brands fa-instagram"></i> Instagram:</strong>
            <a href="https://instagram.com/lavishkaaa_15" target="_blank" rel="noopener noreferrer">
              @lavishkaaa_15
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/LavishkaDhamija" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/lavishkaaa_15" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;