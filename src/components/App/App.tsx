import React, {Component} from "react";
import "./App.scss";
import TodoTable from "../TodoTable";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <div className="TodoTable">
          <h1>Today's Tasks 🕗</h1>
          <br/>
          <TodoTable/>
        </div>
      </div>
    );
  }
}

export default App;
