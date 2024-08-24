const express = require("express");
const router = express.Router();
const Research = require("../models/Research");

router.get("/researches", async (req, res) => {
  try {
    const research = await Research.find();
    res.json(research);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
module.exports = router;
