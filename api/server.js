const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "https://college-admission-server-nine.vercel.app",
    // origin: "http://localhost:5173",
  })
);
app.use(express.json());

const userRoutes = require("./Routes/userRoutes");
const collegeRoutes = require("./Routes/collegeRoutes");
const pictureRoutes = require("./Routes/pictureRoutes");
const researchRoutes = require("./Routes/researchRoutes");
const candidateRoutes = require("./Routes/candidateRoutes");
app.use("/api", userRoutes);
app.use("/api", collegeRoutes);
app.use("/api", pictureRoutes);
app.use("/api", researchRoutes);
app.use("/api", candidateRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: "majority",
      j: true,
    },
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("College Admission is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// serverless function
module.exports = (req, res) => {
  return new Promise((resolve, reject) => {
    app(req, res, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};
