const Staff = require("../models/staffModel");

module.exports = {
    create: async (req, res) => {
        // const { name, email } = req.body;
        const staff = await Staff.create({
            name: req.body.name,
            email: req.body.email
        });

        return res.send(staff);
    }
}
