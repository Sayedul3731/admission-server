const express = require("express");
const router = express.Router();
const College = require("../models/College");

router.get("/colleges", async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
router.post("/", async (req, res) => {
  const {
    college_name,
    image_url,
    rating,
    admission_date,
    research_count,
    details,
  } = req.body;
  try {
    const newUser = new College({
      college_name,
      image_url,
      rating,
      admission_date,
      research_count,
      details,
    });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
