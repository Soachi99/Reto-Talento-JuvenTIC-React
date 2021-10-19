import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/topbar';
import Carousel from './components/principalCarousel';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Carousel />
    </div>
  );
}

export default App;
