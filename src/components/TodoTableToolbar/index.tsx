import React, {Component, ComponentType} from "react";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar, {ToolbarProps} from "@material-ui/core/Toolbar";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteSweep from "@material-ui/icons/DeleteSweep";
import PrintRounded from "@material-ui/icons/PrintRounded";
import TodoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";
import styled from "styled-components";

const StyledToolbar = styled<ComponentType<ToolbarProps>>(Toolbar)`
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  button {
    margin: 10px;
  }
`;

interface ITodoTableToolbarProps {
  addHandler: () => void;
  recalculateHandler: () => void;
  hintOnRecalculation?: boolean;
  todoStore: TodoStore;
}

@observer
class TodoTableToolbar extends Component<ITodoTableToolbarProps> {
  render() {
    const {recalculateHandler} = this.props;

    return (
      <div>
        <AppBar position="static">
          <StyledToolbar>
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
                onClick={() => {
                  recalculateHandler();
                }}
              >
                Prioritize
              </Fab>
            </div>
          </StyledToolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles({})(TodoTableToolbar);
