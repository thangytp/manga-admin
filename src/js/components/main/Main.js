import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import FormContainer from "../container/FormContainer";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="container">
        	<h1>Test here</h1>
          	<FormContainer/>
        </div>
      </main>
    );
  }
}

export default Main;
