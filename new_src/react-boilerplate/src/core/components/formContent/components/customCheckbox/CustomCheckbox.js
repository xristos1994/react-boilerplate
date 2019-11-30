import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CustomTextField = ({ field, input }) => (
  <FormControlLabel
    control={
      <Checkbox color="primary" value={input.value} onChange={input.onChange} />
    }
    label={field.props.label}
    labelPlacement={field.props.position}
  />
);

export default CustomTextField;
