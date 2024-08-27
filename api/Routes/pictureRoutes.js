const express = require("express");
const router = express.Router();
const Picture = require("../models/Picture");

router.get("/", async (req, res) => {
  try {
    const pictures = await Picture.find();
    if (!pictures || pictures.length === 0) {
      return res.status(404).json({ message: "No Pictures Found!" });
    }
    res.status(200).json(pictures);
  } catch (error) {
    console.error("Error fetching pictures:", error);
    res.status(500).json({ msg: "Internal Server Error!" });
  }
});

module.exports = router;
