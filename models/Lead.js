const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    eventType: String,
    fbclid: String, // profile.id,
    external_id: String, // profile.id,
    campaign_name: String,
    campaign_id: String,
    visitor_code: String,
    user_agent: String,
    ip: String,
    offer: String,
    region: String,
    city: String,
    date: { type: Date },
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);
module.exports = Lead;
