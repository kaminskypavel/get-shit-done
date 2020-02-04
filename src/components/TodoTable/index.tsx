import React, {ComponentType} from "react";
import {
  Paper,
  PaperProps,
  Table,
  TableBody,
  TableHead,
  TableProps,
  TableRow
} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TodoItem from "../TodoItem";
import TodoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";
import TodoTableToolbar from "./../TodoTableToolbar";
import styled from "styled-components";

interface ITodoTableProps {
  todoStore: TodoStore;
}

const StyledTable = styled<ComponentType<TableProps>>(Table)`
  min-width: 700px;
`;
const StyledPaper = styled<ComponentType<PaperProps>>(Paper)`
  width: 100%;
  overflow-x: auto;
`;

@observer
export default class extends React.Component<ITodoTableProps> {
  render() {
    const {todoStore} = this.props;
    const {todos} = todoStore;

    return (
      <StyledPaper>
        <TodoTableToolbar
          hintOnRecalculation={todoStore.isDirty}
          addHandler={() => this.showNewTodoDialog()}
          recalculateHandler={() => this.sortTodos()}
          todoStore={todoStore}
        />

        <StyledTable className="table" style={{tableLayout: "auto"}}>
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{width: "10%"}}>
                Done
              </TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left" style={{width: "15%"}}>
                Urgency
              </TableCell>
              <TableCell align="left" style={{width: "15%"}}>
                Impact
              </TableCell>
              <TableCell align="left" style={{width: "15%"}}>
                Easiness
              </TableCell>
              <TableCell align="left" style={{width: "10%"}}>
                Priority
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TodoItem todo={todo} />
            ))}
          </TableBody>
        </StyledTable>
      </StyledPaper>
    );
  }

  sortTodos() {
    this.props.todoStore.sortTodos();
  }

  showNewTodoDialog() {
    this.props.todoStore.showNewTodoDialog = true;
  }
}
