import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx'
import History from './components/History.jsx'
import Team from './components/Team.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/team" component={Team} />
      </Switch>
    </div>

  );
}

export default App;
