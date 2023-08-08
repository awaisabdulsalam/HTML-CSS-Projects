const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");

const { createUser, login } = require("../controllers/auth");

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const respo = await login(req.body.email, req.body.password);
        res.status(200).send(respo);
    } catch(err) {
        res.send(err);
    }
});

router.post("/signup", async (req, res) => {
  try {
    const respo = await createUser(req.body.email, req.body.password);
    res.status(200).send(respo);
  } catch (err) {
    res.send(err);
  }
});


module.exports = router;
