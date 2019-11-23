import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import { Link as MaterialLink} from '@material-ui/core';

//import { withProps } from "@core/utils/props";

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    height: '20rem',
    margin: 20,
    backgroundColor:'#f1f1f1',
    overflowY: 'hidden',
    position: 'relative'
  },
  fullWidthContainer: {
    width: '100%'
  },
  categoryText: {
    textAlign: 'right',
    textOverflow: 'ellipsis',
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    marginTop: 0,
    marginBottom: 4
  },
  titleText: {
    textOverflow: 'ellipsis',
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    marginTop: 0,
    marginBottom: 0,
    width: '100%'
  },
  imgContainer: {
    width: '100%',
    height: '35%'
  },
  image: {
    width: '100%',
    height: '6rem',
    objectFit: 'cover'
  },
  shortText: {
    backgroundColor:'#fff1f1',
    height: '6rem',
    overflowY: 'hidden',
    wordWrap: 'break-word'
  },
  authorText: {
    marginRight: 10,
    marginLeft: 'auto'
  },
  moreText: {
    width: '90%',
    textAlign: 'right',
    position: 'absolute',
    bottom: '1rem'
  },
}));

const Article = () => {
  const classes = styles();
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
      <Paper className={classes.paper} onClick={()=>console.log('Card Clicked')}>
        <Grid container direction="row">
          <div className={classes.imgContainer}>
            <img className={classes.image} src="https://www.xmple.com/wallpaper/green-single-solid-color-plain-one-colour-1920x1080-c-d5f4db-f-24.svg" />
          </div>
          <Grid item xs={12}>
            <div className={classes.fullWidthContainer}><h4 className={classes.titleText} >Title Title Ti Title Title Title </h4></div>
          </Grid>
          <Grid item xs={12}>
            <div><h5 className={classes.categoryText}>Category</h5></div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.shortText}>Text Short Text Short Text Short Text Short Text Short Text Short Text Short Text Short Text Short Text </div>
          </Grid>
          <Grid container direction="row" item xs={12}>
            <MaterialLink
                classes={{root:classes.authorText}}
                component="button"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Author Clicked");
                }}
            >
              By Christos  Korompokis
            </MaterialLink>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>Comments: 13</div>
          </Grid>
          <div className={classes.moreText}>
            <MaterialLink
                component="button"
                onClick={(e) => {
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



export const Articles = ({articles = []}) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" >
        {[1,2,3,4,5,6,7,8,9,10].map((elem,index)=><Article key={index}/>)}
      </Grid>
    </div>
  );
};

export default Articles;
//export default withProps({})(Articles);
