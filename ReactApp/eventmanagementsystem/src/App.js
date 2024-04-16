import "./App.css";

import Home from './Components/Home.js';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/franchise" element={<Franchise />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
