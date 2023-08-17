const express = require("express");
const router = express.Router();

const Staff = require("../controllers/staffController");
const Right = require("../controllers/rightController");

router.post("/staff/create", Staff.create);
router.post("/right/create", Right.create);

module.exports = router;