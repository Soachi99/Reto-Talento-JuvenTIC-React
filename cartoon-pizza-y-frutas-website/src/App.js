import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topbar from './components/Inicio/topbar';
import Carousel from './components/Inicio/principalCarousel';
import Nosotros from './components/Inicio/ourPurpose';
import Recomendaciones from './components/Inicio/bestFood';
import Eventos from './components/Inicio/events';
import Comentarios from './components/Inicio/commentaries';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Router>
        <Switch>
          <Route path="/nosotros">
            <Comentarios />
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
