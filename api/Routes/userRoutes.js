const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// @route   POST /api/users
// @desc    Create a new user
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
