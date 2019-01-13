import * as React from "react";
import {Component} from "react";
import {Checkbox, Fab, TableCell, TableRow} from "@material-ui/core";
import {observer} from "mobx-react";
import {action, reaction} from "mobx";
import TodoModel from "../../models/TodoModel";
import "./index.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import SimpleSlider from "../SimpleSlider/index";

interface ITodoItemProps {
  todo: TodoModel
}

function withStrike(WrappedComponent: any, todo: TodoModel) {
  return class extends React.Component {
    constructor(props: any) {
      super(props);
    }

    render() {
      const {done} = todo;
      return <WrappedComponent align="center" className={done ? "strike" : ""} {...this.props} />;
    }
  };
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
    const {id, description, importance, urgency, priority, done} = todo;
    const TableCellWithStrike = withStrike(TableCell, todo);

    return (
      <TableRow key={id.toString()} className={[done ? "done" : "undone", "todo-item"].join(" ")}>
        <TableCellWithStrike>
          <div className="todo-action-flex">
            <div className="todo-done-checkbox">
              <Checkbox
                checked={done}
                onChange={this.handleToggle}
              />
            </div>
            <div className="todo-delete-icon">
              <DeleteIcon onClick={this.handleDelete}/>
            </div>
          </div>
        </TableCellWithStrike>
        <TableCellWithStrike>
          {description}
        </TableCellWithStrike>
        <TableCellWithStrike>
          <SimpleSlider defaultValue={urgency} handleChange={todo.setUrgency}/>
        </TableCellWithStrike>
        <TableCellWithStrike>
          <SimpleSlider defaultValue={importance} handleChange={todo.setImportance}/>
        </TableCellWithStrike>
        <TableCellWithStrike>
          {priority}
        </TableCellWithStrike>
      </TableRow>
    );
  }
};
