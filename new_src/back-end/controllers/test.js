"use strict";

module.exports.getTestData = (req, res, next) => {
  res.status(404).json({
    status: 200,
    response: { data: 1, rows: 2, filters: 3 },
  });
};
