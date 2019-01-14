import React from "react";
import {Paper, Table, TableBody, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TodoItem from "../TodoItem";
import TodoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";
import TodoTableToolbar from "./../TodoTableToolbar";
import "./style.scss";
import {action} from "mobx";

interface ITodoTableProps {
  todoStore: TodoStore;
}

@observer
export default class extends React.Component<ITodoTableProps> {

  render() {
    const {todoStore} = this.props;
    const {todos} = todoStore;

    return (
      <Paper className="paper">
        <TodoTableToolbar
          hintOnRecalculation={todoStore.isDirty}
          addHandler={() => this.showNewTodoDialog()}
          recalculateHandler={() => this.sortTodos()}
          todoStore={todoStore}

        />
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Done</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Urgency</TableCell>
              <TableCell align="center">Importance</TableCell>
              <TableCell align="center">Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) =>
              <TodoItem todo={todo}/>)}
          </TableBody>
        </Table>
      </Paper>
    );
  };

  @action
  sortTodos() {
    this.props.todoStore.sortTodos();
  }

  @action
  showNewTodoDialog() {
    this.props.todoStore.showNewTodoDialog = true;
  }
}
