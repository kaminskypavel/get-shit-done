import {Table} from "reactstrap";
import React from "react";
import TodoItem from "../TodoItem";
import {ITodoTask} from "../../types/ITodoTask";

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
      <Table dark={true}>
        <thead>
        <tr>
          <th>Done</th>
          <th>Description</th>
          <th>Urgency</th>
          <th>Importance</th>
          <th>Priority</th>
        </tr>
        </thead>
        <tbody>
        {this.sortTasks(this.state.tasks).map((task) => (
          <TodoItem task={task}/>
        ))}
        </tbody>
      </Table>
    );
  };
}
