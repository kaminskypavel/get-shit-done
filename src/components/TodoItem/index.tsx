import * as React from "react";
import {Component} from "react";
import {Checkbox, TableCell, TableRow, Tooltip, Typography} from "@material-ui/core";
import {observer} from "mobx-react";
import {action} from "mobx";
import TodoModel from "../../models/TodoModel";
import DeleteIcon from "@material-ui/icons/Delete";
import SimpleSlider from "../SimpleSlider";
import styled from "styled-components";

const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  align: "left";

  :hover {
    color: black;
  }
`;

const StrikableText = styled.div`
  text-decoration: ${(props: any) => (props.strike ? "line-through" : "none")};
` as any;

interface ITodoItemProps {
  todo: TodoModel;
}

@observer
export default class extends Component<ITodoItemProps> {
  @action
  handleToggle = () => {
    this.props.todo.toggle();
  };

  @action
  handleDelete = () => {
    this.props.todo.remove();
  };

  render() {
    const {todo} = this.props;
    const {description, impact, urgency, easiness, priority, done} = todo;

    return (
      <TableRow>
        <TableCell>
          <ActionButtons>
            <Tooltip title="mark as done">
              <Checkbox checked={done} onChange={this.handleToggle} />
            </Tooltip>
            <Tooltip title="delete todo">
              <DeleteButton>
                <DeleteIcon onClick={this.handleDelete} />
              </DeleteButton>
            </Tooltip>
          </ActionButtons>
        </TableCell>
        <TableCell>
          <StrikableText strike={todo.done}>{description}</StrikableText>
        </TableCell>
        <TableCell>
          <SimpleSlider defaultValue={urgency} handleChange={todo.setUrgency} disabled={done} />
        </TableCell>
        <TableCell>
          <SimpleSlider defaultValue={impact} handleChange={todo.setImpact} disabled={done} />
        </TableCell>
        <TableCell>
          <SimpleSlider defaultValue={easiness} handleChange={todo.setEasiness} disabled={done} />
        </TableCell>
        <Tooltip title="priority = impact + urgent + easiness" aria-label="Add">
          <TableCell>
            <Typography color={"secondary"} variant={"h5"}>
              {priority}
            </Typography>
          </TableCell>
        </Tooltip>
      </TableRow>
    );
  }
}
