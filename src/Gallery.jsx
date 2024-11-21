// Gallery.jsx
import { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://course-api.com/react-tours-project', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setTours(data.map(tour => ({ ...tour, showMore: false })));
      setError(null);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(`Failed to fetch tours: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const toggleReadMore = (id) => {
    setTours(tours.map((tour) => 
      tour.id === id ? { ...tour, showMore: !tour.showMore } : tour
    ));
  };

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={fetchTours}>Retry</button>
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="empty-tours">
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh Tours</button>
      </div>
    );
  }

  return (
    <div className="gallery">
      <h2>Our Tours</h2>
      <div className="gallery-grid">
        {tours.map((tour) => (
          <div key={tour.id} className="gallery-item">
            <img 
              src={tour.image} 
              alt={tour.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300';
              }}
            />
            <div className="tour-info">
              <h3>{tour.name}</h3>
              <p className="tour-price">${tour.price}</p>
              <p>
                {tour.showMore ? tour.info : `${tour.info.substring(0, 200)}...`}
                <button 
                  className="read-more-btn" 
                  onClick={() => toggleReadMore(tour.id)}
                >
                  {tour.showMore ? 'Show Less' : 'Read More'}
                </button>
              </p>
              <button 
                className="delete-btn" 
                onClick={() => removeTour(tour.id)}
              >
                Not Interested
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;