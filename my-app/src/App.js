import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Continent } from './Components/Continent/Continent';
import { Country } from './Components/Country/Country';
import { CountryPlaces } from './Components/CountryPlaces.js/CountryPlaces';
import { TripDetails } from './Components/TripDetails/TripDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continent/>} />
        <Route path='/Country' element={<Country/>} />
        <Route path='/CountryPlaces' element={<CountryPlaces/>} />
        <Route path="/TripDetails" element={<TripDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
