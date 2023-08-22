const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id: {
        
    },
    name: { 
        type: String,
        required: [true, "Please add Name"]
    },
    email: {
        type: String,
        required: [true, "Please add Email"]
    },
    phone: {
        type: String,
        required: [true, "Please add phone"]
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Contact", contactSchema);