const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", (request, response) => {
  response.send("Get logged-in user.");
});

// @route   POST api/auth
// @desc    Authenticate a user
// @access  Public
router.post("/", (request, response) => {
  response.send("Authenticates a user.");
});

module.exports = router;
