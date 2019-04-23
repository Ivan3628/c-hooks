import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Posts from "./components/Posts";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <div className="container">
                <Route exact path="/" component={Posts} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </div>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
