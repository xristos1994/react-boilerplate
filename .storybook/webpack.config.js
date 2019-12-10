"use strict";
const CUSTOMPATHS = require("./custom-paths");
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      ...CUSTOMPATHS,
    },
    extensions: [".js", ".jsx", ".css", ".png", ".jpg", ".gif", ".jpeg"],
  },
};
