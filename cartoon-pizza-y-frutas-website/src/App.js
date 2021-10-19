import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Inicio/topbar';
import Carousel from './components/Inicio/principalCarousel';
import Nosotros from './components/Inicio/nuestraPropuesta';
import Recomendaciones from './components/Inicio/bestFood';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Carousel />
      <Nosotros />
      <Recomendaciones />
    </div>
  );
}

export default App;
