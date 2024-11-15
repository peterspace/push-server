const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: "String", unique: true },
    // email: { type: String},
    password: String,

    photo: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      // required: true,
      default: false,
    },
    level: {
      type: Number,
      default: 0, //0 meanse user, admin begins from 1-5
    },
    role: {
      type: String,
      default: "Admin", // "User" and "Admin"
      // default:
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
