const mongoose = require("mongoose");

const appInstallSchema = new mongoose.Schema(
  {
    ipAddress: String, //'',
    deviceId: String, // profile.id,
    userLink: String, // profile.id,
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

const AppInstall = mongoose.model("AppInstall", appInstallSchema);
module.exports = AppInstall;
