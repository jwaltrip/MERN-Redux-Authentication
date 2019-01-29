import React, { Component } from 'react';
// import react router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import bootstrap css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import example post components
import PostContainer from './components/Post/PostContainer';
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNavbar />
          <Container>
            <Route exact path="/" component={ Home } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/posts" component={ PostContainer } />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
