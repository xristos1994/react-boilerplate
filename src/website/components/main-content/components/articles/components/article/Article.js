import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { withProps } from "@core/utils/props";

export const Article = ({article = {}}) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
    </Grid>
  );
};

export default Article;
//export default withProps({article})(Article);
