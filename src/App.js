import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import About from "./components/About";
import NotFound from "./components/NotFound";
import PostState from "./context/post/PostState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// "./App.css";

const App =()=> {
  
    return (
      <PostState>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/add" component={AddPost} />
                <Route exact path="/edit/:id" component={EditPost} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </PostState>
    );
  
}

export default App;
