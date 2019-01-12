import * as React from "react";
import {Component} from "react";
import {ITodoTask} from "../../types/ITodoTask";
import {Checkbox, TableCell, TableRow} from "@material-ui/core";

interface ITodoItemProps {
  task: ITodoTask
}

export default class extends Component<ITodoItemProps> {
  render() {
    const {id, description, importance, urgency, priority, done} = this.props.task;
    return (
      <TableRow key={id.toString()}>
        <TableCell>
          <Checkbox
            checked={done}
            onChange={() => {
              alert(this.props.task.done);
              console.log(this.props);
            }}
          />
        </TableCell>
        <TableCell>
          {description}
        </TableCell>
        <TableCell>
          {urgency}
        </TableCell>
        <TableCell>
          {importance}
        </TableCell>
        <TableCell>
          {priority}
        </TableCell>
      </TableRow>
    );
  }
};
