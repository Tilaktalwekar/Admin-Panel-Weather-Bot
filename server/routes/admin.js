const express = require("express");
const bcrypt = require("bcrypt");
const Admin = require("../models/AdminModel"); // Ensure the correct model path
const router = express.Router();

// Create Admin function
router.post("/create-admin", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required.",
    });
  }

  try {
    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin with this username already exists.",
      });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin with the hashed password
    const newAdmin = new Admin({
      username,
      password: hashedPassword,
    });

    await newAdmin.save();

    // Exclude password from response
    const { password: _, ...adminData } = newAdmin.toObject();

    res.status(201).json({
      success: true,
      message: "Admin created successfully!",
      admin: adminData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error creating admin, please try again.",
    });
  }
});

// Export the router
module.exports = router;
