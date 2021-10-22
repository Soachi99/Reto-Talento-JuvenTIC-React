import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topbar from './components/topbar';
import Carousel from './components/Inicio/principalCarousel';
import Nosotros from './components/Inicio/ourPurpose';
import Recomendaciones from './components/Inicio/bestFood';
import Eventos from './components/Inicio/events';
import Comentarios from './components/Inicio/commentaries';

import Productos from './components/Menú/productsContainer';

import Carrito from './components/Carrito/cartContainer';

import Contacto from './components/Contacto/Contacto';

import EnviarContacto from './components/Contacto/EnviarContacto'


function App() {
  return (
    <div className="App">
      <Topbar />
      <Router>
        <Switch>
          <Route path="/carrito">
            <Carrito />
          </Route>

          <Route path="/menu">
            <Productos />
          </Route>

          <Route path="/nosotros">
            <Comentarios />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>

          <Route path="/enviar-contacto">
            <EnviarContacto />
          </Route>

          <Route path="/">
            <Carousel />
            <Nosotros />
            <Recomendaciones />
            <Eventos />
            <Comentarios />
          </Route>




        </Switch>
      </Router>

    </div>
  );
}

export default App;
