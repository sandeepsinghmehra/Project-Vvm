import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Detail from './component/Detail';
import About from './component/About';
import Home from './component/Home';
import Artists from './component/Artists';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/about" exact component={About} /> 
        <Route path="/artists" exact component={Artists} />
      </Switch>
    </Router>
  );
}

export default App;
