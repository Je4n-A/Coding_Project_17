import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>Comparison App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/gallery">Tours</Link>
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
    <div>
      <h2>Welcome to Tour Comparison</h2>
      <p>Click on Tours to explore and compare available travle packages.</p>
      <nav className="home-nav">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/gallery" className="nav-button">Tours</Link>
      </nav>
    </div>
  );
}

export default App;