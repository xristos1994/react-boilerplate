"use strict";
const CUSTOMPATHS = require("./../config/custom-paths");

module.exports = {
  resolve: {
    alias: {
      ...CUSTOMPATHS,
    },
    extensions: [".js", ".jsx", ".css", ".png", ".jpg", ".gif", ".jpeg"],
  },
};
