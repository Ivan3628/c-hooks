import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import Posts from "./components/Posts";
//import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
// "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
