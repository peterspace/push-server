// controllers/notificationController.js
const cron = require("node-cron");
const Notification = require("../models/Notification");
const User = require("../models/User"); // Assuming you have a User model
const Admin = require("../models/Admin");
// const PushNotifications = require("node-pushnotifications");
const webpush = require("web-push");

const VAPID_EMAIL = process.env.VAPID_EMAIL;
//===={new approach}================================
const publicVapidKey = process.env.VAPID_PUBLIC_KEY; // REPLACE_WITH_YOUR_KEY
const privateVapidKey = process.env.VAPID_PRIVATE_KEY; //REPLACE_WITH_YOUR_KEY
const frontend = process.env.FRONTEND_URL;

const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;

webpush.setVapidDetails(
  "mailto: peter.space.io@gmail.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

// console.log({ subscription });
// const settings = {
//   web: {
//     vapidDetails: {
//       subject: "mailto: <peter.space.io@gmail.com>", // REPLACE_WITH_YOUR_EMAIL
//       publicKey: publicVapidKey,
//       privateKey: privateVapidKey,
//     },
//     gcmAPIKey: "gcmkey",
//     TTL: 2419200,
//     contentEncoding: "aes128gcm",
//     headers: {},
//   },
//   isAlwaysUseFCM: false,
// };

// Send 201 - resource created
// const push = new PushNotifications(settings);

// Helper function to schedule a notification
const scheduleNotification = (notification) => {
  let cronTime;

  if (notification.isRecurring) {
    if (notification.recurrence.type === "daily") {
      const [hour, minute] = notification.scheduleTime.split(":");
      cronTime = `${minute} ${hour} * * *`; // Every day at the specified time
    } else if (notification.recurrence.type === "weekly") {
      const days = notification.recurrence.daysOfWeek.join(",");
      const [hour, minute] = notification.scheduleTime.split(":");
      cronTime = `${minute} ${hour} * * ${days}`; // Weekly on selected days
    } else if (notification.recurrence.type === "custom") {
      cronTime = notification.recurrence.cronExpression; // Custom cron expression
    }
  } else {
    const [hour, minute] = notification.scheduleTime.split(":");
    cronTime = `${minute} ${hour} * * *`; // Default to daily at specified time if not recurring
  }

  cron.schedule(cronTime, async () => {
    await sendNotificationById(notification._id);
  });
};

// Helper function to send a notification by ID
const sendNotificationById = async (notificationId) => {
  const notification = await Notification.findById(notificationId);
  if (!notification) {
    console.log("Notification not found");
    return;
  }

  if (notification.status === "sent") {
    console.log("Notification sent");
    return;
  }

  try {
    const users =
      notification.targetUsers.length > 0
        ? await User.find({ _id: { $in: notification.targetUsers } })
        : await User.find({}); // If no target users, send to all users

    const payload = JSON.stringify({
      title: notification.title,
      body: notification.body,
      icon: notification.icon || "",
      link: notification.icon || frontend,
    });

    console.log({ payload });

    const userPushPromises = users.map(async (user) => {
      if (user.pushSubscription && user.pushSubscription.endpoint) {
        const subscription = user.pushSubscription;

        // push.send(subscription, payload, (err, result) => {
        //   if (err) {
        //     console.log({ pushError: err });
        //   } else {
        //     console.log({ pushResponse: result });
        //   }
        // });
        // Send the notification
        // Send the notification
        webpush
          .sendNotification(subscription, payload)
          .then(() =>
            console.log({
              success: true,
              message: "Notification sent successfully",
            })
          )
          .catch((error) => {
            console.error("Error sending notification", error);
            console.log({ success: false, message: "Notification failed" });
          });
      }
    });

    await Promise.all(userPushPromises);

    notification.status = "sent";
    notification.sentAt = new Date();
    await notification.save();

    res.status(200).json({ message: "Notification sent" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Modified createNotification function with scheduling support
const createNotification = async (req, res) => {
  console.log("creating notification");
  // const admin = await Admin.findById(req.user._id);
  const admin = await Admin.findById(req.body.adminId);

  if (!admin) {
    const message = "Unauthorized user";
    res.status(400).json(message);
  }

  console.log({ adminUser: admin?._id });
  try {
    const {
      title,
      body,
      targetUsers,
      scheduleTime,
      isRecurring,
      recurrence,
      icon,
      link,
    } = req.body;
    const notification = new Notification({
      adminId: admin?._id,
      title,
      body,
      targetUsers,
      scheduleTime,
      isRecurring,
      recurrence,
      icon,
      link,
      status: scheduleTime ? "scheduled" : "pending",
    });

    await notification.save();

    // Schedule the notification if there's a schedule time
    if (scheduleTime) {
      scheduleNotification(notification);
    }

    console.log({ notification });

    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Initialize scheduled notifications when the server starts
const initializeScheduledNotifications = async () => {
  const scheduledNotifications = await Notification.find({
    status: "scheduled",
  });
  scheduledNotifications.forEach(scheduleNotification);
};

// Call this function when your server starts
initializeScheduledNotifications();

// Create a new notification
const createSingleNotification = async (req, res) => {
  try {
    const { title, body, targetUsers, icon, link } = req.body;
    const notification = new Notification({
      title,
      body,
      targetUsers,
      icon,
      link,
    });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const sendNotification = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.findById(id);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    const users =
      notification.targetUsers.length > 0
        ? await User.find({ _id: { $in: notification.targetUsers } })
        : await User.find({}); // If no target users, send to all users

    const payload = JSON.stringify({
      title: notification.title,
      body: notification.body,
      icon: notification.icon || "",
      link: notification.icon || frontend,
    });

    console.log({ payload });

    const userPushPromises = users.map(async (user) => {
      if (user.pushSubscription && user.pushSubscription.endpoint) {
        const subscription = user.pushSubscription;

        // push.send(subscription, payload, (err, result) => {
        //   if (err) {
        //     console.log({ pushError: err });
        //   } else {
        //     console.log({ pushResponse: result });
        //   }
        // });
        // Send the notification
        webpush
          .sendNotification(subscription, payload)
          .then(() =>
            console.log({
              success: true,
              message: "Notification sent successfully",
            })
          )
          .catch((error) => {
            console.error("Error sending notification", error);
            console.log({ success: false, message: "Notification failed" });
          });
      }
    });

    await Promise.all(userPushPromises);

    notification.status = "sent";
    notification.sentAt = new Date();
    await notification.save();

    res.status(200).json({ message: "Notification sent" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const sendTargetGroupNotification = async (req, res) => {
  const { id, days } = req.body;
  try {
    const notification = await Notification.findById(id);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    const users = await notificationTargetGroup(days);

    const payload = JSON.stringify({
      title: notification.title,
      body: notification.body,
      icon: notification.icon || "",
      link: notification.icon || frontend,
    });

    console.log({ payload });

    const userPushPromises = users.map(async (user) => {
      if (user.pushSubscription && user.pushSubscription.endpoint) {
        const subscription = user.pushSubscription;

        // push.send(subscription, payload, (err, result) => {
        //   if (err) {
        //     console.log({ pushError: err });
        //   } else {
        //     console.log({ pushResponse: result });
        //   }
        // });
        // Send the notification
        webpush
          .sendNotification(subscription, payload)
          .then(() =>
            console.log({
              success: true,
              message: "Notification sent successfully",
            })
          )
          .catch((error) => {
            console.error("Error sending notification", error);
            console.log({ success: false, message: "Notification failed" });
          });
      }
    });

    await Promise.all(userPushPromises);

    notification.status = "sent";
    notification.sentAt = new Date();
    await notification.save();

    res.status(200).json({ message: "Notification sent" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * 
sample user data

Sending to user: new ObjectId('66987f1e0469a1183bdda1fd') Subscription: {
  keys: {
    p256dh: 'BIVLVrBWtaEA3wYj8l1ZoHRayZqm8RKITOXsZUqs34f9yC9HVhSubJFV81myIlwgTqxbDrs8_sAXY_ATTCAlfW8',
    auth: 'SM6kFGVakZfBSm6coGE1zw'
  },
  endpoint: 'https://fcm.googleapis.com/fcm/send/doV_6DLjHJo:APA91bG0dVBQteuOH2cElwOJ5XXIg3lO761pf3VXBA9Rke2W_PDlBfDTQ4Gc_6LXrYUKjnqXgW205cOzhb2fgKd09TM-K83vBRzuq5y0LtP1zwkHvJoylL4BOqRF_Bep_CaoFDwUQvRJ'
}

sample result:
{
  "message": "Notification sent"
}
 */

// Get all notifications

const getNotificationsById = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.findById(id);

    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a notification
const deleteNotification = async (req, res) => {
  const { id } = req.params;
  try {
    await Notification.findByIdAndDelete(id);
    res.status(200).json({ message: "Notification deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const subscribeUser1 = async (req, res) => {
  try {
    const { userId, subscription } = req.body;

    console.log({ content: req.body });

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.pushSubscription) {
      console.log("user has subscription");
      // user had previously subscribed, then update the subscription information
      user.pushSubscription = subscription;
      const updatedUser = await user.save();
      //==========={Start: For testing only }=========================
      // const payload = {
      //   title: "Notification from 1xBet",
      //   body: "Thank you for subscribing with us",
      //   // icon: "https://firebase.google.com/images/social.png",
      //   link: `${frontend}`,
      // };
      const payload = JSON.stringify({
        title: data.title || "Push title",
        body: data.body || "Additional text with some description",
        icon:
          data.icon ||
          "https://andreinwald.github.io/webpush-ios-example/images/favicon.png",
        image:
          data.image ||
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1920px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
        data: data.data || {
          url: "https://andreinwald.github.io/webpush-ios-example/?page=success",
          link: "https://andreinwald.github.io/webpush-ios-example/?page=success",
          message_id: "your_internal_unique_message_id_for_tracking",
        },
      });
      console.log({ payload });
      webpush
        .sendNotification(subscription, payload)
        .then(() =>
          res.status(200).json({
            success: true,
            message: "Notification sent successfully",
          })
        )
        .catch((error) => {
          console.error("Error sending notification", error);
          res
            .status(500)
            .json({ success: false, message: "Notification failed" });
        });
      // if (updatedUser) {
      //   webpush
      //     .sendNotification(subscription, payload)
      //     .then(() =>
      //       res
      //         .status(200)
      //         .json({
      //           success: true,
      //           message: "Notification sent successfully",
      //         })
      //     )
      //     .catch((error) => {
      //       console.error("Error sending notification", error);
      //       res
      //         .status(500)
      //         .json({ success: false, message: "Notification failed" });
      //     });
      // }
      //==========={End: For testing only }=========================
      res
        .status(200)
        .json({ message: "User already subscribed to push notifications" });
    } else {
      // add new user subscription
      user.pushSubscription = subscription;
      const updatedUser = await user.save();

      const payload = {
        title: "Notification from 1xBet",
        body: "Thank you for subscribing",
        // icon: "https://firebase.google.com/images/social.png",
        link: `${frontend}`,
      };
      console.log({ payload });
      if (updatedUser) {
        // push.send(subscription, payload, (err, result) => {
        //   if (err) {
        //     console.log({ pushError: err });
        //   } else {
        //     console.log({ pushResponse: result });
        //   }
        // });
        // Send the notification
        webpush
          .sendNotification(subscription, payload)
          .then(() =>
            console.log({
              success: true,
              message: "Notification sent successfully",
            })
          )
          .catch((error) => {
            console.error("Error sending notification", error);
            console.log({ success: false, message: "Notification failed" });
          });
      }
      console.log({ message: "User subscribed to push notifications" });
      res
        .status(200)
        .json({ message: "User subscribed to push notifications" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const subscribeUser2 = async (req, res) => {
  const { userId, subscription } = req.body;

  console.log({ content: req.body });

  // Find the user by ID
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  console.log({ user: user?._id });
  console.log({ subscription });

  const payload = JSON.stringify({
    title: "Push title",
    body: "Additional text with some description",
    icon: "https://andreinwald.github.io/webpush-ios-example/images/favicon.png",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1920px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
    data: {
      url: "https://andreinwald.github.io/webpush-ios-example/?page=success",
      link: "https://andreinwald.github.io/webpush-ios-example/?page=success",
      message_id: "your_internal_unique_message_id_for_tracking",
    },
  });

  console.log({ payload });

  // Send the notification
  webpush
    .sendNotification(subscription, payload)
    .then(() =>
      res
        .status(200)
        .json({ success: true, message: "Notification sent successfully" })
    )
    .catch((error) => {
      console.error("Error sending notification", error);
      res.status(500).json({ success: false, message: "Notification failed" });
    });
};

// Subscribe user to push notifications
const subscribeUserOriginal = async (req, res) => {
  try {
    const { userId, subscription } = req.body;

    console.log({ content: req.body });

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.pushSubscription) {
      // user had previously subscribed, then update the subscription information
      user.pushSubscription = subscription;
      const updatedUser = await user.save();
      res
        .status(200)
        .json({ message: "User already subscribed to push notifications" });
    } else {
      // add new user subscription
      user.pushSubscription = subscription;
      const updatedUser = await user.save();

      const payload = {
        title: "Notification from 1xBet",
        body: "Thank you for subscribing",
        // icon: "https://firebase.google.com/images/social.png",
        url: `${frontend}`,
      };
      console.log({ payload });
      if (updatedUser) {
        // push.send(subscription, payload, (err, result) => {
        //   if (err) {
        //     console.log({ pushError: err });
        //   } else {
        //     console.log({ pushResponse: result });
        //   }
        // });
        // Send the notification
        webpush
          .sendNotification(subscription, payload)
          .then(() =>
            console.log({
              success: true,
              message: "Notification sent successfully",
            })
          )
          .catch((error) => {
            console.error("Error sending notification", error);
            console.log({ success: false, message: "Notification failed" });
          });
      }
      console.log({ message: "User subscribed to push notifications" });
      res
        .status(200)
        .json({ message: "User subscribed to push notifications" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const subscribeUser = async (req, res) => {
  const { userId, subscription } = req.body;

  console.log({ content: req.body });

  // Find the user by ID
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // add new user subscription
  user.pushSubscription = subscription;
  const updatedUser = await user.save();

  const payload = JSON.stringify({
    title: "Notification from 1xBet",
    body: "Thank you for subscribing",
    // icon: "https://firebase.google.com/images/social.png",
    data: {
      url: `${frontend}`,
      link: `${frontend}`,
      // message_id: "your_internal_unique_message_id_for_tracking",
    },
  });
  console.log({ payload });
  if (updatedUser) {
    // Send the notification
    webpush
      .sendNotification(subscription, payload)
      .then(() => {
        console.log("Notification sent");
        res
          .status(200)
          .json({ success: true, message: "Notification sent successfully" });
      })
      .catch((error) => {
        console.error("Error sending notification", error);
        res
          .status(500)
          .json({ success: false, message: "Notification failed" });
      });
  } else {
    // add new user subscription
    user.pushSubscription = subscription;
    const updatedUser = await user.save();
    if (updatedUser) {
      // Send the notification
      webpush
        .sendNotification(subscription, payload)
        .then(() => {
          console.log("Notification sent");
          res
            .status(200)
            .json({ success: true, message: "Notification sent successfully" });
        })
        .catch((error) => {
          console.error("Error sending notification", error);
          res
            .status(500)
            .json({ success: false, message: "Notification failed" });
        });
    }
  }
};

/**
 * Example response
 * {
  content: {
    userId: '66987f1e0469a1183bdda1fd',
    subscription: {
      endpoint: 'https://fcm.googleapis.com/fcm/send/doV_6DLjHJo:APA91bG0dVBQteuOH2cElwOJ5XXIg3lO761pf3VXBA9Rke2W_PDlBfDTQ4Gc_6LXrYUKjnqXgW205cOzhb2fgKd09TM-K83vBRzuq5y0LtP1zwkHvJoylL4BOqRF_Bep_CaoFDwUQvRJ',
      expirationTime: null,
      keys: [Object]
    }
  }
}
{ message: 'User subscribed to push notifications' }
 * 
 * 
 * 
 */
// controllers/notificationController.js

// Unsubscribe user from push notifications
const unsubscribeUser = async (req, res) => {
  try {
    const { userId } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Remove user's push subscription
    user.pushSubscription.subscription = null;
    await user.save();
    console.log({ message: "User unsubscribed from push notifications" });
    res
      .status(200)
      .json({ message: "User unsubscribed from push notifications" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const unsubscribeUserInternal = async (res) => {
  try {
    const userId = "66987f1e0469a1183bdda1fd";

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      console.log({ message: "User not found" });
    }

    // Remove user's push subscription
    user.pushSubscription.subscription = null;
    const updatedUser = await user.save();
    if (updatedUser) {
      console.log({ message: "User unsubscribed from push notifications" });
      console.log({ updatedUser });
    }
  } catch (error) {
    console.log({ message: error.message });
  }
};

// unsubscribeUserInternal()

const broadcast = async (req, res) => {
  const notifications = await Notification.find();
  if (!notifications) {
    return;
  }
  notifications.map(async ({ _id }) => {
    try {
      const notification = await Notification.findById(_id);
      if (!notification) {
        return res.status(404).json({ message: "Notification not found" });
      }

      const users =
        notification.targetUsers.length > 0
          ? await User.find({ _id: { $in: notification.targetUsers } })
          : await User.find({}); // If no target users, send to all users

      const payload = JSON.stringify({
        title: notification.title,
        body: notification.body,
        icon:
          notification.icon || "https://firebase.google.com/images/social.png",
        link: notification.icon || frontend,
      });

      console.log({ payload });
      // Send 201 - resource created
      const userPushPromises = users.map(async (user) => {
        if (user.pushSubscription && user.pushSubscription.endpoint) {
          const subscription = user.pushSubscription;

          // push.send(subscription, payload, (err, result) => {
          //   if (err) {
          //     console.log({ pushError: err });
          //   } else {
          //     console.log({ pushResponse: result });
          //   }
          // });
          // Send the notification
          webpush
            .sendNotification(subscription, payload)
            .then(() =>
              console.log({
                success: true,
                message: "Notification sent successfully",
              })
            )
            .catch((error) => {
              console.error("Error sending notification", error);
              console.log({ success: false, message: "Notification failed" });
            });
        }
      });

      await Promise.all(userPushPromises);

      notification.status = "sent";
      notification.sentAt = new Date();
      await notification.save();

      res.status(200).json({ message: "Notification sent" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

const notificationTargetGroup = async (days) => {
  const users = await User.find();
  let targetUsers = [];

  let today = new Date();
  console.log({ today });

  for (const user of users) {
    let lastLogin = user.lastLogin;

    const differenceInDays = await timeDifference(today, lastLogin);
    // last seen greater than "days"
    // if (differenceInDays > days) {
    //   targetUsers.push(user);
    // }

    // last seen less than "days"
    if (differenceInDays < days) {
      targetUsers.push(user);
    }
  }
  console.log({ targetUsers });
  return targetUsers; // Return the array after processing all users
};

// notificationTargetGroup(30)

const oneWeekAgoGroup = async () => {
  const users = await User.find();
  let oneWeekAgo = [];

  let today = new Date();
  console.log({ today });

  for (const user of users) {
    let lastLogin = user.lastLogin;

    const differenceInDays = await timeDifference(today, lastLogin);

    if (differenceInDays > 7) {
      oneWeekAgo.push(user);
    }
  }
  console.log({ response: oneWeekAgo });
  return oneWeekAgo; // Return the array after processing all users
};

// oneWeekAgoGroup()

// getOneWeekAgo()

async function timeDifference(timeNow, lastLogin) {
  // const timeNow = "2024-11-04T15:52:50.933Z";
  // const lastLogin = "2024-09-30T14:18:36.089Z";

  const dateNow = new Date(timeNow);
  const dateLastLogin = new Date(lastLogin);

  const differenceInMilliseconds = dateNow - dateLastLogin;

  // console.log({ dateNow, dateLastLogin, differenceInMilliseconds });

  const differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  console.log(differenceInDays);

  //3029654844

  return differenceInDays;
}

// timeDifference()

module.exports = {
  createNotification,
  createSingleNotification,
  getNotificationsById,
  getAllNotifications,
  deleteNotification,
  sendNotification,
  sendTargetGroupNotification,
  subscribeUser,
  unsubscribeUser,
  broadcast,
};

//endpoint1: https://fcm.googleapis.com/fcm/send/f-1gez1jkcI:APA91bErUS1ipYItBeMjlYY43ew4AOUVuK2p57KXPKFIUcP0nn-iDazY_ERTQeiAN6epwXqbltyhrtwvYL5C3fpDuZh2B8rG9pS7vPNR0UJdHdIalhP6ZXEKkqzxg3ky8xTNtgkdZ-XM
//endpoint2:
