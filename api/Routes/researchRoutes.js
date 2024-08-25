const express = require("express");
const router = express.Router();
const Research = require("../models/Research");

router.get("/researches", async (req, res) => {
  try {
    const research = await Research.find();
    if (!research) {
      return res.status(404).json({ message: "No research found" });
    }
    res.status(200).json(research);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
module.exports = router;
