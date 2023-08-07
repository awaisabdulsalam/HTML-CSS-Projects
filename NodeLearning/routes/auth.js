const express = require("express");
const path = require("path");
const { createUser, login } = require("../controllers/auth");

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        await login(req.body.email, req.body.password);
        res.status(200).send("User already exist");
    } catch(err) {
        throw err;
    }
});

router.post("/signup", async (req, res) => {
  try {
    await createUser(req.body.email, req.body.password);
    res.status(200).send("User Successfully Created");
  } catch (err) {
    res.send(err);
  }
});


module.exports = router;
