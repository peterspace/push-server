const Purchase = require("../models/Purchase");
const User = require("../models/User");
const axios = require("axios");
const crypto = require("crypto");
const dotenv = require("dotenv").config();
const pixelId = process.env.FACEBOOK_PIXEL_ID; // Replace with your Pixel ID
const accessToken = process.env.FACEBOOK_PIXEL_ACCESS_TOKEN; // Replace with your Access Token

function hashData(data) {
  if (!data) return null;
  return crypto
    .createHash("sha256")
    .update(data.trim().toLowerCase())
    .digest("hex");
}


const testData = {
  fbclid: "37cionlfj9cd",
  external_id: "37cionlfj9cd",
  campaign_name: "iOS 46 / Wings Off Limits / Оффер",
  campaign_id: "354",
  visitor_code: "37cionl",
  user_agent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  ip: "185.250.45.208",
  offer_id: "910",
  os: "iOS",
  region: "NL_ZH",
  city: "Naaldwijk",
  source: "",
};

//new sub_id_28={sub_id_28}// user_id matching mongodb user._id

// const purchaseURL =
//   "http://localhost:4000/create_facebook_purchase_event?fbclid=37cionlfj9cd&external_id=37cionlfj9cd&campaign_name=iOS+46+%2F+Wings+Off+Limits+%2F+%D0%9E%D1%84%D1%84%D0%B5%D1%80&campaign_id=345&=true&visitor_code=37cionl&user_agent=Mozilla%2F5.0+%28iPhone%3B+CPU+iPhone+OS+17_5_1+like+Mac+OS+X%29+AppleWebKit%2F605.1.15+%28KHTML%2C+like+Gecko%29+Mobile%2F15E148&ip=185.250.45.208&offer_id=910&os=iOS&region=NL_ZH&city=Naaldwijk&source=";

const purchaseURL1 =
  "http://localhost:4000/create_facebook_purchase_event?fbclid=37cionlfj9cd&external_id=37cionlfj9cd&campaign_name=iOS+46+%2F+Wings+Off+Limits+%2F+%D0%9E%D1%84%D1%84%D0%B5%D1%80&campaign_id=345&=true&visitor_code=37cionl&user_agent=Mozilla%2F5.0+%28iPhone%3B+CPU+iPhone+OS+17_5_1+like+Mac+OS+X%29+AppleWebKit%2F605.1.15+%28KHTML%2C+like+Gecko%29+Mobile%2F15E148&ip=::ffff:127.0.0.1&offer_id=910&os=iOS&region=NL_ZH&city=Naaldwijk&source=";

const purchaseURL =
  "https://www.wingsofflimits.pro/create_facebook_purchase_event?fbclid=37cionlfj9cd&external_id=37cionlfj9cd&campaign_name=iOS+46+%2F+Wings+Off+Limits+%2F+%D0%9E%D1%84%D1%84%D0%B5%D1%80&campaign_id=345&=true&visitor_code=37cionl&user_agent=Mozilla%2F5.0+%28iPhone%3B+CPU+iPhone+OS+17_5_1+like+Mac+OS+X%29+AppleWebKit%2F605.1.15+%28KHTML%2C+like+Gecko%29+Mobile%2F15E148&ip=::ffff:127.0.0.1&offer_id=910&os=iOS&region=NL_ZH&city=Naaldwijk";

const purchaseURL2 =
  "https://www.wingsofflimits.pro/create_facebook_purchase_event?fbclid=37cionlfj9cd&external_id=37cionlfj9cd&campaign_name=iOS+46+%2F+Wings+Off+Limits+%2F+%D0%9E%D1%84%D1%84%D0%B5%D1%80&campaign_id=345&=true&visitor_code=37cionl&user_agent=Mozilla%2F5.0+%28iPhone%3B+CPU+iPhone+OS+17_5_1+like+Mac+OS+X%29+AppleWebKit%2F605.1.15+%28KHTML%2C+like+Gecko%29+Mobile%2F15E148&ip=37.110.31.236&offer_id=910&os=iOS&region=NL_ZH&city=Naaldwijk";

