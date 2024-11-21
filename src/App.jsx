import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

/**
 * Main App component that handles routing and layout
 * Uses React Router for navigation between Home and Gallery pages
 * @returns {JSX.Element} The main application component
 */

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

/**
 * Home component displaying the landing page
 * Contains welcome message and navigation to tours
 * @returns {JSX.Element} The home page component
 */

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