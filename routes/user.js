const express = require("express");
// const { rateLimit } = require("express-rate-limit");

// //ip rate limit
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });

const router = express.Router();
const {
  loginAdmin,
  logout,
  getAdmin,
  getUserByIPAddress,
  getUserByAdvertiserId,
  updateUser,
  changePassword,
  forgotPassword,
  resetPassword,
  findUser,
  getAllUsers,
  getAllUsersByAdmin,
  getAllAdmins,
  registerAdmin,
  registerUser,
} = require("../controllers/userControllers");

const { protect } = require("../middleware/authMiddleware");

// router.get("/register", limiter, registerUser);
// router.get("/register", registerUser);
router.post("/register/admin", registerAdmin);
router.post("/login/admin", loginAdmin);
router.get("/logout", logout);
router.get("/get_user", protect, getAdmin);
router.get("/get_user_by_ip_address", protect, getUserByIPAddress);
router.get("/get_user_by_advertiser_id", protect, getUserByAdvertiserId);
router.patch("/update_user", protect, updateUser);
router.patch("/change_password", protect, changePassword);
router.post("/forgot_password", forgotPassword);
router.put("/reset_password/:resetToken", resetPassword);
router.get("/find_user", protect, findUser);

//==============================================

//==========={Admin Only}======================
router.get("/getAllUsers", protect, getAllUsers);
router.get("/getAllUsersByAdmin", protect, getAllUsersByAdmin);

router.get("/getAllAdmins", protect, getAllAdmins);

module.exports = router;
