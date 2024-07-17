import { useState } from 'react';
import "./Cards.css"
// import Tours from './Tours';

function Cards({ id, source, price, name, info, removeTours }) {
  const [readmore, setReadmore] = useState(false);

  function handleReadmore() {
    setReadmore(!readmore);
  }


  return (
    <div className="card-container">
      <img className="card-image"  src={source} alt={`${name} image`} />
      <div className="card-content">
        <div className="tour-details">
          <h2>{name}</h2>
          <h3>{price}</h3>
        </div>
        <div className="tour-description">
          <p>
            {readmore ? info : `${info.substring(0, 100)}....`}
            <span onClick={handleReadmore} style={{ color: 'blue', cursor: 'pointer' }}>
              {readmore ? ' show less' : ' read more'}
            </span>
          </p>
        </div>
        <button onClick={()=>removeTours(id)} className='btn'>Not Interested</button>
      </div>
    </div>
  );
}

export default Cards;