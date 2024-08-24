const mongoose = require("mongoose");
const { Schema } = mongoose;

const researchSchema = new Schema({
  college_id: {
    type: String,
    required: true,
  },
  college_name: {
    type: String,
    required: true,
  },
  research_papers: [
    {
      title: {
        type: String,
        required: true,
      },
      authors: [
        {
          type: String,
        },
      ],
      year: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
});

const Research = mongoose.model("Research", researchSchema);

module.exports = Research;
