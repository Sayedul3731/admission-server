const mongoose = require("mongoose");
const { Schema } = mongoose;

const picturesSchema = new Schema({
  college_id: {
    type: String,
    required: true,
  },
  college_name: {
    type: String,
    required: true,
  },
  gallery: [
    {
      image_url: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],
});

const Pictures = mongoose.model("Pictures", picturesSchema);

module.exports = Pictures;
