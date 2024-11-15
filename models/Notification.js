// models/Notification.js
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  targetUsers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  icon: {
    type: String,
  },
  link: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  sentAt: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    enum: ["pending", "sent", "scheduled"],
    default: "pending",
  },
  isRecurring: {
    type: Boolean,
    default: false,
  },
  scheduleTime: {
    type: String, // Format: 'HH:mm' for daily time, or use cron expressions for flexibility
    required: false,
  },
  recurrence: {
    type: {
      type: String,
      enum: ["daily", "weekly", "custom"],
      default: "daily",
    },
    //check since we are passing weekdays in strings
    daysOfWeek: {
      type: [Number], // Array of days (0 = Sunday, 1 = Monday, etc.) for weekly recurrence
      default: [],
    },
    cronExpression: {
      type: String, // Custom cron expression for complex schedules
      required: false,
    },
  },
});

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
