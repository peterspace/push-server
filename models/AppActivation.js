const mongoose = require("mongoose");

const appActivationSchema = new mongoose.Schema(
  {
    userId: String, // profile.id,
    event: {type:String, default:"CUSTOM_APP_EVENTS"},
    eventName: {type:String, default:"fb_mobile_activate_app"},
    advertiserTrackingId: String,
    affiliateLink: String,
    email: String,
    phone: String,
    country: String,
    userIpAddresses: [String], // array of ips by same user. default been index 0

    role: {
      type: String,
      default: "User", // "User" and "Admin"
      // default:
    },
  },
  { timestamps: true }
);

const AppActivation = mongoose.model("AppActivation", appActivationSchema);
module.exports = AppActivation;
