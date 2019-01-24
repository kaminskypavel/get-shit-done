import * as React from "react";
import {Component} from "react";
import {Fab} from "@material-ui/core";
import {observer} from "mobx-react";
import "./index.scss";

@observer
export default class extends Component {

  render() {
    // const {todo} = this.props;
    return (
      <Fab variant="extended"
           color="default"
           onClick={() => {
             window.print();
           }}>
        <img src={require("./icon.png")} className="icon"/>&nbsp;
        Google Tasks
      </Fab>

    );
  }
};
