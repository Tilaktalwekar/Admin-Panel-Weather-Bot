// // routes/settings.js
// const express = require("express");
// const Setting = require("../models/Setting");

// const router = express.Router();

// // Fetch current Telegram bot token
// router.get("/telegram-bot-token", async (req, res) => {
//   try {
//     // Retrieve the bot token from the database
//     const setting = await Setting.findOne();

//     if (setting) {
//       return res.status(200).json({ token: setting.token, exists: true });
//     } else {
//       return res
//         .status(404)
//         .json({ message: "Bot token not found", exists: false });
//     }
//   } catch (err) {
//     console.error("Error fetching bot token:", err);
//     return res.status(500).json({ message: "Server error" });
//   }
// });

// // Insert or update Telegram bot token
// router.post("/telegram-bot-token", async (req, res) => {
//   const { token } = req.body;

//   // Validate token input
//   if (!token) {
//     return res.status(400).json({ message: "Token is required" });
//   }

//   try {
//     const existingSetting = await Setting.findOne();

//     if (existingSetting) {
//       // If token exists, update it
//       existingSetting.token = token;
//       await existingSetting.save();
//       return res
//         .status(200)
//         .json({ message: "Bot token updated successfully" });
//     } else {
//       // If no token exists, create a new setting
//       const newSetting = new Setting({ token });
//       await newSetting.save();
//       return res
//         .status(201)
//         .json({ message: "Bot token created successfully" });
//     }
//   } catch (err) {
//     console.error("Error saving bot token:", err);
//     return res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

// const express = require("express");
// const Setting = require("../models/Setting"); // Replace with your actual model path
// const router = express.Router();

// // Route to fetch the current Telegram Bot Token
// router.get("/telegram-bot-token", async (req, res) => {
//   try {
//     const setting = await Setting.findOne(); // Fetch the token from the database

//     if (setting) {
//       return res.status(200).json({
//         token: setting.token,
//         exists: true,
//       });
//     } else {
//       return res.status(404).json({
//         message: "No bot token found",
//         exists: false,
//       });
//     }
//   } catch (err) {
//     console.error("Error fetching bot token:", err);
//     return res.status(500).json({
//       message: "Internal server error while fetching bot token",
//     });
//   }
// });

// // Route to insert or update the Telegram Bot Token
// router.post("/telegram-bot-token", async (req, res) => {
//   const { token } = req.body;

//   if (!token) {
//     return res.status(400).json({
//       message: "Bot token is required",
//     });
//   }

//   try {
//     const existingSetting = await Setting.findOne();

//     if (existingSetting) {
//       // Update the existing token
//       existingSetting.token = token;
//       await existingSetting.save();
//       return res.status(200).json({
//         message: "Telegram bot token updated successfully",
//       });
//     } else {
//       // Insert a new token if none exists
//       const newSetting = new Setting({ token });
//       await newSetting.save();
//       return res.status(201).json({
//         message: "Telegram bot token created successfully",
//       });
//     }
//   } catch (err) {
//     console.error("Error saving bot token:", err);
//     return res.status(500).json({
//       message: "Internal server error while saving bot token",
//     });
//   }
// });

// module.exports = router;

const express = require("express");
const Setting = require("../models/Setting"); // Replace with your actual model path
const router = express.Router();

// Route to fetch the current Telegram Bot Token
router.get("/telegram-bot-token", async (req, res) => {
  try {
    const setting = await Setting.findOne();

    if (setting) {
      res.json({ token: setting.token, exists: true });
    } else {
      res.status(404).json({ message: "No bot token found" });
    }
  } catch (err) {
    console.error("Error fetching bot token:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to insert or update the Telegram Bot Token
router.post("/telegram-bot-token", async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  try {
    let setting = await Setting.findOne();

    if (setting) {
      setting.token = token;
    } else {
      setting = new Setting({ token });
    }

    await setting.save();
    res.json({ message: "Token saved successfully" });
  } catch (err) {
    console.error("Error saving token:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
