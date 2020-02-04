import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteSweep from "@material-ui/icons/DeleteSweep";
import PrintRounded from "@material-ui/icons/PrintRounded";
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
    const {recalculateHandler} = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar className="toolbar-fabs">
            <Fab variant="extended" color="default" onClick={() => this.props.addHandler()}>
              <AddIcon />
              Add
            </Fab>
            <div>
              <Fab
                variant="extended"
                color="default"
                onClick={() => {
                  if (confirm("This will delete all the selected tasks.\nAre you sure?")) {
                    this.props.todoStore.emptyTodos();
                  }
                }}
              >
                <DeleteSweep />
                Delete
              </Fab>
              <Fab
                variant="extended"
                color="default"
                onClick={() => {
                  window.print();
                }}
              >
                <PrintRounded />
              </Fab>
              <Fab
                variant="extended"
                color="secondary"
                className={classnames({pulse: this.state.hintOnRecalculation})}
                onClick={() => {
                  this.setState({hintOnRecalculation: false});
                  recalculateHandler();
                }}
              >
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
