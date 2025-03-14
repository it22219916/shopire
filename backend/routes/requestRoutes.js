const express = require("express");
const router = express.Router();
const {
  createRequest,
  getAllRequest,
  getRequestById,
  approveUserRequest,
  deleteRequest,
} = require("../controller/requestController");

const { protect, adminProtect } = require("../middlewares/authMiddleware");

router.route("/approve/:id").put(protect, adminProtect, approveUserRequest)
router.route("/newSeller").post(protect, createRequest)
router.route("/all").get(protect, adminProtect, getAllRequest)
router.route("/:id").get(protect,adminProtect,getRequestById)
router.route("/:id").delete(deleteRequest)


module.exports = router;