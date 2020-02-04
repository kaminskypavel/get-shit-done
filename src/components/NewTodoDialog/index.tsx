import React, {ComponentType} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog, {DialogProps} from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TodoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";
import styled from "styled-components";

const StyledDialog = styled<ComponentType<DialogProps>>(Dialog)`
  text-align: left;
`;

interface INewTodoDialogProps {
  todoStore: TodoStore;
}

@observer
export default class NewTodoDialog extends React.Component<INewTodoDialogProps> {
  state = {
    description: ""
  };

  hideDialog = () => {
    this.props.todoStore.showNewTodoDialog = false;
  };

  cancelDialog = () => {
    this.hideDialog();
  };

  confirmDialog = () => {
    const {description} = this.state;
    const {todoStore} = this.props;
    if (description.length > 0) {
      this.hideDialog();
      todoStore.addTodo(description, 5, 5, 5);
    }
  };

  render() {
    return (
      <div>
        <StyledDialog
          open={this.props.todoStore.showNewTodoDialog}
          onClose={this.hideDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Task 📃✏</DialogTitle>
          <DialogContent>
            <DialogContentText>
              What do you want to do today?
              <br />
              <i>
                remember! tasks should be <b>concrete</b> and should be accomplised today!
              </i>
              <i>you'll also want to set a priority and urgency in the next screen</i>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="description"
              fullWidth
              onChange={(evt) => {
                this.setState({description: evt.target.value});
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  this.confirmDialog();
                }
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.cancelDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.confirmDialog} color="primary">
              Add
            </Button>
          </DialogActions>
        </StyledDialog>
      </div>
    );
  }
}
