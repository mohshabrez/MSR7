import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Continent } from './Components/Continent/Continent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continent/>} />
      </Routes>
    </div>
  );
}

export default App;
