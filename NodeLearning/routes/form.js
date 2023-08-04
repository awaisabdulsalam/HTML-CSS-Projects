const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  //! Before
  // res.send(`
  // <form action="form/submit" method="POST">
  // <input name='data' />
  // <button>Submit</button>
  // </form>
  // `)
  //!  After
  //?  sendFile because we sending whole FILE
  // res.sendFile(path.join(process.cwd(), "views", "form.html"));
  //!  After 2
  //*  Now we don't need to write file path like ABOVE
  //*  We already have defined in index.js file
  res.render("form");
});

router.post("/submit", (req, res) => {
  //*  bodyParser se ho k Data ithar " req.body " ma mil jaye ga

  // res.send("Submitted");
  res.send(req.body.data);
});

module.exports = router;
