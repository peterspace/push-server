const express = require("express");
const {
  createLeadEvent,
  getLeadEvents,
  getLeadEventById,
  updateLeadEvent,
  deleteLeadEvent,
} = require("../controllers/leadControllers");
const router = express.Router();
//user authentication
const { protect, isAdmin } = require("../middleware/authMiddleware");

router.post("/", createLeadEvent);
router.get("/", getLeadEvents);
router.get("/:eventId", getLeadEventById);
router.put("/:eventId", updateLeadEvent);
router.delete("/:eventId", deleteLeadEvent);

module.exports = router;
