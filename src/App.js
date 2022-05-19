import './App.css';
import Navbar from './components/Navbar';
import Data from './Data';
import Card from './components/Card';

function App() {
  let travelCard;
  travelCard = Data.map((place, id) => {
    return <Card key={id} {...place} />;
  });
  return (
    <div className='App'>
      <Navbar />
      <section className='travel-cards'>{travelCard}</section>
    </div>
  );
}

export default App;
