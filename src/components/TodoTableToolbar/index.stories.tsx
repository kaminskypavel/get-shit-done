import React, {ChangeEvent} from "react";
import {storiesOf} from "@storybook/react";
import TodoTableToolbar from "./index";
import "./style.scss";

storiesOf("TodoTableToolbar", module)
  .add("default", () =>
    <TodoTableToolbar recalculateHandler={()=>{}} addHandler={()=>{}}/>
  )
  .add("with hint", () =>
    <TodoTableToolbar hintOnRecalculation={true} recalculateHandler={()=>{}} addHandler={()=>{}}/>
  );
