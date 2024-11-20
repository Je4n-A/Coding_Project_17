import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>Photo Gallery App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
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
      <h2>Welcome to the Photo Gallery App</h2>
      <p>Click on the Gallery link to view tours.</p>
    </div>
  );
}

export default App;