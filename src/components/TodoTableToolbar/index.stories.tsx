import React, {ChangeEvent} from "react";
import {storiesOf} from "@storybook/react";
import TodoTableToolbar from "./index";
import "./style.scss";
import TodoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";

const todoStore = new TodoStore();


storiesOf("TodoTableToolbar", module)
  .add("default", () =>
    // @ts-ignore
    <TodoTableToolbar recalculateHandler={() => {
    }} addHandler={() => {
    }}/>
  )
  .add("Recalulate hint", () =>
    // @ts-ignore
    <TodoTableToolbar
      hintOnRecalculation={true}
      recalculateHandler={() => {
      }}
      addHandler={() => {
      }}/>
  )
  .add("Add button wired", () =>

    <TodoTableToolbar
      recalculateHandler={() => {
        todoStore.showNewTodoDialog = false;
        alert("show dialog : " + todoStore.showNewTodoDialog);
      }}
      addHandler={() => {
        todoStore.showNewTodoDialog = true;
        alert("show dialog : " + todoStore.showNewTodoDialog);
      }}
      todoStore={todoStore}/>
  );
