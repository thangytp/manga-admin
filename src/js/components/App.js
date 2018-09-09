import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';



import Main from "./main/Main";

class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
    );
  }
}

export default App;
