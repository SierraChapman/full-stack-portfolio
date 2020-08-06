// import dependencies 
const express = require("express");
const project = require("../models/project.js");

// create router
const router = express.Router();

// add routes
router.get("/", (req, res) => {
  res.render("about", {});
})

router.get("/projects", (req, res) => {
  res.render("projects", {project: project.getFeatured()});
})

// export router
module.exports = router;