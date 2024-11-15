const express = require("express");
const router = express.Router();
const calcController = require("../controllers/calcController");
// new route for adding two numbers
router.get("/add", (req, res) => {
  calcController.addNumbers(req, res);
});

module.exports = router;
