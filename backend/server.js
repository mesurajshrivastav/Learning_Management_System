require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONOG_URI = process.env.MONGO_URI;

cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.use(express.json());

//database connection
mongoose
  .connect(MONOG_URI)
  .then(() => console.log("MongoDB is connected"))
  .catch((e) => console.log("MongoDB Connection Error", e));


// optional catching global error
app.use((err, req, res, next) => {
  console.log(err.stack);
  req.status(500).json({
    success: false,
    Message: "Something went wrong",
  });
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
