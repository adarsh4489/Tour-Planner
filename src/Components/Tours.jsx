import Cards from "./Cards.jsx";
import './Tours.css';

function Tours({ tours, removeTours }) {
  return (
    <div className="tours-container">
      {tours.map((tour) => (
      
        <Cards key={tour.id}{...tour} removeTours={removeTours} />
      ))}
    </div>
  );
}

export default Tours;
