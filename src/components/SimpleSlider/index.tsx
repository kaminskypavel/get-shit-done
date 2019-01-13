import React, {ChangeEvent} from "react";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

const styles = {
  root: {
    width: 300
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
  defaultValue?: number
}

class SimplerSlider extends React.Component<ISimplerSliderProps> {
  static defaultProps = {
    min: 1,
    max: 10
  };


  state = {
    // we can ignore since we use defaultProps
    // @ts-ignore
    value: this.props.defaultValue || (this.props.max - this.props.min + 1) / 2
  };

  render() {
    const {classes, handleChange, min, max, step} = this.props;
    const {value} = this.state;

    return (
      <div className={classes.root}>
        <Typography id="label"><b>{this.state.value}</b></Typography>
        <Slider
          classes={{container: classes.slider}}
          value={value}
          aria-labelledby="label"
          min={min}
          max={max}
          step={step}
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
