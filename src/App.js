import Form from './components/form.js'
import './App.css';
import Map from './components/map.js'
import { useState ,useEffect} from "react";


function App() {
  const [places, setPlaces] = useState([]);
  // Load data from localStorage when the component loads
    useEffect(() => {
      const savedPlaces = localStorage.getItem("places");
      if (savedPlaces) {
        setPlaces(JSON.parse(savedPlaces));
      }
    }, []);

    useEffect(()=>{
      const savedPlaces = localStorage.getItem("places");
      if (savedPlaces) {
        setPlaces(JSON.parse(savedPlaces));
      }
    },[places])

  return (
    <h1> Wheather on weels
      <div className="App">
      <Form places={places} setPlaces={setPlaces}/>
      <h3>
        This is the places you saved
      </h3>
      <Map places={places}/>
    </div>
  </h1>
    
  );
}

export default App;
