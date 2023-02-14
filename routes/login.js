const express = require("express");
const router = express.Router();
const Tutor = require("../models/tutor_db");

// Tutor login
router.post("/login/tutor", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find tutor by email
    const tutor = await Tutor.findOne({ email: email });
    if (!tutor) {
      // If email is not found in database
      return res.status(400).json({ message: "Email not found" });
    }
    if (tutor.password !== password) {
      // If password is incorrect
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Login successful
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    // Server error
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
