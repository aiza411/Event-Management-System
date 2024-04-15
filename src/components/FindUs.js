import React from 'react';
import '../styles/FindUs.css'; // Import CSS file for "Find Us" styles

function FindUs() {
  return (
    <div className="map">
      <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1162496859597!2d106.82168631476957!3d-6.201136995498161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2b9c081ca9b%3A0x301cc88770c28d44!2sMonas!5e0!3m2!1sen!2sid!4v1647407253620!5m2!1sen!2sid" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
    </div>
  );
}

export default FindUs;
