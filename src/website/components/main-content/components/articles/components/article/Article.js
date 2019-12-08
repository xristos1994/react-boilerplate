import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link as MaterialLink } from "@material-ui/core";
import { styles } from "./style";
import { push } from "@core/models/router/props";
import { withProps } from "@core/utils/props";

const Article = ({ article, push }) => {
  const { id, title, category, shortText, author, comments, image } = article;
  const classes = styles();
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
      <Paper
        className={classes.paper}
        onClick={() => {
          push(`/article/${id}`);
          console.log("Card Clicked");
        }}
      >
        <Grid container direction="row">
          <div className={classes.imgContainer}>
            <img alt={image.alt} className={classes.image} src={image.url} />
          </div>
          <Grid item xs={12}>
            <div className={classes.fullWidthContainer}>
              <h4 className={classes.titleText}>{title}</h4>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h5 className={classes.categoryText}>{category}</h5>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.shortText}>{shortText}</div>
          </Grid>
          <Grid container direction="row" item xs={12}>
            <MaterialLink
              classes={{ root: classes.authorText }}
              component="button"
              onClick={e => {
                e.stopPropagation();
                console.log("Author Clicked");
              }}
            >
              By {author}
            </MaterialLink>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>Comments: {comments}</div>
          </Grid>
          <div className={classes.moreText}>
            <MaterialLink
              component="button"
              onClick={e => {
                e.stopPropagation();
                console.log("More Clicked");
              }}
            >
              more . . .
            </MaterialLink>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default withProps({ push })(Article);
