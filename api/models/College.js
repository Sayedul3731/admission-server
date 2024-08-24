const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  college_name: { type: String, required: true },
  image_url: { type: String, required: true },
  rating: { type: Number, required: true },
  admission_date: { type: Date, required: true },
  research_count: { type: Number, required: true },
  details: {
    events: { type: [String], required: true },
    sports: { type: [String], required: true },
  },
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;
