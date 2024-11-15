const express = require("express");
const {
  createPurchaseEvent,
  getPurchaseEvents,
  getPurchaseEventById,
  updatePurchaseEvent,
  deletePurchaseEvent,
} = require("../controllers/purchaseControllers");
const router = express.Router();
//user authentication
const { protect, isAdmin } = require("../middleware/authMiddleware");

router.post("/", createPurchaseEvent);
router.get("/", getPurchaseEvents);
router.get("/:eventId", getPurchaseEventById);
router.put("/:eventId", updatePurchaseEvent);
router.delete("/:eventId", deletePurchaseEvent);

module.exports = router;
