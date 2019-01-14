import React, {Component} from "react";
import "./App.scss";
import TodoTable from "../TodoTable";
import TodoStore from "../../stores/TodoStore";
import DevTool from "mobx-react-devtools";
import NewTodoDialog from "../NewTodoDialog";

const tasks = [1, 2, 3, 4, 5].map((taskId) => {
    const importance = Math.floor(Math.random() * 10);
    const urgency = Math.floor(Math.random() * 10);
    return {
      id: taskId.toString(),
      description: `task ${taskId}`,
      importance,
      urgency,
      priority: importance + urgency,
      done: false
    };
  }
);

const todoStore = TodoStore.fromJS(tasks);

class App extends Component {
  public render() {
    return (
      <div className="App">
        <DevTool/>
        <div className="TodoTable">
          <h1>Let's get shit done today 🕗</h1>
          <br/>
          <TodoTable todoStore={todoStore}/>
        </div>
        <NewTodoDialog todoStore={todoStore}/>
      </div>
    );
  }
}

export default App;
