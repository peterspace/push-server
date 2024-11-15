const asyncHandler = require("express-async-handler");
const User = require("../models/Admin.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const express = require("express");
//jwt protect
const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(401);
      throw new Error("Not authenticated!");
    }

    // Verify Token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // console.log({verified: verified})
    // Get user id from token
    const user = await User.findById(verified.id).select("-password");

    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, please login");
    // throw new Error('Not ready');
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== "Admin") {
    throw new Error("You are not an admin");
  } else {
    next();
  }
});

// module.exports = protect;
module.exports = { isAdmin, protect };
