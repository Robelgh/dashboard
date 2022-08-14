import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./components/home";
import Test1 from "./components/test1";
import Test2 from "./components/test2";
import Test3 from "./components/test3";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/test1">Test 1</Link>
              </li>
              <li>
                <Link to="/test2">Test 2</Link>
              </li>
              <li>
                <Link to="/test3">Test 3</Link>
              </li>
            </ul>
            <hr />
            <Routes >
             
               <Route exact path="/home" component={Home} />
              <Route exact path="/test1" component={Test1} />
              <Route exact path="/test2" component={Test2} />
              <Route exact path="/test3" component={Test3} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;