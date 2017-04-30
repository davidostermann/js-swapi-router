import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home, List, ListItem} from './components';

class App extends Component {

  state = {
    persos: null
  }

  componentDidMount() {
    fetch('http://swapi.co/api/people')
    .then((response) => response.json())
    .then( json => {
      this.setState({persos: json.results});
    });
  }
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <Link to='/'>Home</Link>
          <Link to="/list">List</Link>
        </div>
        <div className="App-content">
          {
            this.state.persos ?
            <Switch>
              <Route exact path="/" component={Home}/>

              <Route exact path="/list" render={() =>
                <List persos={this.state.persos} />
              }/>

              <Route path="/list/:index(\d+)" render={({match}) =>
                 (match.params.index < this.state.persos.length) ?
                 <ListItem perso={this.state.persos[match.params.index]} /> :
                 <h1>This character does not exists</h1>
              }/>

              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
            : <h1>Loading...</h1>
          }
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
