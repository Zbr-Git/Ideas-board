const express = require("express");

const router = express.Router();

const ideas = [
  {
    id: 1,
    text: "Just finished reading an amazing book!",
    tag: "Book",
    username: "avidreader22",
    date: "2024-01-30",
  },
  {
    id: 2,
    text: "Exploring the mountains today 🏔️",
    tag: "Travel",
    username: "wanderlust88",
    date: "2024-01-29",
  },
  {
    id: 3,
    text: "Coding a new project from scratch 💻",
    tag: "Technology",
    username: "codeNinja",
    date: "2024-01-28",
  },
  {
    id: 4,
    text: "Enjoying some homemade cookies 🍪",
    tag: "Food",
    username: "bakinglover",
    date: "2024-01-27",
  },
  {
    id: 5,
    text: "Watching the sunset by the beach 🌅",
    tag: "Nature",
    username: "beachlover",
    date: "2024-01-26",
  },
];

//Get all Ideas
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

//Get single Idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "resource not found" });
  }
  res.json({ success: true, data: idea });
});

//Add an idea
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);
  res.json({ success: true, data: idea });
});

module.exports = router;
