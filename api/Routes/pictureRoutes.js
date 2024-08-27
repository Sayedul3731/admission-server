const express = require("express");
const router = express.Router();
const Picture = require("../models/Picture");

router.get("/pictures", async (req, res) => {
  try {
    const pictures = await Picture.find();
    if (!pictures) {
      return res.status(404).json({ message: "No Picture Found!" });
    }
    res.status(200).json(pictures);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!" });
  }
});

module.exports = router;
