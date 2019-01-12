import React from "react";
import TodoItem from "../TodoItem";
import {ITodoTask} from "../../types/ITodoTask";
import {Paper, Table, TableBody, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import "./style.scss";

interface ITodoTableState {
  tasks: ITodoTask[];
}

export default class extends React.Component<{}, ITodoTableState> {
  state = {
    tasks: [1, 2, 3, 4, 5]
      .map((taskId) => {
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
      )
  };

  private sortTasks(tasks: ITodoTask[]) {
    return tasks.sort((task1, task2) => (task1.urgency + task1.urgency) - (task2.urgency + task2.urgency));
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
            {this.sortTasks(this.state.tasks).map((task) => (
              <TodoItem task={task}/>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  };
}
