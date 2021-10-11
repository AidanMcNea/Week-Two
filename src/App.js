
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import Content from './Components/content';
import Read from './Components/read';
import Create from './Components/create';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route path="/read">
              <Read></Read>
            </Route>
            <Route path="/create">
             <Create></Create>
            </Route>
            <Route path="/">
              <Content />
            </Route>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
