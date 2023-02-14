const express = require("express");
const registerTutorModel = require("../models/tutor_db");

const routes = express.Router();

// Get all user data
routes.get("/register/tutor/result", async (req, res) => {
  try {
    const data = await registerTutorModel.find();
    res.status(200).json(data);
    console.log("All user data retrieved");
  } catch (error) {
    res.status(500).json({ error: error.response });
    console.error(error.response);
  }
});

// Insert new user data
routes.post("/register/tutor", async (req, res) => {
  const add_register = new registerTutorModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });
  try {
    const save_register = await add_register.save();
    res.status(201).json(save_register);
    console.log("New user registered");
  } catch (error) {
    res.status(400).json({ error: error.response });
    console.error(error.response);
  }
});

// Find user by ID
routes.get("/register/tutor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const byDataid = await registerTutorModel.findById(id);
    res.status(200).json(byDataid);
    console.log("User found by ID");
  } catch (error) {
    res.status(500).json({ error: error.response });
    console.error(error.response);
  }
});

// Find user by email
routes.get("/register/tutor/email/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const byDataemail = await registerTutorModel.findOne({email: email}); // {"email": "email"}
    res.status(200).json(byDataemail);
    console.log("User found by email");
  } catch (error) {
    res.status(500).json({ error: error.response });
    console.error(error.response);
  }
});

// Update user data
routes.patch("/register/tutor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };
    const result = await registerTutorModel.findByIdAndUpdate(
      id,
      updateData,
      options
    );
    res.status(201).json(result);
    console.log("User data updated by ID");
  } catch (error) {
    res.status(500).json({ error: error.response });
    console.error(error.response);
  }
});

// Delete user data
routes.delete("/register/tutor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await registerTutorModel.findByIdAndDelete(id);
    res.status(201).json(result);
    console.log("User data deleted by ID");
  } catch (error) {
    res.status(500).json({ error: error.response });
    console.error(error.response);
  }
});

module.exports = routes;
