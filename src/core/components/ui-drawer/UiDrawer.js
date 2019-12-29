import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Scrollbars } from 'react-custom-scrollbars';

import { calcDrawerWidth } from './utils';
import { withProps } from '@core/utils/props';
import { styles } from './style';
import { isLogged } from '@core/models/authentication/props';
import { coreUi_closeDrawer, drawerProps } from '@core/models/core-ui/props';

export const UiDrawer = ({
  isLogged,
  coreUi_closeDrawer,
  drawerProps,
  options,
}) => {
  const { show } = drawerProps;
  const classes = styles();

  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 500);

    window.addEventListener('resize', debouncedHandleResize);

    if (dimensions.heght > -1);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  const positions = {
    top: false,
    left: true,
    bottom: false,
    right: false,
  };

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    coreUi_closeDrawer();
  };

  const drawerContent = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {options.map(({ label, action, icon }, index) => (
          <ListItem button key={label} onClick={() => action(label)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <Drawer
        classes={{
          paper: classes.drawer,
          root: classes.drawer,
          modal: classes.drawer,
        }}
        open={positions.left && show}
        onClose={toggleDrawer(false)}
        variant={'persistent'}
      >
        <Scrollbars style={{ width: calcDrawerWidth(), height: '100%' }}>
          {drawerContent('left')}
        </Scrollbars>
      </Drawer>
    </div>
  );
};

export default withProps({ isLogged, coreUi_closeDrawer, drawerProps })(
  UiDrawer,
);
