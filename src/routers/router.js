const express = require("express");
const User = require("../models/model");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/contact", async (req, res) => {
  try {
    const data = new User(req.body);
    await data.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
