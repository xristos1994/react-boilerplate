import React from "react";
import TextField from "@material-ui/core/TextField";

const CustomTextField = ({ field, error, meta, input }) => (
  <TextField
    error={error}
    helperText={error && meta.touched && field.validate(input.value)}
    onBlur={() => input.onBlur()}
    value={input.value}
    onChange={input.onChange}
    {...field.props}
  />
);

export default CustomTextField;
