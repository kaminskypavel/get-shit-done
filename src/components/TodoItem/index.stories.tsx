import React from "react";
import {storiesOf} from "@storybook/react";
import TodoItem from "./index";
import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import TodoStore from "../../stores/TodoStore";

const todoStore = new TodoStore();

const TableHOC = (todoItem: JSX.Element) => (
  <Paper className="paper">
    <Table className="table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Done</TableCell>
          <TableCell align="center">Description</TableCell>
          <TableCell align="center">Urgency</TableCell>
          <TableCell align="center">Importance</TableCell>
          <TableCell align="center">Priority</TableCell>
          <TableCell align="center">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {todoItem}
      </TableBody>
    </Table>
  </Paper>

);
storiesOf("TodoItem", module)
  .add("default", () => TableHOC(
    // @ts-ignore
    <TodoItem todo={{
      importance: 1,
      urgency: 1,
      priority: 2,
      done: false
    }}/>
  ))
  .add("done", () => TableHOC(
    //@ts-ignore
    <TodoItem todo={{
      importance: 5,
      urgency: 5,
      priority: 5,
      done: true
    }}/>
  ));

