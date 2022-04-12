import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import NotFound from './pages/not_found';
import Projects from './pages/projects';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/projects" component={ Projects } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
