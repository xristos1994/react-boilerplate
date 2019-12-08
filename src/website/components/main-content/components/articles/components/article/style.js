import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    height: "20rem",
    margin: 20,
    backgroundColor: "#f1f1f1",
    overflowY: "hidden",
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      background: "#efefef",
      boxShadow:
        "5px 5px 7px 2px rgba(0,0,0,0.2), -1px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
  },
  fullWidthContainer: {
    width: "100%",
  },
  categoryText: {
    textAlign: "right",
    textOverflow: "ellipsis",
    overflowX: "hidden",
    whiteSpace: "nowrap",
    marginTop: 0,
    marginBottom: 4,
  },
  titleText: {
    textOverflow: "ellipsis",
    overflowX: "hidden",
    whiteSpace: "nowrap",
    marginTop: 0,
    marginBottom: 0,
    width: "100%",
  },
  imgContainer: {
    width: "100%",
    height: "35%",
  },
  image: {
    width: "100%",
    height: "6rem",
    objectFit: "cover",
  },
  shortText: {
    backgroundColor: "#fff1f1",
    height: "6rem",
    overflowY: "hidden",
    wordWrap: "break-word",
  },
  authorText: {
    marginRight: 10,
    marginLeft: "auto",
  },
  moreText: {
    width: "90%",
    textAlign: "right",
    position: "absolute",
    bottom: "1rem",
  },
}));
