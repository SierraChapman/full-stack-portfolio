// import dependencies 
const express = require("express");
const project = require("../models/project.js");

// create router
const router = express.Router();

// create routes
router.get("/api/projects/featured", (req, res) => {
  res.send(project.getFeatured());
});

// export router
module.exports = router;