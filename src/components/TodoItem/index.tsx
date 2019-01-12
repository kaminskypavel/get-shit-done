import * as React from "react";
import {Component} from "react";
import {Checkbox, TableCell, TableRow} from "@material-ui/core";
import {observer} from "mobx-react";
import {action} from "mobx";
import TodoModel from "../../models/TodoModel";
import "./index.scss";
import {Slider} from "@material-ui/lab";

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
      return <WrappedComponent className={done ? "strike" : ""} {...this.props} />;
    }
  };
}

@observer
export default class extends Component<ITodoItemProps> {

  @action
  handleToggle = () => {
    this.props.todo.toggle();
  };


  render() {
    const {id, description, importance, urgency, priority, done} = this.props.todo;
    const TableCellWithStrike = withStrike(TableCell, this.props.todo);

    return (
      <TableRow key={id.toString()} className={[done? 'done' : 'undone',"todo-item"].join(" ")}>
        <TableCellWithStrike>
          <Checkbox
            checked={done}
            onChange={this.handleToggle}
          />
        </TableCellWithStrike>
        <TableCellWithStrike>
          {description}
        </TableCellWithStrike>
        <TableCellWithStrike>
          {urgency}
          <Slider
            value={urgency}
            min={1}
            max={10}
            step={1}
            onChange={(event, value) => {
              console.log(event, value);
            }}
          />

        </TableCellWithStrike>
        <TableCellWithStrike>
          {importance}
        </TableCellWithStrike>
        <TableCellWithStrike>
          {priority}
        </TableCellWithStrike>
      </TableRow>
    );
  }
};
