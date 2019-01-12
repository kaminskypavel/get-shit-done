import {Button} from "reactstrap";
import * as React from "react";
import Input from "reactstrap/lib/Input";
import {ITodoTask} from "../../types/ITodoTask";

interface ITodoItemProps {
  task: ITodoTask
}

export default ({task}: ITodoItemProps) => {
  const {description, importance, urgency, priority, done} = task;
  return (
    <tr>
      <th>
        <Input type={"checkbox"} checked={done}/>
      </th>
      <td>
        {description}
      </td>
      <td>
        {urgency} </td>
      <td>
        {importance}
      </td>
      <td>
        {priority}
      </td>
    </tr>
  );
};
