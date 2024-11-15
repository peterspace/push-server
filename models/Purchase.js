const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ipAddress: String, //'',
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
  },
  { timestamps: true }
);

const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;
