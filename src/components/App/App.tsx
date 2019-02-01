import React, {Component} from "react";
import TodoTable from "../TodoTable";
import TodoStore from "../../stores/TodoStore";
import NewTodoDialog from "../NewTodoDialog";
import "./App.scss";

const todoStore = new TodoStore();

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header>
          <div className="chanelog">
            <ul>
              <h3>New features 🔔</h3>
              <li>01-02-2019 : rename "Importance" to "Impact" + add "Easiness" toggle</li>
              <li>31-01-2019 : Added auto save and load, so no worries on refresh</li>
              <li>22-01-2019 : New print button</li>
              <br/>
              <small>have more features request? submit to
                <a href="http://www.pavel-kaminsky.com"> Pavel 'PK' Kaminsky</a>
              </small>
            </ul>
          </div>

        </header>
        {/*<DevTool/>*/}
        <div className="TodoTable">
          <h1>Let's get shit done today 🕗</h1>
          <br/>
          <TodoTable todoStore={todoStore}/>
        </div>
        <NewTodoDialog todoStore={todoStore}/>
        <footer>
          <span color={"secondary"}>
            <p className="footer">
              Made with
              <span id="heart"> ♥</span> by
              <b> <a href="http://www.pavel-kaminsky.com">Pavel 'PK' Kaminsky</a></b>
            </p>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
