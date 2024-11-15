// job/checkInactivity.js
const User = require('../models/User');
const Notification = require('../models/Notification');
const mongoose = require('mongoose');

const sendInactivityNotifications = async () => {
  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

  const inactiveUsers = await User.find({ lastLogin: { $lt: fiveDaysAgo } });

  if (inactiveUsers.length > 0) {
    const notification = new Notification({
      title: 'We are missing you!',
      body: 'It’s been a while since your last visit. Come back and check out what’s new!',
      targetUsers: inactiveUsers.map(user => user._id),
    });

    await notification.save();
  }
};

// Call this function regularly (e.g., with node-cron)
setInterval(sendInactivityNotifications, 24 * 60 * 60 * 1000); // Once per day
