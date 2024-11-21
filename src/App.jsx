import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>Tour Comparison App</h1>
          <nav className="app-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/gallery" className="nav-link">Tours</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Welcome To Your Tour Guide </h2>
      <p>Click on the button below to explore and compare available travel packages.</p>
      <nav className="home-nav">
        <Link to="/gallery" className="nav-button">Explore Tours</Link>
      </nav>
    </div>
  );
}

export default App;