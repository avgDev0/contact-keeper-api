const express = require("express");
const router = express.Router();

// @route   GET api/contancts
// @desc    Get all user's contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   POST api/contacts
// @desc    Register new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Registered new contact");
});

// @route   PUT api/contacts/:id
// @desc    Update existing contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   DELETE api/contacts/:id
// @desc    Delete existing contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
