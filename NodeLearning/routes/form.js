const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(`
    <form>
    <input name='data' />
    <button>Submit</button>
    </form>
    `)
})

module.exports = router;