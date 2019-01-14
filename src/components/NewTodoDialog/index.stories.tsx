import React, {ChangeEvent} from "react";
import {storiesOf} from "@storybook/react";
import NewTodoDialog from "./index";
import TodoStore from "../../stores/TodoStore";
import {Button} from "@material-ui/core";
import {inject, Observer, observer} from "mobx-react";

const todoStore = new TodoStore();
todoStore.addTodo("task1", 5, 5);
todoStore.addTodo("task2", 6, 4);


const listableHOC = (component: JSX.Element) => (
  <div>
    <Button
      variant="contained"
      color="primary"
      onClick={() => todoStore.showNewTodoDialog = true}>
      Open Dialog
    </Button>
    {component}
    <ul>
      {todoStore.todos.map((e, i) => <li key={i}>{JSON.stringify(e.toJS())}</li>)}
    </ul>
  </div>);


storiesOf("NewTodoDialog", module)
  .add("add", () =>
    listableHOC(<NewTodoDialog todoStore={todoStore}/>)
  );
