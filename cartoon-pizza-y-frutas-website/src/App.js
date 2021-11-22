import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topbar from './components/topbar';
import Carousel from './components/Inicio/principalCarousel';
import Nosotros from './components/Inicio/ourPurpose';
import Recomendaciones from './components/Inicio/bestFood';
import Eventos from './components/Inicio/events';
import Comentarios from './components/Inicio/commentaries';

import AboutUs from './components/Nosotros/AboutUs';

import Productos from './components/Menú/productsContainer';

import Carrito from './components/Carrito/cartContainer';

import Contacto from './components/Contacto/Contacto';

import EnviarContacto from './components/Contacto/EnviarContacto';
import MostrarContacto from './components/Contacto/MostrarContacto';

import LoginButton from './components/Admin/login';
import Bienvenido from './components/Admin/bienvenido';

import HistorialPedidos from './components/Admin/ordersHistorial';

import Reserva from './components/Reserva/Reserva';
import MostrarReserva from './components/Reserva/MostrarReserva';

import Footer from './components/footer';
import Servicios from './components/Servicios/eventsContainer';
import GestorPlatos from './components/Admin/gestorPlatos';
import GestorServicios from './components/Admin/gestorServicios';
import Personal from './components/Admin/Personal';


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
            <AboutUs />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>

          <Route path="/servicios">
            <Servicios />
          </Route>

          <Route path="/reserva">
            <Reserva />
          </Route>

          <Route path="/enviar-contacto">
            <EnviarContacto />
          </Route>

          <Route path="/admin/preguntas">
            <MostrarContacto />
          </Route>

          <Route path="/admin/servicios">
            <GestorServicios />
          </Route>

          <Route path="/admin/platos">
            <GestorPlatos />
          </Route>

          <Route path="/admin/reservas">
            <MostrarReserva />
          </Route>

          <Route path="/admin/personal">
            <Personal />
          </Route>

          <Route path="/admin/pedidos">
            <HistorialPedidos />
          </Route>

          <Route path="/admin">
            <Bienvenido />
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

      <LoginButton />
      <Footer />

    </div>
  );
}

export default App;
