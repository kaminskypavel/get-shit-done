import React from "react";
import {Paper, Table, TableBody, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TodoItem from "../TodoItem";
import TodoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";
import TodoTableToolbar from "./../TodoTableToolbar";
import "./style.scss";

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
        <Table className="table" style={{tableLayout: 'auto'}}>
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{width:'10%'}} >Done</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left" style={{width:'15%'}}>Urgency</TableCell>
              <TableCell align="left" style={{width:'15%'}}>Impact</TableCell>
              <TableCell align="left" style={{width:'10%'}}>Priority</TableCell>
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

  sortTodos() {
    this.props.todoStore.sortTodos();
  }

  showNewTodoDialog() {
    this.props.todoStore.showNewTodoDialog = true;
  }
}
