const express = require("express");
const router = express.Router();
const Candidate = require("../models/Candidate");

router.get("/candidates", async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
router.post("/candidates", async (req, res) => {
  const {
    candidate_name,
    college_name,
    subject,
    candidate_email,
    phone_number,
    address,
    dob,
    image,
  } = req.body;

  try {
    // Create a new Candidate instance with the data from the request body
    const newCandidate = new Candidate({
      candidate_name,
      college_name,
      subject,
      candidate_email,
      phone_number,
      address,
      dob,
      image,
    });

    // Save the new candidate to the database
    await newCandidate.save();

    // Respond with the newly created candidate
    res.status(201).json(newCandidate);
  } catch (err) {
    // Handle any errors that occur during saving
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