const createPurchaseEvent = async (req, res) => {
  try {
    const {
      fbclid, // profile.id,
      external_id, // profile.id,
      campaign_name,
      campaign_id,
      visitor_code,
      user_agent,
      ip,
      offer,
      region,
      city,
      sub_id_28,
    } = req.query;

    console.log({purchaseInfo: req.query})

    const user = await getUserByIPAddress(ip);
    if (user) {
      const newPurchaseEvent = new Purchase({
        eventType: "Purchase",
        userId: sub_id_28 ? sub_id_28 : user._id,// user_id from keitaro since may users could be using the same IP address for example using a home/office wifi
        fbclid, // profile.id,
        external_id, // profile.id,
        campaign_name,
        campaign_id,
        visitor_code,
        user_agent,
        ip,
        offer,
        region,
        city,
      });
      const purchaseData = await newPurchaseEvent.save();
      if (purchaseData) {
        console.log({ purchaseData });
        await facebookPixelPurchaseEvent(req);
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPurchaseEvents = async (req, res) => {
  try {
    const events = await Purchase.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

async function checkLeadsEvent(){
  const events = await Lead.find();
  console.log(events);

}
// checkLeadsEvent()

const getPurchaseEventById = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Purchase.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Purchase event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePurchaseEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { eventType, userId } = req.body;
    const updatedEvent = await Purchase.findByIdAndUpdate(
      eventId,
      { eventType, userId },
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: "Purchase event not found" });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePurchaseEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const deletedEvent = await Purchase.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Purchase event not found" });
    }
    res.status(200).json({ message: "Purchase event deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const sendFacebookLeadEvent = async (userId, leadData) => {
  //===={get user}=====================
  const userExist = await User.find({
    ipAddress: leadData.ip,
  });
  if (userExist[0]) {
    let user = userExist[0];

    const leadEvent = {
      appsflyer_id: leadData.appsflyer_id, // appsflyer_id
      idfa: user.advertiserTrackingId ? user.advertiserTrackingId : user._id, // advertiser_tracking_id or user_id
      eventName: "af_lead",
      eventValue: JSON.stringify({
        af_content_type: "sign_up",
        af_content_id: leadData.fbclid,
      }),
      eventCurrency: "USD", // Assuming default currency for leads
      eventTime: new Date().toISOString(),
      ip: leadData.ip,
    };

    await sendEventToAppsFlyer(leadEvent);
  }
};

/*
 * standard lead data from keitaro:
 
    fbclid: String, 
    external_id: String, 
    campaign_name: String,
    campaign_id: String,
    visitor_code: String,
    user_agent: String,
    ip: String,
    offer: String,
    region: String,
    city: String,

 *
 */

/**
 * required data from keitaro:
 * fbclid
 * campaign_id
 *
 * required data from server:
 * advertiserTrackingId
 * _id
 */
async function getUserByIPAddress(ip) {
  const userExist = await User.find({
    ipAddress: ip,
  });

  if (!userExist[0]) {
    console.log("user does not exist");
  }

  if (userExist[0]) {
    console.log({ userExist });
    return userExist[0];
  }
}

//test data

//facebook pixel

async function facebookPixelPurchaseEvent(req) {
  const {
    fbclid,
    external_id,
    campaign_name,
    campaign_id,
    visitor_code,
    user_agent,
    ip,
    offer,
    region,
    city,
    //====={others}===============
    date,
    country,
    phone,
    email,
  } = req.query;

  const client_ip_address = req.clientIp; // check

  console.log({ userIPAddress: ip });
  console.log({ requestURL: req.originalUrl });
  console.log({ Query: req.query });

  const unixTimeNow = Math.floor(Date.now() / 1000);
  console.log({ unixTimeNow });

  const min = 1;
  const max = 9999;
  let randomNumberFloat = Math.random() * (max - min) + min;

  const random = Math.round(randomNumberFloat);
  console.log({ random });

  if (unixTimeNow && random) {
    console.log({ processing: "calling facebook endpoint" });

    const url = `https://graph.facebook.com/v11.0/${pixelId}/events?access_token=${accessToken}`;

    const payload = {
      data: [
        {
          event_name: "Purchase",
          event_time: date
            ? Math.floor(new Date(date).getTime() / 1000)
            : unixTimeNow,
          action_source: "website",
          event_source_url: "https://av-gameprivacypolicy.site/app",
          event_id: fbclid || `event_${unixTimeNow}_${random}`, // add this to pixel data on landing page
          user_data: {
            external_id: external_id ? external_id.toString() : "user123",
            client_ip_address: ip || client_ip_address,
            client_user_agent:
              user_agent ||
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            fbc: `fb.1.${date || unixTimeNow}.${
              visitor_code ? visitor_code : "abcdefg"
            }`,
            fbp: `fb.1.${date || unixTimeNow}.${random}`,
            em: email ? [hashData(email.toString())] : null, // Hash and place email in array
            ph: phone ? [hashData(phone.toString())] : null, // Hash and place phone in array
            country: country ? [hashData(country.toString())] : null, // Hash and place country in array//[hashData("us")]
          },
          custom_data: {
            currency: "USD",
            value: 10.0,
          },
        },
      ],
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(url, payload, { headers: headers });

      if (response.data) {
        let result = response.data;
        console.log({ FB_purchase_event_result: result });
      }
    } catch (error) {
      console.log({ FB_purchase_event_error: error });
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  }
}

module.exports = {
  createPurchaseEvent,
  getPurchaseEvents,
  getPurchaseEventById,
  updatePurchaseEvent,
  deletePurchaseEvent,
};
