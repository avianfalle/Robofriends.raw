import React, { Component } from "react";
import CardList from "../src/components/CardList";
import SearchBox from "./SearchBox";
import Scroll from "../src/components/Scroll.js";
import ErrorBoundry from "./components/ErrorBoundry";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {this.setState({ robots: users })});
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      if (robots.length === 0) {                                                                    
        return <h1 className="tc">Loading</h1>
        } else {
          return (
            <div className="tc">
              <h1 className="f1">Robot Friends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <ErrorBoundry>
                  <CardList robots={filteredRobots}/>
                </ErrorBoundry>
              </Scroll>
            </div>)
          }
      }
    }

export default App;

