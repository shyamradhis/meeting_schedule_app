import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <section>
      <h2>Contact</h2>
      <div className="social-media-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
