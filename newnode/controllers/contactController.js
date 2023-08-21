const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json("User Not Found");
  }
  res.status(200).json(contact);
});

const createContact = asyncHandler(async (req, res) => {
  console.log("The request is : ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are Mandatory!");
  }
  const contact = await Contact.create({ 
    name: name,
    email: email,
    phone: phone
  });
  res.status(201).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact Not Found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
    );
  res.status(200).json(updateContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  await Contact.remove();
  res.status(200).json(contact);
});

module.exports = { getAllContact, getContact, createContact, updateContact, deleteContact };