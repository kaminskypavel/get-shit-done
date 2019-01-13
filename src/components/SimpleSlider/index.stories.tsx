import React, {ChangeEvent} from "react";
import {storiesOf} from "@storybook/react";
import SimpleSlider from "./index";

storiesOf("SimpleSlider", module)
  .addDecorator(story => <div style={{textAlign: "center"}}>{story()}</div>)
  .add("default", () =>
    <SimpleSlider/>
  )
  .add("default-value", () =>
    <SimpleSlider defaultValue={3}/>
  )
  .add("alert callback", () =>
    <SimpleSlider handleChange={(value) => (alert(value))}/>
  );

