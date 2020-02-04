import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const styles = {
  root: {
    width: "auto"
  },
  slider: {
    padding: "22px 0px"
  }
};

interface ISimplerSliderProps {
  classes?: any;
  handleChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  defaultValue?: number;
}

class SimplerSlider extends React.Component<ISimplerSliderProps> {
  static defaultProps = {
    min: 1,
    max: 10,
    disabled: false
  };

  state = {
    // we can ignore since we use defaultProps
    // @ts-ignore
    value: this.props.defaultValue || (this.props.max - this.props.min + 1) / 2
  };

  render() {
    const {classes, handleChange, min, max, disabled} = this.props;
    const {value} = this.state;
    return (
      <div className={classes.root}>
        <Typography id="label">
          <b>{this.state.value}</b>
        </Typography>
        <Slider
          value={value}
          aria-labelledby="label"
          min={min}
          max={max}
          step={1}
          disabled={disabled}
          onChange={(event, value) => {
            this.setState({value});
          }}
          onDragEnd={() => {
            const roundValue = Math.round(this.state.value);
            this.setState({value: roundValue});
            handleChange && handleChange(roundValue);
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SimplerSlider);
