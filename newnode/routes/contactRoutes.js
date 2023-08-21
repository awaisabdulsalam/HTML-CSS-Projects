const express = require("express");
const router = express.Router();

const {
  getAllContact,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.get("/", getAllContact);

router.get("/:id", getContact);

router.post("/", createContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;

