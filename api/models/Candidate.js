const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  candidate_name: {
    type: String,
    required: true,
  },
  college_name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  candidate_email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  image: {
    type: String, // You can store the image as a URL or as a path to the file
    required: false,
    default: "",
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
