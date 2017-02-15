import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import ContactList from './containers/ContactList';
import ContactForm from './containers/ContactForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">React Apz</Link>
              </div>
            </div>
          </nav>
          <section className="container-fluid">
            <h2>Contacts Manager</h2>
            <div className="container">
              <Route exact path="/" component={ContactList} />
              <Route path="/new" component={ContactForm} />
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
