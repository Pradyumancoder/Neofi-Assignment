import './App.css';
import { Routes } from './routes/';
import { cryptocurrencies } from './data';
import { Footer, Nav } from './components';

function App() {
  return (
    <div className="h-screen min-h-screen flex flex-col">
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
