import React from "react";
import {storiesOf} from "@storybook/react";
import GoogleTaslsFab from "./index";
import TodoStore from "../../stores/TodoStore";

const todoStore = new TodoStore();

storiesOf("GoogleTasksFab", module)
  .add("default", () =>
    // @ts-ignore
    <GoogleTaslsFab/>
  );
