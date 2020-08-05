// import dependencies 
const express = require("express");

// create router
const router = express.Router();

// add routes
router.get("/", (req, res) => {
  res.send("Home page!");
})

// export router
module.exports = router;