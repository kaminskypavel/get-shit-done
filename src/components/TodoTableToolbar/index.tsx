import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./style.scss";
import classnames from "classnames";
import TodoStore from "../../stores/TodoStore";

interface ITodoTableToolbarProps {
  addHandler: () => void;
  recalculateHandler: () => void;
  hintOnRecalculation?: boolean;
  todoStore: TodoStore;
}

class TodoTableToolbar extends Component<ITodoTableToolbarProps> {
  state = {
    hintOnRecalculation: this.props.hintOnRecalculation
  };

  render() {
    let {addHandler, recalculateHandler, todoStore} = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar className="toolbar-fabs">
            <Typography variant="h6" color="inherit">
              Actions
            </Typography>
            <div>
              <Fab
                variant="extended"
                color="default"
                onClick={() => addHandler}>
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
                Recalculate
              </Fab>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles({})(TodoTableToolbar);
