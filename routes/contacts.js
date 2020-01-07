const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all contacts for a user
// @access  Private
router.get("/", (request, response) => {
  response.send("Get all contacts.");
});

// @route   POST api/contacts
// @desc    Add a contact
// @access  Private
router.post("/", (request, response) => {
  response.send("Add contact.");
});

// @route   PUT api/contacts/:id
// @desc    Update a contact
// @access  Public
router.put("/:id", (request, response) => {
  response.send("Update contact.");
});

// @route   DELETE api/contacts/:id
// @desc    Delete a contact
// @access  Public
router.delete("/", (request, response) => {
  response.send("Delete contact.");
});

module.exports = router;
