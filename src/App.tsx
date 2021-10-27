import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark ">
      <Router >
        <Nav />
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:projectName" component={Project} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
