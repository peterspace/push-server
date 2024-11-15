const dotenv = require("dotenv").config();
const https = require("https"); // new
const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const webpush = require("web-push");

const { errorHandler } = require("./middleware/errorMiddleware.js");
const cookieParser = require("cookie-parser");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(cors());
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

// app.use(limiter);

//references
//puppeteer and onrender config with docker: https://www.youtube.com/watch?v=6cm6G78ZDmM&t=320s
// Error Middleware
// Apply the middleware to your routes

app.use(errorHandler);

// Middleware to extract the IP address
app.use((req, res, next) => {
  const clientIp =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    "";

  req.clientIp = clientIp;

  next();
});

// -momery unleaked---------
app.set("trust proxy", 1);

//==================={Main Routes}========================================================

app.get("/", (req, res) => {
  const ip = req.clientIp;
  console.log({ ip });
  return res.json({
    ip,
  });
});
//======{all request to these endpoint are from the Keitaro server only}==========================

//Test notifications

const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;

webpush.setVapidDetails(
  "mailto: peter.space.io@gmail.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

// Route to handle the push notification request
app.post("/send-notification1", (req, res) => {
  const { subscription, data } = req.body;

  // console.log({ subscription });
  // console.log({ data });

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
});

app.post("/send-notification", (req, res) => {
  const { subscription, data } = req.body;

  // console.log({ subscription });
  // console.log({ data });

  const payload = JSON.stringify({
    title: "Test Notification",
    body: data.body || "This is a server side push notification",
    icon: "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
    image:
      "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180084/dmt/background/pwa-512x512.png",
    data: {
      url: "https://andreinwald.github.io/webpush-ios-example/?page=success",
      link: "https://andreinwald.github.io/webpush-ios-example/?page=success",
      message_id: "your_internal_unique_message_id_for_tracking",
    },
    badge:
      "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
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
});

async function generateVapidkeys() {
  const vapidKeys = webpush.generateVAPIDKeys();

  console.log("VAPID Public Key:", vapidKeys.publicKey);
  console.log("VAPID Private Key:", vapidKeys.privateKey);
}
// generateVapidkeys()
//or
//npx web-push generate-vapid-keys --json
//example response: {"publicKey":"BPPmkUKLke6uC19VTi0bJhnefHTmdNSu2UFrH-uzUL_ScihW2l3jHOVJ-oGw7WtHLpz92tz4r5L9Vrow6F0eQ4c","privateKey":"H04IWubw48yQeKJa0uAUSKwJw7amMKMaEZRc4xMxnpo"}
const server = app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
