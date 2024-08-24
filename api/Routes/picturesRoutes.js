const express = require("express");
const router = express.Router();
const Pictures = require("../models/Pictures");

router.get("/pictures", async (req, res) => {
  try {
    const pictures = await Pictures.find();
    res.json(pictures);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
module.exports = router;
