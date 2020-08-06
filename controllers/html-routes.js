// import dependencies 
const express = require("express");

// create router
const router = express.Router();

// add routes
router.get("/", (req, res) => {
  res.render("about", {});
})

router.get("/projects", (req, res) => {
  res.render("projects", {});
})

// export router
module.exports = router;