import React, {Component} from "react";
import TodoTable from "../TodoTable";
import TodoStore from "../../stores/TodoStore";
import NewTodoDialog from "../NewTodoDialog";
import "./App.scss";

const generateTodo = (description: string, importance: number, urgency: number) => ({
  description,
  importance,
  urgency,
  priority: importance * urgency,
  done: false
});

const todoStore = TodoStore.fromJS([
  generateTodo("Buy Flowers", 3, 6),
  generateTodo("Call Customer", 9, 9),
  generateTodo("Feed The Cat", 8, 2)
]);

class App extends Component {
  public render() {
    return (
      <div className="App">
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
              Made in Tel-Aviv with
              <span id="heart">♥</span> by
              <b> <a href="http://www.pavel-kaminsky.com">Pavel 'PK' Kaminsky</a></b>
            </p>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
