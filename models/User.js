const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    ipAddress: String, //'',
    deviceId: String, // profile.id,
    userLink: String, // profile.id,
    advertiserTrackingId: String,
    affiliateLink: String,
    email: String,
    phone: String,
    country: String,
    device: {
      type: mongoose.Schema.Types.Mixed,
    },
    appInstalled: { type: Boolean, default: false },
    userIpAddresses: [String], // array of ips by same user. default been index 0
    supportedCountry: { type: Boolean, default: false },
    role: {
      type: String,
      default: "User", // "User" and "Admin"
      // default:
    },
    // pushSubscription: {
    //   subscription: String,
    // },
    pushSubscription: {
      endpoint: String,
      keys: {
        p256dh: String,
        auth: String,
      },
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
