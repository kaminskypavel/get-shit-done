import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteSweep from "@material-ui/icons/DeleteSweep";
import classnames from "classnames";
import TodoStore from "../../stores/TodoStore";
import "./style.scss";
import {observer} from "mobx-react";

interface ITodoTableToolbarProps {
  addHandler: () => void;
  recalculateHandler: () => void;
  hintOnRecalculation?: boolean;
  todoStore: TodoStore;
}

@observer
class TodoTableToolbar extends Component<ITodoTableToolbarProps> {
  state = {
    hintOnRecalculation: this.props.hintOnRecalculation
  };

  render() {
    let {recalculateHandler} = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar className="toolbar-fabs">
            <Fab variant="extended"
                 color="default"
                 onClick={() => {
                   this.props.todoStore.emptyTodos();
                 }}>
              <DeleteSweep/>
              Reset
            </Fab>
            <div>
              <Fab
                variant="extended"
                color="default"
                onClick={() => this.props.addHandler()}>
                <AddIcon/>
                Add
              </Fab>
              <Fab variant="extended"
                   color="secondary"
                   className={classnames({"pulse": this.state.hintOnRecalculation})}
                   onClick={() => {
                     this.setState({hintOnRecalculation: false});
                     recalculateHandler();
                   }}>
                Prioritize
              </Fab>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles({})(TodoTableToolbar);
