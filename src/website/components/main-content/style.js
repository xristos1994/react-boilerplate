import { makeStyles } from "@material-ui/core/styles";
import  { calcDrawerWidth } from "@core/components/ui-drawer/utils"

const styles = (isDrawerOpen) => {
  const margin = isDrawerOpen ? calcDrawerWidth() : '0px';
  return makeStyles(theme => ({
    mainContent: {
      marginLeft: margin,
      width:"calc(100vw - "+ margin +")"
    },
  }))
};

export default styles;
