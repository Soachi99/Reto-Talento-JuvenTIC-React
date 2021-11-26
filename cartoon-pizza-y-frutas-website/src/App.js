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

import { useAuth0 } from "@auth0/auth0-react";
import NoAutorizado from './components/Admin/NoAuthorized';
import LoadingPage from './components/Admin/Loadingpage';

function App() {
  const Auth = useAuth0().isAuthenticated;
  const AuthLoading = useAuth0().isLoading;

  
    return (
      <div className="App">
         {!AuthLoading && <Topbar />}
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
              {Auth && <MostrarContacto />}
              {AuthLoading && <LoadingPage />}
              {!Auth && <NoAutorizado />}
            </Route>

            <Route path="/admin/servicios">
            {Auth &&<GestorServicios />}
            {AuthLoading && <LoadingPage />}
            {(!Auth && !AuthLoading) && <NoAutorizado />}
            </Route>

            <Route path="/admin/platos">
            {Auth &&<GestorPlatos />}
            {AuthLoading && <LoadingPage />}
            {(!Auth && !AuthLoading)  && <NoAutorizado />}
            </Route>

            <Route path="/admin/reservas">
            {Auth &&<MostrarReserva />}
            {AuthLoading && <LoadingPage />}
            {(!Auth && !AuthLoading)  && <NoAutorizado />}
            </Route>

            <Route path="/admin/personal">
            {Auth &&<Personal />}
            {AuthLoading && <LoadingPage />}
            {(!Auth && !AuthLoading)  && <NoAutorizado />}
            </Route>

            <Route path="/admin/pedidos">
            {Auth &&<HistorialPedidos />}
            {AuthLoading && <LoadingPage />}
            {(!Auth && !AuthLoading)  && <NoAutorizado />}
            </Route>

            <Route path="/admin">
            {Auth && <Bienvenido />}
            {AuthLoading && <LoadingPage />}
            {(!Auth && !AuthLoading) && <NoAutorizado />}
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

        {!AuthLoading && <LoginButton />}
        {!AuthLoading && <Footer />}

      </div>
    ); 
      


}

export default App;
