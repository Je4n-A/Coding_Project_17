// Gallery.jsx
import { useState, useEffect } from 'react';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const toggleReadMore = (id) => {
    setTours(tours.map((tour) => {
      if (tour.id === id) {
        return { ...tour, showMore: !tour.showMore };
      }
      return tour;
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="gallery">
      <h2>Tour List</h2>
      <div className="gallery-grid">
        {tours.map((tour) => (
          <div key={tour.id} className="gallery-item">
            <img src={tour.image} alt={tour.name} />
            <div className="tour-info">
              <h3>{tour.name}</h3>
              <p>${tour.price}</p>
              <p>
                {tour.showMore ? tour.info : `${tour.info.substring(0, 100)}...`}
                <button onClick={() => toggleReadMore(tour.id)}>
                  {tour.showMore ? 'Show Less' : 'Read More'}
                </button>
              </p>
              <button onClick={() => removeTour(tour.id)}>Not Interested</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;