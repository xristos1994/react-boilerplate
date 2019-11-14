//const resolve = require("resolve");
const path = require("path");

module.exports = {
  website: path.resolve(__dirname, "./../src/website/"),
  components: path.resolve(__dirname, "./../src/website/components/"),
  utils: path.resolve(__dirname, "./../src/website/utils/"),
  models: path.resolve(__dirname, "./../src/website/models/"),
  services: path.resolve(__dirname, "./../src/website/services/"),
  theme: path.resolve(__dirname, "./../src/theme/"),

  // ------------------------------------------------------------------------
  "@core/store": path.resolve(__dirname, "./../src/core/store/"),
  "@core/components": path.resolve(__dirname, "./../src/core/components/"),
  "@core/utils": path.resolve(__dirname, "./../src/core/utils/"),
  "@core/models": path.resolve(__dirname, "./../src/core/models/"),
  "@core/operators": path.resolve(__dirname, "./../src/core/operators/"),
  "@core/actions-engine": path.resolve(
    __dirname,
    "./../src/core/actions-engine/"
  ),
  "@core/utils": path.resolve(__dirname, "./../src/core/utils/")
};

module.exports.CUSTOMPATHS;
