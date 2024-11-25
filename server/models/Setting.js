const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
});

const Setting = mongoose.model("Setting", settingSchema);

module.exports = Setting;
