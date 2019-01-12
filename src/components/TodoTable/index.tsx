import React from "react";
import {Paper, Table, TableBody, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TodoItem from "../TodoItem";
import TodoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";
import "./style.scss";
import TodoModel from "../../models/TodoModel";

interface ITodoTableProps {
  todoStore: TodoStore;
}


@observer
export default class extends React.Component<ITodoTableProps> {

  private sortTasks(todo: TodoModel[]) {
    return [
      ...todo
        .filter((todo) => !todo.done)
        .sort((task1, task2) => (task1.urgency + task1.urgency) - (task2.urgency + task2.urgency)),
      ...todo
        .filter((todo) => todo.done)
    ];
  }

  render() {
    return (
      <Paper className="paper">
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>Done</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Urgency</TableCell>
              <TableCell>Importance</TableCell>
              <TableCell>Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.sortTasks(this.props.todoStore.todos).map((todo) => (
              <TodoItem todo={todo}/>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  };
}
