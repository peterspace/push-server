// jobs/scheduleNotifications.js
const cron = require("node-cron");
const User = require("../models/User");
const Notification = require("../models/Notification");

// Schedule the task to run daily at midnight
cron.schedule("0 0 * * *", async () => {
  const fiveDaysAgo = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);

  // Find inactive users
  const inactiveUsers = await User.find({
    lastLogin: { $lt: fiveDaysAgo },
    pushSubscription: { $ne: null },
  });

  if (inactiveUsers.length > 0) {
    // Create a notification
    const notification = new Notification({
      title: "We are missing you!",
      body: "It’s been a while since your last visit. Come back and check out what’s new!",
      targetUsers: inactiveUsers.map((user) => user._id),
    });
    await notification.save();

    // Send the notification
    // You can reuse the sendNotification logic here or create a dedicated function
    // For simplicity, let's assume you have a function to send notifications to users
    sendNotificationToUsers(notification, inactiveUsers);
  }
});

async function sendNotificationToUsers(notification, users) {
  const payload = JSON.stringify({
    title: notification.title,
    body: notification.body,
  });

  const userPushPromises = users.map(async (user) => {
    if (user.pushSubscription && user.pushSubscription.endpoint) {
      try {
        await webpush.sendNotification(user.pushSubscription, payload);
      } catch (error) {
        console.error(`Failed to send notification to ${user._id}:`, error);
      }
    }
  });

  await Promise.all(userPushPromises);

  // Update notification status
  notification.status = "sent";
  notification.sentAt = new Date();
  await notification.save();
}
