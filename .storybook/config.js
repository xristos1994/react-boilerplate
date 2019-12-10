import { configure, addDecorator } from "@storybook/react";
import themeDecorator from "./themeDecorator";

addDecorator(themeDecorator);
configure(require.context("../src", true, /\.stories\.js$/), module);
