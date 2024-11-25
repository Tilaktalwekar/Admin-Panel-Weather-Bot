const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

//unblock
router.post("/:id/unblock", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user by ID and update the blocked field to false
    const user = await User.findByIdAndUpdate(
      id,
      { blocked: false },
      { new: true } // Return the updated user
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User unblocked successfully", user });
  } catch (error) {
    console.error("Error unblocking user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while unblocking the user" });
  }
});

//subscribed
router.post("/:id/subscribe", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user by ID and update the subscribe field to false
    const user = await User.findByIdAndUpdate(
      id,
      { subscribed: true },
      { new: true } // Return the updated user
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User subscribed successfully", user });
  } catch (error) {
    console.error("Error subscribing user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while subscribing the user" });
  }
});

// Block a user
router.post("/:id/block", async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndUpdate(id, { blocked: true });
    res.status(200).json({ message: "User blocked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error blocking user" });
  }
});

router.post("/:id/unsubscribe", async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndUpdate(id, { subscribed: false });
    res.status(200).json({ message: "User unsubscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error unsubscribing user" });
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
});

module.exports = router;
