import Header from  './Component/Header/Header';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Navleft from './Component/Navleft/Navleft';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navleft />
        <Home />
      </Router>
    </div>
  );
}

export default App;
