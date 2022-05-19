import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Data from './Data';

function App() {
  let travelCard;
  travelCard = Data.map(place, (id) => {
    return <place key={id} {...place} />;
  });
  return (
    <div className='App'>
      <Navbar />
      {travelCard}
    </div>
  );
}

export default App;
