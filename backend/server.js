require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const colors = require("colors");
const postsRouter = require("./src/routes/posts");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/posts", postsRouter);
// app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!".blue.bold))
  .catch((err) => console.error("MongoDB connection error:".red, err));

// Routes

app.get("/", (req, res) => {
  res.send("Blog api running...".green);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`.teal));
