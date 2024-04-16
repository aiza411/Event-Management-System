import React from 'react';
import '../styles/NewsLetter.css'; // Import CSS file for newsletter styles

function NewsLetter() {
  return (
    <div>
      <h2>Subscribe to Our NewsLetter</h2>
      <form action="#" method="post" className="newsLetter-form">
        <input type="email" name="email" placeholder="Your Email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsLetter;
