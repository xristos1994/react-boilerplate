import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(themeDecorator);
addDecorator(withKnobs);
configure(require.context('../src', true, /\.stories\.js$/), module);
