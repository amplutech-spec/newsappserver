const express = require("express");
const router = express.Router();
const {
  register,
  login,
  updateProfile,
  getProfile
} = require("../controllers/userController");

// POST - register user
router.post("/register", register);

// POST - login user
router.post("/login", login);

// PUT - update user profile
router.put("/:id", updateProfile);

// GET - get user profile
router.get("/:id", getProfile);

module.exports = router;
