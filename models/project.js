const project = {};

project.db = require("../db/projects.json");

project.numFeatured = 6;

project.getFeatured = function() {
  return this.db.slice(0, this.numFeatured);
};

module.exports = project;