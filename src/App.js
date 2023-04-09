import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { AllTours } from "./components/AllTours";


const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([])

  useEffect(() => {
axios.get(url).then((res)=> setTours(res.data))
  },[])

  const filterTour = (tit) => setTours(tours.filter((el)=> el.name !== tit))
  
  if(tours.length ===0){
    return<div>
      <h1>No tours left</h1>
      <button onClick={() => axios.get(url).then((res)=> setTours(res.data))}>Reset tours</button>
    </div>

  }

   

  return (
    <div className="wrapper">
      <AllTours tours={tours} filterTour={filterTour}/> 
      
    
    </div>
  );
}

export default App;
