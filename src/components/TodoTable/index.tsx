import React from "react";
import TodoItem from "../TodoItem";
import {ITodoTask} from "../../types/ITodoTask";
import {Paper, Table, TableBody, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import "./style.scss";
import TodoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";

interface ITodoTableProps {
  todoStore: TodoStore;
}


@observer
export default class extends React.Component<ITodoTableProps> {

  private sortTasks(tasks: ITodoTask[]) {
    return tasks.slice().sort((task1, task2) => (task1.urgency + task1.urgency) - (task2.urgency + task2.urgency));
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
            {this.props.todoStore.todos.map((task) => (
              <TodoItem todo={task}/>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  };
}
