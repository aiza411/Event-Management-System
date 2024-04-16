import React from 'react';
import '../styles/ContactForm.css'; // Import CSS file for contact form styles

function ContactForm() {
  return (
    <div className="form">
      <form action="#" method="post">
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" required /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br />
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" rows="4" required></textarea><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;
