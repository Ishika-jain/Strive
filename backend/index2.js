const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = express.Router();
require("dotenv").config();

const app = express();
const port = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true },
});

const Post = mongoose.model("Post", postSchema);

const uri = process.env.URI;
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log("successful");
  })
  .catch((err) => console.log(err));

router.post("/", (req, res) => {
  res.send("backend working");
});

router.post("/post", async (req, res) => {
  try {
    const { name, message, date } = req.body;
    console.log(name, message, date);
    const post = new Post({
      name: name,
      message: message,
      date: date,
    });
    await post.save();
    res.status(200).json({ message: "post success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
});

router.get("/getPost", async (req, res) => {
  try {
    const postFound = await Post.find();
    res.status(200).send(postFound);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

router.get("/find/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const postFound = await Post.find({
      name: { $regex: new RegExp(name, "i") },
    });
    res.status(200).send(postFound);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Post.findByIdAndRemove(id);

    if (!result) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).send("uploading error");
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, message, date } = req.body;
    console.log(name, message, date);
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.name = name;
    post.message = message;
    post.date = date;
    await post.save();
    res.status(200).json({ message: "Post updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error updating post" });
  }
});

app.use("/api", router);

app.listen(port, () => {
  console.log("server started");
});