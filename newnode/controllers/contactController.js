const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
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
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are Mandatory!");
  }
  console.log("The request is : ", req.body);
  const contact = await Contact.create({ 
    name: name,
    email: email,
    phone: phone,
    //?    Ye  " user.id "  aye gi jis user ka token hum pass krein gy
    user_id: req.user.id
  });
  res.status(201).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  // console.log(req.user.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact Not Found");
  }
  if(contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission");
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
   if (contact.user_id.toString() !== req.user.id) {
     res.status(403);
     throw new Error("User don't have permission");
   }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = { getAllContact, getContact, createContact, updateContact, deleteContact };