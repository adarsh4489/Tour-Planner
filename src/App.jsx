import './App.css';
import data from './data';
import Tours from './Components/Tours';
import Heading from './Components/Heading.jsx';
import { useState } from 'react';


export default function App() {
  
  const [tours,setTours]=useState(data);
  
  function removeTours(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length===0)
  {
    return (
      <div className='notour'>
      <h2>No Tours Left</h2>
        <button className='btn' onClick={()=>{setTours(data)}}>Refresh</button>
      </div>
    )
  }
  
  return (
    <main className='container'>
      <Heading/>
     <Tours tours={tours} removeTours={removeTours}></Tours>

    </main>  
  )
}
