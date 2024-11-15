const express = require("express");
const {
  createPwa,
  getAllPwa,
  getPwaByIdAndLanguage,
  getPwaById,
  updatePwa,
  deletePwa,
} = require("../controllers/pwaControllers");
const router = express.Router();
//user authentication
const { protect, isAdmin } = require("../middleware/authMiddleware");

router.post("/", createPwa);
router.get("/", getAllPwa);
router.get("/:appId/:language", getPwaByIdAndLanguage);
router.get("/:appId", getPwaById);
router.patch("/", updatePwa);
router.delete("/:appId", deletePwa);

module.exports = router;
