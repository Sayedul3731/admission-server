const express = require("express");
const router = express.Router();
const Pictures = require("../models/Pictures");

router.get("/pictures", async (req, res) => {
  try {
    const pictures = await Pictures.find();
    console.log(pictures);
    if (!pictures) {
      return res.status(404).json({ message: "No Pictures Found" });
    }
    res.status(200).json(pictures);
  } catch (err) {
    console.error(err);

    res.status(500).json({ msg: err.message });
  }
});
module.exports = router;
