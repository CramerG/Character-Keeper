const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    }, 
    members: Array,
    characters: Array
}, {timestamps: true});

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;