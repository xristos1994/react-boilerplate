import React from 'react';
import { shallow } from 'enzyme';
import { UiAppbar } from './../UiAppbar';

describe('Appbar Test', () => {
  it('Renders Appbar for Logged In', () => {
    const props = {
      isLogged: true,
      drawerProps: { show: true },
      coreUi_openDrawer: () => console.log('Open Drawer'),
      coreUi_closeDrawer: () => console.log('Close Drawer'),
    };

    const component = shallow(<UiAppbar {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('Renders Appbar for not Logged In', () => {
    const props = {
      isLogged: false,
      drawerProps: { show: true },
      coreUi_openDrawer: () => console.log('Open Drawer'),
      coreUi_closeDrawer: () => console.log('Close Drawer'),
    };

    const component = shallow(<UiAppbar {...props} />);
    expect(component).toMatchSnapshot();
  });
});
