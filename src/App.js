import React from 'react';
import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import FindUs from './components/FindUs';
import NewsLetter from './components/NewsLetter';
import MenuPage from './components/MenuPage'; // Import the MenuPage component

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* Render ContactForm, FindUs, and NewsLetter components */}
        <ContactForm />
        <hr />
        <FindUs />
        <hr />
        <NewsLetter />
        
        {/* Render MenuPage component */}
        <MenuPage />
      </div>
    </div>
  );
}

export default App;
